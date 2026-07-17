import { personal } from "@/data/content";

const stack = ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "GSAP", "Vercel"];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-foreground-muted">
          © {new Date().getFullYear()} {personal.name}. Built from scratch.
        </p>
        <p className="font-mono text-[11px] text-foreground-muted">
          Built with {stack.join(" · ")}
        </p>
      </div>
    </footer>
  );
}
