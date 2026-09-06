// @vitest-environment node

import { describe, expect, it } from "vitest";
import nextConfig from "../../../../next.config.mjs";

const guideSlugs = ["bullet-journal", "getting-things-done", "zettelkasten"] as const;

describe("guide documentation redirects", () => {
  it.each(guideSlugs)("redirects the former Usage route for %s", async (slug) => {
    const redirects = (await nextConfig.redirects?.()) ?? [];

    expect(redirects).toContainEqual({
      source: `/docs/usage/${slug}`,
      destination: `/docs/guides/${slug}`,
      permanent: true,
    });
  });

  it.each(["/docs/guides/shortcuts", "/docs/usage/shortcuts"])("redirects %s directly to Saved Views", async (source) => {
    const redirects = (await nextConfig.redirects?.()) ?? [];

    expect(redirects).toContainEqual({
      source,
      destination: "/docs/usage/saved-views",
      permanent: true,
    });
  });

  it("redirects retired RSS documentation to the removal explanation", async () => {
    const redirects = (await nextConfig.redirects?.()) ?? [];

    expect(redirects).toContainEqual({
      source: "/docs/integrations/rss",
      destination: "/docs/operations/upgrade#removed-features",
      permanent: true,
    });
  });
});
