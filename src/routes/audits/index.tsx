import { createFileRoute } from "@tanstack/react-router";
import { Target } from "lucide-react";
import { Container } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";
import { LibraryBrowser } from "@/components/site/library-browser";
import { AUDITS, AUDIT_CATEGORIES } from "@/lib/data";

export const Route = createFileRoute("/audits/")({
  head: () => ({
    meta: [
      { title: "Audit Library — Hari" },
      { name: "description", content: "In-depth audits of real products to find friction, leaks and growth opportunities." },
    ],
  }),
  component: AuditsPage,
});

function AuditsPage() {
  return (
    <>
      <PageHeader eyebrow="Audit Library" title="Audit Library" description="In-depth audits of real products to find friction, leaks and growth opportunities." />
      <section className="py-12">
        <Container>
          <LibraryBrowser kind="audit" items={AUDITS} categories={AUDIT_CATEGORIES} futureLabel="Future Audit" />
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-surface p-8 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Target className="size-6" />
            </span>
            <h2 className="font-heading text-xl font-semibold">Each audit follows the same mission</h2>
            <p className="max-w-md text-sm text-muted-foreground">Find friction. Measure impact. Prioritize what matters.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
