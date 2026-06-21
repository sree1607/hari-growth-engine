import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Container, Card, Tag } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";
import { Icon } from "@/components/icon";
import { FRAMEWORKS } from "@/lib/data";

export const Route = createFileRoute("/frameworks/$slug")({
  loader: ({ params }) => {
    const f = FRAMEWORKS.find((x) => x.slug === params.slug);
    if (!f) throw notFound();
    return { framework: f };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.framework.name} — Hari` : "Framework — Hari" }],
  }),
  component: FrameworkDetail,
});

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5 text-sm leading-relaxed">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
          <span className="text-muted-foreground">{it}</span>
        </li>
      ))}
    </ul>
  );
}

function FrameworkDetail() {
  const { framework: f } = Route.useLoaderData();
  return (
    <>
      <PageHeader
        backHref="/frameworks"
        backLabel="Back to Frameworks"
        eyebrow="Framework"
        title={<>{f.name}{f.trademark ? <sup className="text-xl text-muted-foreground">™</sup> : null}</>}
        description={f.description}
      />
      <section className="py-16">
        <Container className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">The Flow</h2>
            <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
              {f.steps.map((s, i) => (
                <div key={s.label} className="flex flex-1 items-center gap-3">
                  <Card className="flex w-full flex-col items-center gap-2 text-center">
                    <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon name={s.icon} className="size-5" />
                    </span>
                    <h3 className="font-heading font-semibold">{s.label}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{s.description}</p>
                  </Card>
                  {i < f.steps.length - 1 ? <ChevronRight className="hidden size-5 shrink-0 text-muted-foreground lg:block" /> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold">How to Use It</h3>
              <List items={f.howToUse} />
            </Card>
            <Card className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold">Example Use Case</h3>
              <List items={f.exampleUseCase} />
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Framework Visual</h2>
            <Card className="flex flex-wrap items-center justify-center gap-6 py-10">
              {f.steps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                      <Icon name={s.icon} className="size-6" />
                    </span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </div>
                  {i < f.steps.length - 1 ? <span className="h-px w-8 bg-border sm:w-12" /> : null}
                </div>
              ))}
            </Card>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold">Why It Works</h3>
              <List items={f.whyItWorks} />
            </Card>
            <Card className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold">When to Use</h3>
              <div className="flex flex-wrap gap-2">
                {f.whenToUse.map((w) => (<Tag key={w} tone="brand">{w}</Tag>))}
              </div>
            </Card>
          </div>

          <Card className="flex flex-col items-center gap-4 bg-surface py-10 text-center">
            <span className="font-heading text-5xl leading-none text-primary/40">&ldquo;</span>
            <p className="max-w-2xl text-balance font-heading text-xl font-medium leading-relaxed sm:text-2xl">{f.quote}</p>
          </Card>
        </Container>
      </section>
    </>
  );
}
