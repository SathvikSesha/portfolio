"use client";

import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import { experience, leadership } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3">04 · Experience</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">Hands-on engineering in real delivery environments.</motion.h2>
      
      {/* Timeline for Professional Experience */}
      <div className="mt-10 border-l border-foreground/10 pl-6 sm:pl-8">
        {experience.map((job) => (
          <motion.article key={job.company} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl border border-foreground/[0.07] bg-background-secondary p-5 sm:p-6">
            <span className="absolute -left-[2.05rem] top-7 h-3 w-3 rounded-full border-2 border-background bg-accent sm:-left-[2.55rem]" />
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Briefcase size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">{job.company}</h3>
                  <p className="mt-0.5 text-sm text-foreground-muted">{job.role}</p>
                </div>
              </div>
              <p className="font-mono text-xs text-accent">{job.period}</p>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {job.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* Leadership Highlight Section */}
      <div className="mt-12">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent font-semibold">Community & Leadership</h3>
        <motion.article 
          initial={{ opacity: 0, y: 18 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="relative rounded-2xl border border-foreground/[0.07] bg-background-secondary p-6 sm:p-7 overflow-hidden"
        >
          {/* Ambient radial glow decoration */}
          <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-accent/[0.04] blur-[30px]" />
          
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent font-mono mb-3">
                Community
              </span>
              <h4 className="text-lg font-semibold leading-tight text-foreground">
                {leadership.organization}
              </h4>
              <p className="mt-1 text-sm font-medium text-foreground-muted">
                {leadership.role}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5b6660]">
                {leadership.description}
              </p>
            </div>
            
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Award size={18} />
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
