import { createFileRoute } from "@tanstack/react-router";
import { BookingFlow } from "@/components/booking/booking-flow";
import { Container, Card, Tag } from "@/components/site/primitives";
import { Icon } from "@/components/icon";
import { PROFILE, CALL_BENEFITS, CALL_PROMISES } from "@/lib/data";

export const Route = createFileRoute("/book-a-call")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — Hari" },
      { name: "description", content: "Book a strategy call to find what's holding your product back and build a clear plan to fix it." },
    ],
  }),
  component: BookACall,
});

function BookACall() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Let's Talk</span>
          <h1 className="mt-3 font-heading text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Book a Strategy Call</h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Let's find what's holding your product back and build a clear plan to fix it.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CALL_PROMISES.map((p) => (<Tag key={p} tone="brand">{p}</Tag>))}
          </div>
        </div>

        <BookingFlow />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-4 font-heading text-lg font-semibold">What we will cover</h2>
            <ul className="flex flex-col gap-3">
              {CALL_BENEFITS.map((b) => (
                <li key={b.title} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Icon name="CheckCircle" className="size-3.5" />
                  </span>
                  {b.title}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="flex flex-col justify-between gap-6">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon name="HelpCircle" className="size-5" />
              </span>
              <div>
                <h3 className="font-heading font-semibold">Not sure what to ask?</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">No problem. I'll guide the conversation. The goal is clarity.</p>
              </div>
            </div>
            <figure className="rounded-xl border border-border bg-muted/40 p-4">
              <div className="mb-2 flex gap-0.5 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (<Icon key={i} name="Sparkles" className="size-4" />))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground">
                "{PROFILE.name} helped me see what we were blind to. The insights were sharp and actionable."
              </blockquote>
              <figcaption className="mt-2 text-xs text-muted-foreground">— Product Founder</figcaption>
            </figure>
          </Card>
        </div>
      </Container>
    </div>
  );
}
