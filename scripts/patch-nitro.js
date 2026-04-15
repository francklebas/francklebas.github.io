import { readFileSync, writeFileSync } from "fs";

const NITRO_PATH = "dist/_worker.js/chunks/nitro/nitro.mjs";

try {
  let content = readFileSync(NITRO_PATH, "utf-8");
  const bad = "get:(e,t,r)=>Reflect.has(e,t)?Reflect.get(e,t,r):Reflect.get(m,t,r)";
  const good = "get:(e,t,r)=>Reflect.has(e,t)?Reflect.get(e,t,r):Reflect.get(m,t,m)";

  if (content.includes(bad)) {
    content = content.replace(bad, good);
    writeFileSync(NITRO_PATH, content);
    console.log("[patch-nitro] Fixed Cloudflare process proxy bug.");
  } else {
    console.log("[patch-nitro] Patch not needed or already applied.");
  }
} catch (err) {
  console.error("[patch-nitro] Failed:", err.message);
  process.exit(1);
}
