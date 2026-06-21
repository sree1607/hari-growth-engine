import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Container, SectionHeading } from "@/components/site/primitives";
import { Icon } from "@/components/icon";

type Shortcut = {
  to: string;
  label: string;
  title: string;
  blurb: string;
  cta: string;
  icon: string;
  gradient: string;
  accent: string;
};

const SHORTCUTS: Shortcut[] = [
  {
    to: "/#what-i-do",
    label: "What I Do",
    title: "What I Do",
    blurb: "See the problems I solve for founders and product teams.",
    cta: "Explore what I do",
    icon: "Sparkles",
    gradient: "from-violet-500/40 via-fuchsia-500/20 to-transparent",
    accent: "text-violet-300",
  },
  {
    to: "/frameworks",
    label: "Frameworks",
    title: "Frameworks",
    blurb: "Proven frameworks I use to analyse products and unlock growth.",
    cta: "Enter Framework Library",
    icon: "LayoutGrid",
    gradient: "from-indigo-500/40 via-blue-500/20 to-transparent",
    accent: "text-indigo-300",
  },
  {
    to: "/audits",
    label: "Audits",
    title: "Audit Library",
    blurb: "Deep audits of real products. Real friction. Real opportunities.",
    cta: "Enter Audit Library",
    icon: "Target",
    gradient: "from-rose-500/40 via-orange-500/20 to-transparent",
    accent: "text-rose-300",
  },
  {
    to: "/case-studies",
    label: "Case Studies",
    title: "Case Studies",
    blurb: "Real-world breakdowns with clear, actionable takeaways.",
    cta: "Enter Case Studies",
    icon: "FileSearch",
    gradient: "from-emerald-500/40 via-teal-500/20 to-transparent",
    accent: "text-emerald-300",
  },
  {
    to: "/proofs",
    label: "Proofs",
    title: "Proof Library",
    blurb: "Patterns I have observed across 100+ products and user journeys.",
    cta: "Enter Proof Library",
    icon: "Brain",
    gradient: "from-cyan-500/40 via-sky-500/20 to-transparent",
    accent: "text-cyan-300",
  },
  {
    to: "/about",
    label: "About",
    title: "About Me",
    blurb: "Who I am, how I think, and how I work with founders.",
    cta: "Read about me",
    icon: "User",
    gradient: "from-amber-500/40 via-yellow-500/20 to-transparent",
    accent: "text-amber-300",
  },
  {
    to: "/assets",
    label: "Assets",
    title: "Assets",
    blurb: "Templates, checklists and tools I share with you for free.",
    cta: "Browse assets",
    icon: "Download",
    gradient: "from-lime-500/40 via-emerald-500/20 to-transparent",
    accent: "text-lime-300",
  },
  {
    to: "/contact",
    label: "Contact",
    title: "Contact",
    blurb: "Got a question or a product to discuss? Send me a message.",
    cta: "Get in touch",
    icon: "Mail",
    gradient: "from-pink-500/40 via-rose-500/20 to-transparent",
    accent: "text-pink-300",
  },
  {
    to: "/book-a-call",
    label: "Book a Call",
    title: "Book a Strategy Call",
    blurb: "30 minutes, no commitment. Walk away with clarity on what to fix first.",
    cta: "Book a call",
    icon: "CalendarClock",
    gradient: "from-primary/50 via-blue-500/20 to-transparent",
    accent: "text-primary",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Shortcut({ s, i }: { s: Shortcut; i: number }) {
  const isHash = s.to.startsWith("/#");
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease, delay: (i % 3) * 0.06 }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors hover:border-primary/40"
    >
      <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${s.gradient}`}>
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.foreground/0.12)_1px,transparent_0)] [background-size:14px_14px]" />
        <div className="absolute inset-0 flex items-center justify-between p-5">
          <span className={`flex size-14 items-center justify-center rounded-2xl border border-border/60 bg-background/70 backdrop-blur ${s.accent}`}>
            <Icon name={s.icon} className="size-7" />
          </span>
          <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
            {s.label}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-lg font-semibold tracking-tight">{s.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {s.cta}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.div>
  );

  if (isHash) {
    return (
      <a href={s.to} className="block h-full">
        {inner}
      </a>
    );
  }
  return (
    <Link to={s.to} className="block h-full">
      {inner}
    </Link>
  );
}

export function ShortcutsGrid() {
  return (
    <section className="border-b border-border py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Quick Access"
          title="Everything I do, one click away."
          description="Each shortcut opens the full section. Browse what interests you — the long-form lives one tap deeper."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SHORTCUTS.map((s, i) => (
            <Shortcut key={s.to} s={s} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
