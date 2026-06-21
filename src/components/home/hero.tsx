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
      <div className="pointer-events-none absolute -bottom-32 right-1/4 size-[28rem] rounded-full bg-blue/10 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Tag tone="brand">I analyze. I find. I improve.</Tag>
          <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            I find what's holding your <span className="bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent">product</span> back.
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Deep analysis. Clear insights. Actionable solutions for founders who want real growth.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/frameworks"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-all hover:bg-primary/90 hover:shadow-[0_14px_40px_-10px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
            >
              Explore My Work <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
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
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-primary/25 via-card to-card shadow-2xl sm:max-w-md">
            <img
              src={portrait.url}
              alt="Hari, product and growth analyst"
              className="h-full w-full object-cover object-[center_15%]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          {METRICS.map((m, i) => {
            const positions = [
              "absolute -left-2 top-8 sm:-left-6",
              "absolute -right-2 top-1/3 sm:-right-6",
              "absolute -bottom-4 left-6",
            ];
            const tones = ["text-success", "text-danger", "text-warning"];
            return (
              <motion.div
                key={m.label}
                className={`${positions[i]} w-36 rounded-xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur sm:w-40`}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.12 }}
              >
                <p className="text-xs text-muted-foreground">{m.label}</p>
                <p className={`text-xl font-bold ${tones[i]}`}>{m.value}</p>
                <p className="text-[10px] text-muted-foreground">{m.sub}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>

      <Container className="relative pb-12">
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          {CAPABILITY_BADGES.map((badge, i) => (
            <div key={badge} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40">
              <Icon name={["Activity", "Target", "TrendingUp", "Sparkles"][i]} className="size-4 text-primary" />
              {badge}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
