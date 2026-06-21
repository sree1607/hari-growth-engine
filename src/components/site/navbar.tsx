import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/site/primitives";
import { ThemeToggle } from "@/components/site/theme-toggle";

const EXTRA_LINKS = [
  { label: "Assets", href: "/assets" },
  { label: "Contact", href: "/contact" },
];

const ALL_LINKS = [...NAV_LINKS, ...EXTRA_LINKS];

function LogoText() {
  return (
    <span className="font-heading">
      HAR
      <span className="relative inline-block text-orange-500">
        i
        <span className="absolute -top-[0.35em] left-1/2 block size-[0.35em] -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_6px_2px_rgba(250,204,21,0.85)]" />
      </span>
    </span>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight">
      <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 5v14M19 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </span>
      <LogoText />
    </Link>
  );
}

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]) && href !== "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {ALL_LINKS.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive(link.href) && "text-foreground",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/book-a-call"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Book a Call
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-secondary text-secondary-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col py-3">
            {ALL_LINKS.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              to="/book-a-call"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Call
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
