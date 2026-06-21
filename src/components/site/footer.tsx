import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "@/lib/data";
import { Container } from "@/components/site/primitives";

const LINKS = [
  ...NAV_LINKS,
  { label: "Assets", href: "/assets" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Call", href: "/book-a-call" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="font-heading text-lg font-bold tracking-tight">HAR<span className="relative inline-block text-orange-500">i<span className="absolute -top-[0.35em] left-1/2 block size-[0.35em] -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_6px_2px_rgba(250,204,21,0.85)]" /></span></span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I find what is holding your product back — deep product, growth, and user
              experience analysis for founders and teams.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {LINKS.map((link) =>
              link.href.startsWith("/#") ? (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Hari. All rights reserved.</p>
          <p>Built for clarity, scanning and action.</p>
        </div>
      </Container>
    </footer>
  );
}
