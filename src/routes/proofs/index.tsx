import { createFileRoute } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { Container } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";
import { LibraryBrowser } from "@/components/site/library-browser";
import { PROOFS, PROOF_CATEGORIES } from "@/lib/data";

export const Route = createFileRoute("/proofs/")({
  head: () => ({
    meta: [
      { title: "Proof Library — Hari" },
      { name: "description", content: "Observations from 100+ products and user experiences." },
    ],
  }),
  component: ProofsPage,
});

function ProofsPage() {
  return (
    <>
      <PageHeader eyebrow="Proof Library" title="Proof Library" description="Observations from 100+ products and user experiences." />
      <section className="py-12">
        <Container>
          <LibraryBrowser kind="proof" items={PROOFS} categories={PROOF_CATEGORIES} futureLabel="Future Proof" />
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-surface p-8 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Brain className="size-6" />
            </span>
            <h2 className="font-heading text-xl font-semibold">Real patterns. Real behavior. Real impact.</h2>
            <p className="max-w-md text-sm text-muted-foreground">These are not opinions. These are what products teach us.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
