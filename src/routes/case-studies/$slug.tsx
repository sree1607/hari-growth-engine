import { createFileRoute, notFound } from "@tanstack/react-router";
import { Download, CheckCircle2, ChevronRight, Lightbulb } from "lucide-react";
import { Container, Card, Tag } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";
import { Tabs } from "@/components/site/tabs";
import { Icon } from "@/components/icon";
import { CASE_STUDIES, type CaseStudy } from "@/lib/data";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }): { cs: CaseStudy } => {
    const c = CASE_STUDIES.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { cs: c };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.cs.title} — Hari` : "Case Study — Hari" }],
  }),
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { cs: c } = Route.useLoaderData() as { cs: CaseStudy };

  const Overview = (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card className="flex flex-col gap-3">
            <h3 className="font-heading text-lg font-semibold">The Problem</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.problem}</p>
          </Card>
          <Card className="flex flex-col gap-3">
            <h3 className="font-heading text-lg font-semibold">The Impact</h3>
            <ul className="flex flex-col gap-2.5">
              {c.impactPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-4">
            <h3 className="font-heading text-lg font-semibold">At a Glance</h3>
            <div className="flex flex-col gap-3">
              {c.glance.map((g) => (
                <div key={g.label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Icon name={g.icon} className="size-4 text-primary" />{g.label}
                  </span>
                  <span className="font-semibold">{g.value}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">Activation Drop-off</p>
            <p className="font-heading text-4xl font-bold text-danger">{c.dropOff}</p>
            <p className="text-xs text-muted-foreground">Users drop off before reaching first value.</p>
            <div className="mt-2 flex items-end gap-1.5">
              {[40, 65, 30, 80, 50, 70, 45].map((h, i) => (
                <span key={i} className="flex-1 rounded-t bg-primary/60" style={{ height: `${h}px` }} />
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Card className="flex flex-col gap-4">
        <h3 className="font-heading text-lg font-semibold">User Journey Snapshot</h3>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          {c.journey.map((j, i) => (
            <div key={j} className="flex flex-1 items-center gap-3">
              <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-center">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">{i + 1}</span>
                <span className="text-sm font-medium">{j}</span>
              </div>
              {i < c.journey.length - 1 ? <ChevronRight className="hidden size-5 shrink-0 text-muted-foreground sm:block" /> : null}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const Recommendations = (
    <Card className="flex flex-col gap-4 border-primary/30 bg-accent/40">
      <div className="flex items-center gap-2">
        <Lightbulb className="size-5 text-primary" />
        <h3 className="font-heading text-lg font-semibold">Key Recommendation</h3>
      </div>
      <ul className="flex flex-col gap-2.5">
        {c.recommendations.map((r) => (
          <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed">
            <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" /><span>{r}</span>
          </li>
        ))}
      </ul>
    </Card>
  );

  const Takeaways = (
    <div className="grid gap-3 sm:grid-cols-2">
      {c.impactPoints.concat(c.recommendations).slice(0, 6).map((t) => (
        <Card key={t} className="flex items-start gap-2.5">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
          <span className="text-sm text-muted-foreground">{t}</span>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      <PageHeader
        backHref="/case-studies"
        backLabel="Back to Case Studies"
        eyebrow="Case Study"
        title={c.title}
        description={c.summary}
        action={
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            <Download className="size-4" /> Download PDF
          </button>
        }
      />
      <section className="py-12">
        <Container>
          <div className="mb-6 flex flex-wrap gap-2">
            {c.tags.map((t) => (<Tag key={t} tone={t === "High Impact" ? "danger" : "brand"}>{t}</Tag>))}
          </div>
          <Tabs tabs={[
            { label: "Overview", content: Overview },
            { label: "Key Findings", content: Takeaways },
            { label: "Recommendations", content: Recommendations },
            { label: "Takeaways", content: Takeaways },
          ]} />
        </Container>
      </section>
    </>
  );
}
