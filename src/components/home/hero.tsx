import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Container, Tag } from "@/components/site/primitives";
import { Icon } from "@/components/icon";
import { CAPABILITY_BADGES } from "@/lib/data";
import portrait from "@/assets/hari-portrait.asset.json";

const ease = [0.22, 1, 0.36, 1] as const;

const METRICS = [
  { label: "Growth Impact", value: "+43%", sub: "Potential Increase" },
  { label: "User Friction", value: "7", sub: "Critical Issues Found" },
  { label: "Conversion Leak", value: "28%", sub: "Lost Opportunities" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="glow-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-6">
          <Tag tone="brand">I analyze. I find. I improve.</Tag>
          <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            I find what's holding your <span className="text-primary">product</span> back.
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Deep analysis. Clear insights. Actionable solutions for founders who want real growth.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/frameworks"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore My Work <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/book-a-call"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/40"
            >
              Book a Call
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="size-8 rounded-full border-2 border-background bg-muted" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by founders &amp; teams to solve meaningful problems.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-primary/20 to-card">
            <img src={portrait.url} alt="Hari, product and growth analyst" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -left-2 top-8 w-40 rounded-xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur sm:-left-6">
            <p className="text-xs text-muted-foreground">{METRICS[0].label}</p>
            <p className="text-xl font-bold text-success">{METRICS[0].value}</p>
            <p className="text-[10px] text-muted-foreground">{METRICS[0].sub}</p>
          </div>
          <div className="absolute -right-2 top-1/3 w-36 rounded-xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur sm:-right-6">
            <p className="text-xs text-muted-foreground">{METRICS[1].label}</p>
            <p className="text-xl font-bold text-danger">{METRICS[1].value}</p>
            <p className="text-[10px] text-muted-foreground">{METRICS[1].sub}</p>
          </div>
          <div className="absolute -bottom-4 left-6 w-40 rounded-xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur">
            <p className="text-xs text-muted-foreground">{METRICS[2].label}</p>
            <p className="text-xl font-bold text-warning">{METRICS[2].value}</p>
            <p className="text-[10px] text-muted-foreground">{METRICS[2].sub}</p>
          </div>
        </div>
      </Container>

      <Container className="relative pb-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CAPABILITY_BADGES.map((badge, i) => (
            <div key={badge} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium">
              <Icon name={["Activity", "Target", "TrendingUp", "Sparkles"][i]} className="size-4 text-primary" />
              {badge}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
