import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/primitives";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  backHref?: string;
  backLabel?: string;
  action?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="glow-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -top-24 left-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative flex flex-col gap-5 py-14">
        {backHref ? (
          <Link
            to={backHref}
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> {backLabel ?? "Back"}
          </Link>
        ) : null}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
          {action}
        </div>
      </Container>
    </section>
  );
}
