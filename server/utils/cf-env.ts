import type { H3Event } from "h3";

export interface CfEnv {
  AI?: {
    run: (model: string, input: Record<string, unknown>) => Promise<unknown>;
  };
  BLOG_KV?: {
    get: (key: string, type?: "json" | "text") => Promise<unknown>;
    put: (
      key: string,
      value: string,
      options?: { expirationTtl?: number },
    ) => Promise<void>;
    delete: (key: string) => Promise<void>;
  };
}

export function getCfEnv(event: H3Event): CfEnv {
  const ctx = (event.context as { cloudflare?: { env?: CfEnv } }).cloudflare;
  return ctx?.env ?? {};
}
