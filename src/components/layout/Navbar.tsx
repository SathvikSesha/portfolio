"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, personal } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 1.9 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-foreground/[0.06] bg-background/70 backdrop-blur-xl py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-7">
        <a
          href="#home"
          data-cursor="link"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="text-accent">{"<"}</span>
          {personal.name.split(" ")[1]}
          <span className="text-accent">{"/>"}</span>
        </a>

        <ul className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="link"
                className={cn(
                  "relative px-3 py-2 text-[13px] font-medium transition-colors",
                  active === link.href
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-cursor="button"
          className="hidden rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-accent/20 md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "h-[1.5px] w-6 bg-foreground transition-transform",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-[1.5px] w-6 bg-foreground transition-transform",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mx-6 mt-4 flex flex-col gap-1 rounded-2xl border border-foreground/[0.06] bg-background/95 p-3 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-2.5 text-sm font-medium",
                  active === link.href
                    ? "bg-accent/10 text-accent"
                    : "text-foreground-muted"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
