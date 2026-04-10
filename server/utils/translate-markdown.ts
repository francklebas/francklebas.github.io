import type { CfEnv } from "./cf-env";

export type TargetLocale = "fr" | "sv";

const LANG_NAME: Record<TargetLocale, string> = {
  fr: "french",
  sv: "swedish",
};

const FENCE_RE = /```[\s\S]*?```/g;

// Captures markdown line prefix (heading, list marker, blockquote, indent)
// so we translate only the content and reattach the marker afterwards.
const LINE_PREFIX_RE =
  /^(\s*(?:(?:#{1,6}|[-*+]|\d+\.|>)\s+)*)(.*)$/;

// Detects horizontal rule lines (---, ***, ___) — leave untouched.
const HR_RE = /^\s*([-*_])(\s*\1){2,}\s*$/;

async function translateChunk(
  text: string,
  target: TargetLocale,
  ai: NonNullable<CfEnv["AI"]>,
): Promise<string> {
  if (!text.trim()) return text;
  try {
    const result = (await ai.run("@cf/meta/m2m100-1.2b", {
      text,
      source_lang: "english",
      target_lang: LANG_NAME[target],
    })) as { translated_text?: string };
    return result.translated_text ?? text;
  } catch {
    return text;
  }
}

async function translateLine(
  line: string,
  target: TargetLocale,
  ai: NonNullable<CfEnv["AI"]>,
): Promise<string> {
  if (!line.trim()) return line;
  if (HR_RE.test(line)) return line;
  const match = line.match(LINE_PREFIX_RE);
  if (!match) return translateChunk(line, target, ai);
  const prefix = match[1] ?? "";
  const content = match[2] ?? "";
  if (!content.trim()) return line;
  const translated = await translateChunk(content, target, ai);
  return prefix + translated;
}

/**
 * Translate plain text (e.g. titles, descriptions) — single line, no markdown.
 */
export async function translateText(
  text: string,
  target: TargetLocale,
  ai: NonNullable<CfEnv["AI"]>,
): Promise<string> {
  if (!text.trim()) return text;
  return translateChunk(text, target, ai);
}

/**
 * Translate a markdown document while preserving structure:
 *  - fenced code blocks left untouched
 *  - line-by-line translation so paragraph/list/heading breaks survive
 *  - markdown line markers (#, >, -, *, 1.) reattached after translation
 */
export async function translateMarkdown(
  md: string,
  target: TargetLocale,
  ai: NonNullable<CfEnv["AI"]>,
): Promise<string> {
  const segments: { text: string; isCode: boolean }[] = [];
  let lastIndex = 0;
  for (const match of md.matchAll(FENCE_RE)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      segments.push({ text: md.slice(lastIndex, start), isCode: false });
    }
    segments.push({ text: match[0], isCode: true });
    lastIndex = start + match[0].length;
  }
  if (lastIndex < md.length) {
    segments.push({ text: md.slice(lastIndex), isCode: false });
  }

  const out: string[] = [];
  for (const seg of segments) {
    if (seg.isCode) {
      out.push(seg.text);
      continue;
    }
    const lines = seg.text.split("\n");
    const translatedLines = await Promise.all(
      lines.map((line) => translateLine(line, target, ai)),
    );
    out.push(translatedLines.join("\n"));
  }
  return out.join("");
}
