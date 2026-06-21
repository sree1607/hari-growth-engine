import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Card, Tag } from "@/components/site/primitives";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import type { Audit, CaseStudy, Proof } from "@/lib/data";

type Kind = "audit" | "case" | "proof";

type Props =
  | { kind: "audit"; items: Audit[]; categories: string[]; futureLabel: string }
  | { kind: "case"; items: CaseStudy[]; categories: string[]; futureLabel: string }
  | { kind: "proof"; items: Proof[]; categories: string[]; futureLabel: string };

function matchCategory(item: Audit | CaseStudy | Proof, active: string, idx: number) {
  if (idx === 0) return true;
  return (item as { category: string }).category === active;
}

function searchText(kind: Kind, item: Audit | CaseStudy | Proof): string {
  if (kind === "audit") {
    const a = item as Audit;
    return `${a.name} ${a.intro} ${a.category}`.toLowerCase();
  }
  if (kind === "case") {
    const c = item as CaseStudy;
    return `${c.title} ${c.summary} ${c.category}`.toLowerCase();
  }
  const p = item as Proof;
  return `${p.quote} ${p.category}`.toLowerCase();
}

export function LibraryBrowser({ kind, items, categories, futureLabel }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(categories[0]);
  const activeIdx = categories.indexOf(active);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (items as (Audit | CaseStudy | Proof)[]).filter(
      (it) => matchCategory(it, active, activeIdx) && (q === "" || searchText(kind, it).includes(q)),
    );
  }, [items, query, active, activeIdx, kind]);

  const placeholder =
    kind === "audit" ? "Search audits..." : kind === "case" ? "Search case studies..." : "Search proofs...";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="h-11 rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-primary"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              c === active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${active}-${query}`}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        >
          {kind === "audit"
            ? (filtered as Audit[]).map((a) => (
                <motion.div
                  key={a.slug}
                  variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3 }}
                >
                  <Link to="/audits/$slug" params={{ slug: a.slug }}>
                    <Card interactive className="flex h-full flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground">
                          <Icon name={a.icon} className="size-5" />
                        </span>
                        <Tag tone="brand">{a.category}</Tag>
                      </div>
                      <h3 className="font-heading text-lg font-semibold">{a.name}</h3>
                      <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                        {a.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary" />{h}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        View Audit <ArrowRight className="size-4" />
                      </span>
                    </Card>
                  </Link>
                </motion.div>
              ))
            : null}

          {kind === "case"
            ? (filtered as CaseStudy[]).map((c) => (
                <motion.div
                  key={c.slug}
                  variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3 }}
                >
                  <Link to="/case-studies/$slug" params={{ slug: c.slug }}>
                    <Card interactive className="flex h-full flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <Tag key={t} tone={t === "High Impact" ? "danger" : "brand"}>{t}</Tag>
                        ))}
                      </div>
                      <h3 className="font-heading text-lg font-semibold">{c.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        {c.keyFindings} Key Findings <ArrowUpRight className="size-4" />
                      </span>
                    </Card>
                  </Link>
                </motion.div>
              ))
            : null}

          {kind === "proof"
            ? (filtered as Proof[]).map((p) => (
                <motion.div
                  key={p.slug}
                  variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3 }}
                >
                  <Link to="/proofs/$slug" params={{ slug: p.slug }}>
                    <Card interactive className="flex h-full flex-col gap-4">
                      <span className="font-heading text-4xl leading-none text-primary/40">&ldquo;</span>
                      <p className="text-sm font-medium leading-relaxed">{p.quote}</p>
                      <span className="mt-auto text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                    </Card>
                  </Link>
                </motion.div>
              ))
            : null}

          <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
            <Card className="flex h-full flex-col items-center justify-center gap-3 border-dashed text-center">
              <span className="flex size-11 items-center justify-center rounded-xl border border-dashed border-border text-muted-foreground">
                <Plus className="size-5" />
              </span>
              <h3 className="font-heading font-semibold text-muted-foreground">{futureLabel}</h3>
              <p className="text-sm text-muted-foreground">More coming soon. Stay tuned.</p>
            </Card>
          </motion.div>
        </motion.div>
      </AnimatePresence>


      {filtered.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">No results found. Try a different search or filter.</p>
      ) : null}
    </div>
  );
}
