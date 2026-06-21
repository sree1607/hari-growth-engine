import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";
import { LibraryBrowser } from "@/components/site/library-browser";
import { CASE_STUDIES, CASE_CATEGORIES } from "@/lib/data";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Hari" },
      { name: "description", content: "Real-world analyses. Actionable takeaways." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHeader eyebrow="Case Studies" title="Case Studies" description="Real-world analyses. Actionable takeaways." />
      <section className="py-12">
        <Container>
          <LibraryBrowser kind="case" items={CASE_STUDIES} categories={CASE_CATEGORIES} futureLabel="Future Case Study" />
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <div className="flex flex-col items-center gap-2 rounded-3xl border border-border bg-surface p-8 text-center">
            <h2 className="font-heading text-xl font-semibold">Each case study breaks down a real product problem and the insights behind it.</h2>
            <p className="text-sm text-muted-foreground">Learn from real patterns. Avoid real mistakes.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
