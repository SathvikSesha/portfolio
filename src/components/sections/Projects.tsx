"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      data-cursor="card"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/[0.07] bg-background-secondary text-left transition-all duration-300 hover:border-accent/40 hover:shadow-[0_18px_42px_-22px_rgba(34,197,94,0.4)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.banner}
          alt={project.title}
          fill
          sizes="(max-w-768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-102"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold leading-snug group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted line-clamp-2">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md bg-foreground/[0.04] px-2 py-0.5 font-mono text-[10px] text-foreground-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, [showAll]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const handleToggleShowAll = () => {
    if (showAll) {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label mb-4"
      >
        02 · Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="mb-9 max-w-lg text-3xl font-semibold leading-tight text-balance sm:text-4xl"
      >
        Case studies from systems I&apos;ve designed and shipped.
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {visibleProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} onClick={() => setActiveProject(p)} />
        ))}
      </div>

      {projects.length > 4 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={handleToggleShowAll}
            className="rounded-full border border-foreground/10 px-5 py-2.5 text-sm font-medium transition-all hover:border-accent/40 hover:bg-accent/[0.05]"
          >
            {showAll ? "Show fewer projects" : `See more projects (${projects.length - 4})`}
          </button>
        </div>
      )}

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-full max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-foreground/[0.08] bg-background-secondary shadow-2xl"
            >
              <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden">
                <Image
                  src={activeProject.banner}
                  alt={activeProject.title}
                  fill
                  sizes="(max-w-768px) 100vw, 768px"
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/65"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-2xl font-bold sm:text-3xl text-foreground leading-tight">
                      {activeProject.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {activeProject.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-foreground/[0.05] px-2.5 py-1 font-mono text-xs text-foreground-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-xs font-semibold shadow transition-colors hover:bg-foreground/80"
                      >
                        GitHub <ArrowUpRight size={13} />
                      </a>
                    )}
                    {activeProject.demo && (
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-accent text-[#04140a] px-4 py-2 text-xs font-semibold shadow transition-colors hover:bg-accent/80"
                      >
                        Live Demo <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <hr className="my-6 border-foreground/[0.06]" />

                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">Overview</h4>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      {activeProject.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">Problem</h4>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      {activeProject.challenges}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">Architecture & Solution</h4>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      {activeProject.architecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">Key Features</h4>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {activeProject.features.map((feat) => (
                        <li key={feat} className="flex gap-2 text-xs leading-relaxed text-foreground-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
