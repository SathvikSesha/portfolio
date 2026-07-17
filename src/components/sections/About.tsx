"use client";

import { motion } from "framer-motion";
import { Braces, BrainCircuit, Cloud, Database, Layers3, Server, ShieldCheck, Sparkles } from "lucide-react";
import { aboutContent, techStack } from "@/data/content";
import Counter from "@/components/ui/Counter";

const categoryIcons = [Braces, Layers3, Server, Database, Cloud, Sparkles, ShieldCheck, BrainCircuit];

export default function About() {
  const techGroups = [
    ["Languages", techStack.filter((item) => item.category === "language")],
    ["Frontend", techStack.filter((item) => item.category === "frontend")],
    ["Backend", techStack.filter((item) => item.category === "backend")],
    ["Database", techStack.filter((item) => item.category === "database")],
    ["Cloud", techStack.filter((item) => item.category === "cloud")],
    ["DevOps", techStack.filter((item) => item.category === "devops")],
    ["Security", techStack.filter((item) => item.category === "security")],
    ["AI", techStack.filter((item) => item.category === "ai")],
  ] as const;

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3">
        01 · About
      </motion.p>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl text-3xl font-semibold leading-tight text-balance sm:text-4xl text-foreground">
              Curious about how modern software is built, deployed and scaled.
            </motion.h2>
            <div className="mt-6 max-w-xl space-y-3 text-[15px] leading-relaxed text-foreground-muted">
              <p>Learning to build reliable backend systems that solve real problems.</p>
              <p>Exploring backend engineering through scalable applications and production systems.</p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Current focus</p>
            <div className="flex flex-wrap gap-2">
              {aboutContent.focusAreas.map((focus) => (
                <div key={focus} className="rounded-full border border-accent/15 bg-accent/[0.045] px-3.5 py-1 text-xs font-semibold text-foreground transition-all duration-300 hover:border-accent/40">
                  {focus}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Technologies</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {techGroups.map(([name, tools], index) => {
                const Icon = categoryIcons[index];
                const isFeatured = name === "Backend" || name === "Cloud" || name === "Database";
                const isLowWeight = name === "Frontend";
                
                let cardStyle = "group rounded-xl border border-foreground/[0.07] bg-background-secondary p-3.5 transition-all duration-300 hover:border-accent/35";
                let titleStyle = "mb-2 flex items-center gap-1.5 text-xs font-semibold text-foreground";
                let badgeStyle = "rounded-md bg-foreground/[0.04] px-2 py-0.5 font-mono text-[10px] text-foreground-muted transition-colors hover:bg-foreground/[0.08] hover:text-foreground";
                
                if (isFeatured) {
                  cardStyle = "group rounded-xl border border-accent/25 bg-accent/[0.02] p-3.5 transition-all duration-300 hover:border-accent/50 shadow-[0_4px_20px_-12px_rgba(34,197,94,0.15)]";
                  titleStyle = "mb-2 flex items-center gap-1.5 text-xs font-bold text-accent";
                  badgeStyle = "rounded-md bg-accent/[0.06] border border-accent/15 px-2 py-0.5 font-mono text-[10px] text-accent font-medium transition-colors hover:bg-accent/10";
                } else if (isLowWeight) {
                  cardStyle = "group rounded-xl border border-foreground/[0.03] bg-background-secondary/40 p-3.5 opacity-65 transition-all duration-300 hover:opacity-100 hover:border-foreground/[0.15]";
                  titleStyle = "mb-2 flex items-center gap-1.5 text-xs font-medium text-foreground-muted";
                  badgeStyle = "rounded-md bg-foreground/[0.02] px-2 py-0.5 font-mono text-[10px] text-foreground-muted transition-colors hover:bg-foreground/[0.05]";
                }

                return (
                  <div key={name} className={cardStyle}>
                    <div className={titleStyle}>
                      <Icon size={14} className={isFeatured ? "text-accent transition-transform duration-300 group-hover:scale-110" : "text-foreground-muted transition-transform duration-300 group-hover:scale-110"} />
                      {name}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tools.map((tool) => (
                        <span key={tool.name} className={badgeStyle}>
                          {tool.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col gap-3 self-start lg:mt-16">
          {aboutContent.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-foreground/[0.06] bg-background-secondary p-5 hover:border-accent/25 transition-all duration-300">
              <div className="font-mono text-3xl font-semibold sm:text-4xl text-accent">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </div>
              <p className="mt-1 text-xs font-medium text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
