import { createFileRoute, notFound } from "@tanstack/react-router";
import { Share2, CheckCircle2, ChevronRight, Target, TrendingUp } from "lucide-react";
import { Container, Card, Tag } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";
import { Tabs } from "@/components/site/tabs";
import { Icon } from "@/components/icon";
import { PROOFS, type Proof } from "@/lib/data";

export const Route = createFileRoute("/proofs/$slug")({
  loader: ({ params }): { proof: Proof } => {
    const p = PROOFS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { proof: p };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: "Proof — Hari" }, { name: "description", content: loaderData?.proof.quote ?? "" }],
  }),
  component: ProofDetail,
});

function ProofDetail() {
  const { proof: p } = Route.useLoaderData() as { proof: Proof };

  const WhyItsTrue = (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="flex flex-col gap-6 lg:col-span-2">
        <Card className="flex flex-col gap-3">
          <h3 className="font-heading text-lg font-semibold">Why It's True</h3>
          <ul className="flex flex-col gap-2.5">
            {p.whyItsTrue.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                <span className="text-muted-foreground">{w}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="font-heading text-lg font-semibold">Common Patterns</h3>
          <ul className="flex flex-col gap-2.5">
            {p.commonPatterns.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-danger" />
                <span className="text-muted-foreground">{w}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Card className="flex h-fit flex-col gap-4">
        <h3 className="font-heading text-lg font-semibold">Real Examples</h3>
        <div className="flex flex-col gap-3">
          {p.examples.map((e) => (
            <div key={e.name} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                <Icon name={e.icon} className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">{e.name}</p>
                <p className="text-xs text-muted-foreground">{e.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const WhatToDo = (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="flex flex-col gap-4 border-primary/30 bg-accent/40">
        <div className="flex items-center gap-2">
          <Target className="size-5 text-primary" />
          <h3 className="font-heading text-lg font-semibold">What To Do</h3>
        </div>
        <ul className="flex flex-col gap-2.5">
          {p.whatToDo.map((w) => (
            <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed">
              <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" /><span>{w}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="size-5 text-success" />
          <h3 className="font-heading text-lg font-semibold">Potential Impact</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {p.potentialImpact.map((w) => (<Tag key={w} tone="success">{w}</Tag>))}
        </div>
      </Card>
    </div>
  );

  const Examples = (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {p.examples.map((e) => (
        <Card key={e.name} className="flex flex-col gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-muted">
            <Icon name={e.icon} className="size-5" />
          </span>
          <h4 className="font-heading font-semibold">{e.name}</h4>
          <p className="text-sm text-muted-foreground">{e.note}</p>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      <PageHeader
        backHref="/proofs"
        backLabel="Back to Proofs"
        eyebrow={`Proof · ${p.category}`}
        title={<span className="text-balance">{p.quote}</span>}
        action={
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/40">
            <Share2 className="size-4" /> Share Proof
          </button>
        }
      />
      <section className="py-12">
        <Container>
          <div className="mb-6 flex items-center gap-3">
            <Tag tone="brand">{p.category}</Tag>
            <span className="text-sm text-muted-foreground">Confidence: High</span>
          </div>
          <Tabs tabs={[
            { label: "Why It's True", content: WhyItsTrue },
            { label: "Examples", content: Examples },
            { label: "What To Do", content: WhatToDo },
          ]} />
        </Container>
      </section>
    </>
  );
}
