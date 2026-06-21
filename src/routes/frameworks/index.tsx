import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
import { Container, Card, SectionHeading } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";
import { Icon } from "@/components/icon";
import { FRAMEWORKS, FRAMEWORK_HELP_STEPS, FUTURE_FRAMEWORK } from "@/lib/data";

export const Route = createFileRoute("/frameworks/")({
  head: () => ({
    meta: [
      { title: "Framework Library — Hari" },
      { name: "description", content: "Proven frameworks to analyze and unlock growth." },
    ],
  }),
  component: FrameworksPage,
});

function FrameworksPage() {
  return (
    <>
      <PageHeader eyebrow="Framework Library" title="Frameworks" description="Proven frameworks to analyze friction, build trust, and unlock growth." />
      <section className="py-16">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FRAMEWORKS.map((f) => (
            <Link key={f.slug} to="/frameworks/$slug" params={{ slug: f.slug }}>
              <Card interactive className="flex h-full flex-col gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon name={f.icon} className="size-6" />
                </span>
                <h3 className="font-heading text-lg font-semibold">
                  {f.name}{f.trademark ? <sup className="text-xs text-muted-foreground">™</sup> : null}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View Framework <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
          ))}
          <Card className="flex h-full flex-col items-center justify-center gap-3 border-dashed text-center">
            <span className="flex size-12 items-center justify-center rounded-xl border border-dashed border-border text-muted-foreground">
              <Plus className="size-6" />
            </span>
            <h3 className="font-heading text-lg font-semibold text-muted-foreground">{FUTURE_FRAMEWORK.name}</h3>
            <p className="text-sm text-muted-foreground">{FUTURE_FRAMEWORK.description}</p>
          </Card>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16">
        <Container className="flex flex-col gap-10">
          <SectionHeading title="How My Frameworks Help" align="center" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FRAMEWORK_HELP_STEPS.map((s, i) => (
              <li key={s.label} className="flex flex-col items-center gap-3 text-center">
                <span className="relative flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon name={s.icon} className="size-5" />
                  <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                </span>
                <h3 className="font-heading font-semibold">{s.label}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance">Want a custom analysis for your product?</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">I'll apply the right frameworks to find your biggest growth opportunities.</p>
              </div>
              <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Book a Strategy Call <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
