"use client";

import { scrollToSection } from "@/lib/scroll";

/**
 * An in-page link that scrolls through Lenis instead of jumping.
 *
 * The `href` stays a real anchor, so the link still works with JavaScript
 * disabled, keeps its context menu, and remains focusable — the handler only
 * takes over the plain left-click.
 */
export default function AnchorLink({
  href,
  className,
  children,
  ...rest
}: React.ComponentProps<"a"> & { href: string }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        // Leave modified clicks (new tab, new window, download) to the browser.
        if (e.defaultPrevented || e.button !== 0) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        scrollToSection(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
