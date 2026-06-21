import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, SectionHeading, Card, Tag } from "@/components/site/primitives";
import { Icon } from "@/components/icon";
import { PROBLEMS, AUDITS, FRAMEWORKS, CASE_STUDIES, PROOFS } from "@/lib/data";

export function ProblemsSolve() {
  return (
    <section id="what-i-do" className="border-b border-border py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="What I Do"
          title="Problems I Solve"
          description="I dive deep to identify what is holding your product, users, and growth back."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <Card key={p.title} interactive className="flex flex-col gap-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon name={p.icon} className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
              <span className="mt-auto inline-flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground">
                <ArrowRight className="size-4" />
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeaturedAudits() {
  return (
    <section className="border-b border-border py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          align="left"
          eyebrow="Featured Audit"
          title="Real audits. Real problems. Real opportunities."
          action={
            <Link to="/audits" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              View all audits <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AUDITS.slice(0, 4).map((a) => (
            <Link key={a.slug} to="/audits/$slug" params={{ slug: a.slug }}>
              <Card interactive className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground">
                    <Icon name={a.icon} className="size-5" />
                  </span>
                  <Tag tone="brand">{a.category}</Tag>
                </div>
                <h3 className="font-heading text-lg font-semibold">{a.name}</h3>
                <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                  {a.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />{h}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View Audit <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FrameworkPreview() {
  return (
    <section className="border-b border-border py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          align="left"
          eyebrow="Framework Library"
          title="Proven frameworks to analyze and unlock growth."
          action={
            <Link to="/frameworks" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              View all frameworks <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FRAMEWORKS.slice(0, 3).map((f) => (
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
        </div>
      </Container>
    </section>
  );
}

export function CaseStudiesPreview() {
  return (
    <section className="border-b border-border py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          align="left"
          eyebrow="Case Studies"
          title="Real-world analyses. Actionable takeaways."
          action={
            <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              View all case studies <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }}>
              <Card interactive className="flex h-full flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <Tag key={t} tone={t === "High Impact" ? "danger" : "brand"}>{t}</Tag>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-semibold">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {c.keyFindings} Key Findings <ArrowUpRight className="size-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProofPreview() {
  return (
    <section className="border-b border-border py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          align="left"
          eyebrow="Proof Library"
          title="Real patterns. Real behavior. Real impact."
          action={
            <Link to="/proofs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              View all proofs <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROOFS.slice(0, 4).map((p) => (
            <Link key={p.slug} to="/proofs/$slug" params={{ slug: p.slug }}>
              <Card interactive className="flex h-full flex-col gap-4">
                <span className="font-heading text-4xl leading-none text-primary/40">&ldquo;</span>
                <p className="text-sm font-medium leading-relaxed">{p.quote}</p>
                <span className="mt-auto text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BottomCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance">
                Want a custom analysis for your product?
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                I'll apply the right frameworks to find your biggest growth opportunities.
              </p>
            </div>
            <Link
              to="/book-a-call"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Strategy Call <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
