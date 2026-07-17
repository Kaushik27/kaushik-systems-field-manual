import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("produces a static GitHub Pages export", async () => {
  await access(new URL("../out/index.html", import.meta.url));
  await access(new URL("../out/_next", import.meta.url));
  await access(new URL("../out/og.png", import.meta.url));
});

test("keeps the finished portfolio content and metadata", async () => {
  const [page, layout, css, packageJson, nextConfig] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /KAUSHIK/);
  assert.match(page, /Search modernization \+ applied AI/);
  assert.match(page, /Ready for the next/);
  assert.match(page, /className="skip-link"/);
  assert.match(page, /aria-live="polite"/);
  assert.match(page, /application\/ld\+json/);
  assert.match(layout, /Kaushik Mandal — Lead Software Engineer/);
  assert.match(layout, /NEXT_PUBLIC_SITE_URL/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /:focus-visible/);
  assert.match(packageJson, /"build": "next build"/);
  assert.match(nextConfig, /output:\s*"export"/);
  assert.match(nextConfig, /NEXT_PUBLIC_BASE_PATH/);
  assert.doesNotMatch(`${page}\n${layout}\n${packageJson}\n${nextConfig}`, /grainger\.com/i);
  assert.doesNotMatch(packageJson, /vinext|wrangler|cloudflare|drizzle/i);
});
