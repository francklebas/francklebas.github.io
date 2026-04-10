import MarkdownIt from "markdown-it";
import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "@shikijs/engine-javascript";

let md: MarkdownIt | null = null;
let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighter(): Promise<HighlighterCore> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      engine: createJavaScriptRegexEngine(),
      themes: [import("shiki/themes/github-dark.mjs")],
      langs: [
        import("shiki/langs/typescript.mjs"),
        import("shiki/langs/javascript.mjs"),
        import("shiki/langs/vue.mjs"),
        import("shiki/langs/html.mjs"),
        import("shiki/langs/css.mjs"),
        import("shiki/langs/json.mjs"),
        import("shiki/langs/bash.mjs"),
        import("shiki/langs/shell.mjs"),
        import("shiki/langs/yaml.mjs"),
        import("shiki/langs/markdown.mjs"),
        import("shiki/langs/tsx.mjs"),
        import("shiki/langs/jsx.mjs"),
      ],
    });
  }
  return highlighterPromise;
}

function getRenderer(highlighter: HighlighterCore): MarkdownIt {
  if (md) return md;
  md = new MarkdownIt({
    html: false,
    linkify: true,
    breaks: false,
    typographer: true,
    highlight(code, lang) {
      const loaded = highlighter.getLoadedLanguages();
      const language = loaded.includes(lang) ? lang : "plaintext";
      try {
        return highlighter.codeToHtml(code, {
          lang: language,
          theme: "github-dark",
        });
      } catch {
        return "";
      }
    },
  });
  return md;
}

export async function renderMarkdown(source: string): Promise<string> {
  const highlighter = await getHighlighter();
  return getRenderer(highlighter).render(source);
}
