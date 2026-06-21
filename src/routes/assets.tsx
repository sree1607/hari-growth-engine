import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, Layers, Lightbulb, Map, Plus, Wrench } from "lucide-react";
import { Container, Card, Tag } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";

const ASSETS = [
  { title: "Friction Map Template", desc: "Map where users hesitate, delay, or leave.", icon: Map, tag: "Template" },
  { title: "Audit Checklist", desc: "The same checklist I use on every product audit.", icon: FileText, tag: "Checklist" },
  { title: "Growth Diagnostic", desc: "A 30-question diagnostic for product growth.", icon: Lightbulb, tag: "Worksheet" },
  { title: "Onboarding Teardown Kit", desc: "Frameworks and prompts to teardown onboarding.", icon: Layers, tag: "Kit" },
  { title: "Conversion Leak Finder", desc: "Spreadsheet to quantify funnel leaks.", icon: Wrench, tag: "Tool" },
];

export const Route = createFileRoute("/assets")({
  head: () => ({
    meta: [
      { title: "Assets — Hari" },
      { name: "description", content: "Templates, checklists, and tools I use on every audit." },
    ],
  }),
  component: AssetsPage,
});

function AssetsPage() {
  return (
    <>
      <PageHeader eyebrow="Assets" title="Templates, tools & resources" description="The same templates and tools I use on every product audit." />
      <section className="py-12">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ASSETS.map((a) => (
            <Card key={a.title} interactive className="flex h-full flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <a.icon className="size-5" />
                </span>
                <Tag tone="brand">{a.tag}</Tag>
              </div>
              <h3 className="font-heading text-lg font-semibold">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              <button className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                <Download className="size-4" /> Download
              </button>
            </Card>
          ))}
          <Card className="flex h-full flex-col items-center justify-center gap-3 border-dashed text-center">
            <span className="flex size-11 items-center justify-center rounded-xl border border-dashed border-border text-muted-foreground">
              <Plus className="size-5" />
            </span>
            <h3 className="font-heading font-semibold text-muted-foreground">More coming soon</h3>
            <p className="text-sm text-muted-foreground">New templates added monthly.</p>
          </Card>
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance">Want these applied to your product?</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">I'll run the templates against your product and surface the biggest opportunities.</p>
              </div>
              <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
