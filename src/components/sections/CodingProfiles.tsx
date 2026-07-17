"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { codingProfiles } from "@/data/content";
import Counter from "@/components/ui/Counter";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const icons = {
  GitHub: GithubIcon,
  LeetCode: Code2,
  LinkedIn: LinkedinIcon,
};

export default function CodingProfiles() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-6 text-xl font-semibold text-foreground"
      >
        Developer Profiles
      </motion.h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {codingProfiles.map((profile, i) => {
          const Icon = icons[profile.name as keyof typeof icons];
          return (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-foreground/[0.07] bg-background-secondary p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_14px_28px_-20px_rgba(34,197,94,0.65)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={18} />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-foreground-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <p className="mt-5 font-semibold">{profile.name}</p>
              <p className="text-sm text-foreground-muted">
                @{profile.handle}
              </p>
              <div className="mt-4 border-t border-foreground/[0.06] pt-4">
                <p className="font-mono text-2xl font-semibold text-foreground">
                  <Counter value={profile.stat.value} suffix="+" />
                </p>
                <p className="text-xs text-foreground-muted">
                  {profile.stat.label}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
