"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journey } from "@/data/content";

export default function Journey() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const years = gsap.utils.toArray(".journey-year") as HTMLElement[];
    const contents = gsap.utils.toArray(".journey-content") as HTMLElement[];

    if (reduced || !triggerRef.current || years.length === 0 || contents.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(years.slice(1), { opacity: 0, pointerEvents: "none" });
      gsap.set(years[0], { opacity: 1, pointerEvents: "auto" });

      gsap.set(contents.slice(1), { opacity: 0, y: 40, pointerEvents: "none" });
      gsap.set(contents[0], { opacity: 1, y: 0, pointerEvents: "auto" });

      // Initial glow position (left)
      gsap.set(glowRef.current, { left: "10%", top: "25%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${years.length * 100}%`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Glow coordinates for each year:
      // 2023 -> Left (10%, 25%)
      // 2024 -> Center (50%, 50%)
      // 2025 -> Right (80%, 25%)
      // 2026 -> Left/Center-bottom (40%, 15%)
      const glowPositions = [
        { left: "10%", top: "25%" },
        { left: "50%", top: "45%" },
        { left: "80%", top: "25%" },
        { left: "40%", top: "15%" },
      ];

      years.forEach((_, index) => {
        if (index === 0) return;
        const prevYear = years[index - 1];
        const currYear = years[index];
        const prevContent = contents[index - 1];
        const currContent = contents[index];
        const targetGlow = glowPositions[index] || glowPositions[0];

        // Animate transition in the timeline
        tl.to(
          prevYear,
          { opacity: 0, pointerEvents: "none", duration: 0.5, ease: "power2.inOut" },
          `slide-${index}`
        )
        .to(
          currYear,
          { opacity: 1, pointerEvents: "auto", duration: 0.5, ease: "power2.inOut" },
          `slide-${index}`
        )
        .to(
          prevContent,
          { opacity: 0, y: -40, pointerEvents: "none", duration: 0.5, ease: "power2.inOut" },
          `slide-${index}`
        )
        .to(
          currContent,
          { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.5, ease: "power2.inOut" },
          `slide-${index}`
        )
        .to(
          glowRef.current,
          { left: targetGlow.left, top: targetGlow.top, duration: 0.5, ease: "power2.inOut" },
          `slide-${index}`
        );
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={triggerRef}
      className="relative flex h-screen w-full items-center justify-center bg-charcoal text-[#f4f9f5] overflow-hidden"
    >
      {/* Floating Section Label */}
      <div className="absolute top-12 left-6 sm:left-12 z-20">
        <p className="section-label text-accent">03 · Journey</p>
        <h2 className="mt-1 text-sm font-medium text-white/50 font-mono">Chapters</h2>
      </div>

      {/* Accent Glow Element that will be animated by GSAP */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute h-[350px] w-[350px] rounded-full bg-accent/[0.09] blur-[100px] transition-all duration-500 ease-out"
        style={{ left: "10%", top: "25%" }}
      />
      {/* Subtle fallback ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.02),transparent_60%)]" />

      {/* Main Grid Wrapper */}
      <div className="relative w-full max-w-4xl px-6 h-[400px] sm:h-[300px] grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-12 items-center text-left">
        
        {/* Left Column: Big Years stacked absolutely */}
        <div className="relative w-full h-full min-h-[100px] sm:min-h-0 select-none">
          {journey.map((entry) => (
            <div
              key={entry.year}
              className="journey-year absolute inset-0 flex items-center md:items-center text-left pointer-events-none"
            >
              <span className="font-mono text-7xl sm:text-8xl md:text-[9rem] font-bold tracking-tighter text-accent/90 leading-none">
                {entry.year}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column: Titles and details stacked absolutely */}
        <div className="relative w-full h-full min-h-[220px] sm:min-h-0">
          {journey.map((entry) => (
            <div
              key={entry.year}
              className="journey-content absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
                {entry.title}
              </h3>
              <ul className="space-y-3">
                {entry.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-[#d1ddd4]"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
