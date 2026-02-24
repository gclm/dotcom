import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/logo.png" alt="Memos" width={24} height={24} className="rounded" priority />
        Memos
      </>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
    },
    {
      text: "Changelog",
      url: "/changelog",
    },
    {
      text: "Features",
      url: "/features",
    },
  ],
  githubUrl: "https://github.com/usememos/memos",
};
