import { createFileRoute, notFound } from "@tanstack/react-router";
import { Download, CheckCircle2, Lightbulb } from "lucide-react";
import { Container, Card, Tag } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";
import { Tabs } from "@/components/site/tabs";
import { Icon } from "@/components/icon";
import { AUDITS, AUDIT_FINDINGS, AUDIT_IMPACT_BLOCKS, type Audit } from "@/lib/data";

export const Route = createFileRoute("/audits/$slug")({
  loader: ({ params }): { audit: Audit } => {
    const a = AUDITS.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return { audit: a };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.audit.name} — Hari` : "Audit — Hari" }],
  }),
  component: AuditDetail,
});

function AuditDetail() {
  const { audit: a } = Route.useLoaderData();
  const overviewMetrics = [
    { value: String(a.frictionPoints), label: "Friction Points", sub: "Identified" },
    { value: String(a.activationBlockers), label: "Activation Blockers", sub: "High Impact" },
    { value: String(a.trustLeaks), label: "Trust Leaks", sub: "Detected" },
    { value: a.impactScore, label: "Impact Score", sub: "Overall" },
  ];

  const Overview = (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="font-heading text-lg font-semibold">Audit Overview</h3>
        <p className="mt-1 text-sm text-muted-foreground">A quick snapshot of what I found.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {overviewMetrics.map((m) => (
            <Card key={m.label} className="flex flex-col gap-1">
              <span className="font-heading text-3xl font-bold text-primary">{m.value}</span>
              <span className="text-sm font-medium">{m.label}</span>
              <span className="text-xs text-muted-foreground">{m.sub}</span>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h4 className="font-heading font-semibold">Product Snapshot</h4>
          <p className="mt-1 text-sm text-muted-foreground">{a.intro}</p>
        </Card>
        <Card className="flex flex-col gap-2">
          <Lightbulb className="size-5 text-warning" />
          <h4 className="font-heading font-semibold">Key Takeaway</h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {a.company} tries to do too much, too early. New users face high complexity before
            experiencing value, creating hesitation and early drop-offs.
          </p>
        </Card>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIT_IMPACT_BLOCKS.map((b) => (
          <Card key={b.title} className="flex flex-col gap-2">
            <Icon name={b.icon} className="size-5 text-primary" />
            <h4 className="font-heading text-sm font-semibold">{b.title}</h4>
            <p className="text-xs leading-relaxed text-muted-foreground">{b.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const Findings = (
    <div className="flex flex-col gap-4">
      {AUDIT_FINDINGS.map((f) => (
        <Card key={f.rank} className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="font-heading text-2xl font-bold text-primary/50">{f.rank}</span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-heading font-semibold">{f.title}</h4>
                <Tag tone="danger">{f.impact}</Tag>
              </div>
              <p className="mt-1 max-w-md text-sm text-muted-foreground">{f.description}</p>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs text-muted-foreground">Impact Score</p>
            <p className="font-heading text-lg font-bold">{f.score}</p>
            <p className="text-xs text-muted-foreground">{f.category}</p>
          </div>
        </Card>
      ))}
    </div>
  );

  const Opportunities = (
    <div className="grid gap-3 sm:grid-cols-2">
      {["Guide new users to one clear first win.","Reduce cognitive load on the home screen.","Create a focused starting experience.","Surface key actions above the fold."].map((o) => (
        <Card key={o} className="flex items-start gap-2.5">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
          <span className="text-sm text-muted-foreground">{o}</span>
        </Card>
      ))}
    </div>
  );

  const Recommendations = (
    <div className="flex flex-col gap-3">
      {["Simplify onboarding to a single core action.","Remove non-essential setup steps.","Show value before asking for commitment."].map((r, i) => (
        <Card key={r} className="flex items-center gap-4">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">{i + 1}</span>
          <span className="text-sm">{r}</span>
        </Card>
      ))}
    </div>
  );

  const Summary = (
    <Card className="flex flex-col gap-3">
      <h4 className="font-heading font-semibold">Summary</h4>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {a.name} reveals {a.frictionPoints} friction points and {a.activationBlockers} activation
        blockers. The biggest opportunity is to reduce early complexity and guide users to their first win faster.
      </p>
    </Card>
  );

  return (
    <>
      <PageHeader
        backHref="/audits"
        backLabel="Back to Audits"
        eyebrow="Audit"
        title={a.name}
        description={a.intro}
        action={
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            <Download className="size-4" /> Download PDF
          </button>
        }
      />
      <section className="py-12">
        <Container>
          <div className="mb-6"><Tag tone="brand">{a.category}</Tag></div>
          <Tabs tabs={[
            { label: "Overview", content: Overview },
            { label: "Findings", content: Findings },
            { label: "Opportunities", content: Opportunities },
            { label: "Recommendations", content: Recommendations },
            { label: "Summary", content: Summary },
          ]} />
        </Container>
      </section>
    </>
  );
}
