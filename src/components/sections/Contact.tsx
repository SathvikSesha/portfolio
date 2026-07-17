"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, ExternalLink, Code2 } from "lucide-react";
import { personal } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailMethod = {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  };

  const secondaryMethods = [
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/seshasathvik",
      href: personal.linkedin,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/SathvikSesha",
      href: personal.github,
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "leetcode.com/u/Sathvik_Sesha",
      href: personal.leetcode,
    },
  ];

  return (
    <section id="contact" className="border-t border-foreground/[0.06] bg-background-secondary py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="section-label mb-3">06 · Contact</p>
          <h2 className="max-w-md text-3xl font-semibold leading-tight sm:text-4xl text-foreground">Let&apos;s connect.</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground-muted">
            Whether it&apos;s backend engineering, system design, or an interesting project, I&apos;d love to hear from you.
          </p>
          <div className="mt-6 flex items-center gap-2.5 text-sm text-foreground-muted">
            <MapPin size={16} className="text-accent" />
            <span>{personal.location}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Primary Action: Email */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-between rounded-2xl border border-accent/20 bg-background p-6 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-[0_12px_30px_-15px_rgba(34,197,94,0.15)]"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail size={18} />
              </span>
              <div className="flex gap-2">
                <button
                  onClick={copyEmail}
                  type="button"
                  className="flex items-center gap-1 rounded-md bg-foreground/[0.04] px-2.5 py-1 text-[11px] font-medium text-foreground-muted hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {copied ? <Check size={12} className="text-accent" /> : <Copy size={12} />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <a
                  href={emailMethod.href}
                  className="flex items-center gap-1 rounded-md bg-accent text-[#04140a] px-2.5 py-1 text-[11px] font-semibold hover:bg-accent/80 transition-colors"
                >
                  <ExternalLink size={12} />
                  Send Mail
                </a>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Preferred Contact</p>
              <p className="mt-1.5 text-xl sm:text-2xl font-bold text-foreground tracking-tight break-all font-mono">
                {emailMethod.value}
              </p>
            </div>
          </motion.div>

          {/* Secondary Actions: Profiles */}
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
            {secondaryMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  data-cursor="card"
                  className="group relative flex flex-col justify-between rounded-xl border border-foreground/[0.05] bg-background-secondary p-4 transition-all duration-300 hover:border-foreground/20 hover:bg-background"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.03] text-foreground-muted group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                      <Icon size={15} />
                    </span>
                    <ExternalLink size={12} className="text-foreground-muted/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                  <div className="mt-4">
                    <p className="text-[10px] font-medium text-foreground-muted">{method.label}</p>
                    <p className="mt-0.5 text-xs font-semibold text-foreground tracking-tight truncate">
                      @{method.value.split("/").pop()}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
