import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Container, Card, Tag } from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hari" },
      { name: "description", content: "Get in touch about a product audit, framework, or strategy call." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk" description="Tell me about your product. I'll get back within a day." />
      <section className="py-12">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Card className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold">Reach out</h3>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary"><Mail className="size-4" /></span>
                <a href="mailto:hello@hari.work" className="font-medium hover:text-primary">hello@hari.work</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary"><MapPin className="size-4" /></span>
                <span className="text-muted-foreground">Remote · Asia/Kolkata (GMT+5:30)</span>
              </div>
            </Card>
            <Card className="flex flex-col gap-3">
              <h3 className="font-heading text-lg font-semibold">Prefer a quick call?</h3>
              <p className="text-sm text-muted-foreground">Book a 30-min strategy call. No commitment, clarity first.</p>
              <Link to="/book-a-call" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Book a Strategy Call
              </Link>
              <div className="mt-2 flex flex-wrap gap-2">
                {["30-min call","No commitment","Clarity first"].map((t) => (<Tag key={t} tone="brand">{t}</Tag>))}
              </div>
            </Card>
          </div>

          <Card className="flex flex-col gap-4">
            <h3 className="font-heading text-lg font-semibold">Send a message</h3>
            {sent ? (
              <p className="rounded-lg bg-success/15 p-4 text-sm text-success">Thanks! I'll be in touch shortly.</p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="flex flex-col gap-4"
              >
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium">Name</span>
                  <input required className="h-10 rounded-lg border border-border bg-background px-3 outline-none focus:border-primary" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium">Email</span>
                  <input required type="email" className="h-10 rounded-lg border border-border bg-background px-3 outline-none focus:border-primary" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium">What are you working on?</span>
                  <textarea required rows={5} className="rounded-lg border border-border bg-background px-3 py-2 outline-none focus:border-primary" />
                </label>
                <button className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  <Send className="size-4" /> Send message
                </button>
              </form>
            )}
          </Card>
        </Container>
      </section>
    </>
  );
}
