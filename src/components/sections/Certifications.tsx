"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/content";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-background-secondary py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-label mb-4"
        >
          05 · Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mb-8 max-w-lg text-3xl font-semibold leading-tight text-balance sm:text-4xl"
        >
          Credentials that back up the fundamentals.
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const isVerification = cert.credentialUrl.startsWith("http") || cert.credentialUrl.includes("verify");
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-cursor="card"
                className="group flex items-start gap-4 rounded-2xl border border-foreground/[0.07] bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_14px_28px_-20px_rgba(34,197,94,0.7)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-mono text-xs font-semibold text-accent">
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold leading-snug text-foreground">{cert.title}</h3>
                  <p className="mt-1 text-sm text-foreground-muted">
                    {cert.issuer} · {cert.date}
                  </p>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="button"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    {isVerification ? "Verify Credential" : "View Credential"} <span className="ml-0.5">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
