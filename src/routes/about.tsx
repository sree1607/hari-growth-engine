import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Container, Card, Tag, SectionHeading } from "@/components/site/primitives";
import { Icon } from "@/components/icon";
import { APPROACH, ABOUT_BADGES, NUMBERS, WHO_I_WORK_WITH } from "@/lib/data";
import portrait from "@/assets/hari-portrait.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hari" },
      { name: "description", content: "I help founders and teams find what is holding their product back—and fix it." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="glow-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -top-24 left-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Tag tone="brand">About Me</Tag>
            <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              I help founders and teams find what's holding their product back—and{" "}
              <span className="text-primary">fix it.</span>
            </h1>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              I combine deep analysis, product thinking, and real-world patterns to uncover
              friction, confusion, and growth blockers that most overlook.
            </p>
            <ul className="flex flex-col gap-2.5">
              {ABOUT_BADGES.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="size-4 text-success" />{b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-primary/20 to-card">
            <img src={portrait.url} alt="Hari" className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16">
        <Container className="flex flex-col gap-10">
          <SectionHeading align="left" eyebrow="Methodology" title="My Approach" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((a, i) => (
              <Card key={a.title} className="flex flex-col gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon name={a.icon} className="size-5" />
                </span>
                <h3 className="font-heading font-semibold">
                  <span className="mr-1.5 text-muted-foreground">{i + 1}.</span>{a.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16">
        <Container className="grid gap-4 lg:grid-cols-3">
          <Card className="flex flex-col gap-4">
            <Quote className="size-6 text-primary" />
            <h3 className="font-heading text-lg font-semibold">What I Believe</h3>
            <p className="text-balance font-heading text-xl font-medium leading-relaxed">
              Complexity is the enemy of activation and retention.
            </p>
          </Card>
          <Card className="flex flex-col gap-4">
            <h3 className="font-heading text-lg font-semibold">Who I Work With</h3>
            <div className="flex flex-wrap gap-2">
              {WHO_I_WORK_WITH.map((w) => (<Tag key={w} tone="brand">{w}</Tag>))}
            </div>
          </Card>
          <Card className="flex flex-col gap-4">
            <h3 className="font-heading text-lg font-semibold">Numbers (So Far)</h3>
            <div className="grid grid-cols-2 gap-4">
              {NUMBERS.map((n) => (
                <div key={n.label}>
                  <p className="font-heading text-2xl font-bold text-primary">{n.value}</p>
                  <p className="text-xs text-muted-foreground">{n.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex flex-col items-center gap-5">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance">
                Let's find what's holding your product back.
              </h2>
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
