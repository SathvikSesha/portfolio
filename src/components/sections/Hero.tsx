"use client";

import { motion } from "framer-motion";
import { FileText, FolderGit2, Code2 } from "lucide-react";
import { personal } from "@/data/content";
import MagneticButton from "@/components/ui/MagneticButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const reveal = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[min(680px,100svh)] items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_65%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[110px]" />
      <div className="mx-auto w-full max-w-4xl px-6 py-14 text-center sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <motion.p initial="hidden" animate="show" variants={reveal} transition={{ duration: 0.5 }} className="section-label mb-3">Software Engineer</motion.p>
          <motion.h1 initial="hidden" animate="show" variants={reveal} transition={{ delay: 0.08, duration: 0.55 }} className="text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.5rem] leading-[1.1]">Software Engineer</motion.h1>
          <motion.h2 initial="hidden" animate="show" variants={reveal} transition={{ delay: 0.15, duration: 0.55 }} className="mt-4 text-2xl font-semibold leading-tight text-foreground-muted sm:text-3xl">Building scalable backend systems for modern applications.</motion.h2>
          <motion.h3 initial="hidden" animate="show" variants={reveal} transition={{ delay: 0.22, duration: 0.55 }} className="mt-4 font-mono text-base font-medium tracking-wider text-accent">{personal.name}</motion.h3>
          <motion.p initial="hidden" animate="show" variants={reveal} transition={{ delay: 0.29, duration: 0.55 }} className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground-muted">Computer Science student at VIT-AP University building scalable architectures, cloud-native deployments, and secure APIs.</motion.p>
          <motion.div initial="hidden" animate="show" variants={reveal} transition={{ delay: 0.36, duration: 0.55 }} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton as="a" href="#projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#04140a] shadow-[0_8px_24px_-10px_rgba(34,197,94,0.6)]"><FolderGit2 size={16} /> View projects</MagneticButton>
            <MagneticButton as="a" href={personal.resumeUrl} className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/40"><FileText size={16} /> Resume</MagneticButton>
            <div className="ml-1 flex items-center gap-1">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2 text-foreground-muted transition-colors hover:text-accent"><GithubIcon size={18} /></a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-foreground-muted transition-colors hover:text-accent"><LinkedinIcon size={18} /></a>
              <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="rounded-full p-2 text-foreground-muted transition-colors hover:text-accent"><Code2 size={18} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
