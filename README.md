# Sesha Sathvik — Portfolio

A premium, animated software-engineer portfolio built with Next.js 15 (App Router),
React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP/ScrollTrigger and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

> Note: `npm run build` downloads the Geist fonts from Google Fonts at build
> time via `next/font/google`. This requires outbound internet access to
> `fonts.googleapis.com` / `fonts.gstatic.com` (available by default on
> Vercel and any normal dev machine).

## Project structure

```
src/
  app/                 App Router entry (layout, page, globals.css)
  components/
    layout/            Navbar, Footer
    providers/          Lenis smooth-scroll provider
    sections/           Hero, About, TechStack, Skills, Projects, Journey,
                         Experience, Certifications, Contact, ProjectModal,
                         CodingProfiles
    ui/                 Loader, CustomCursor, Counter, MagneticButton, BrandIcons
  data/
    content.ts          ALL editable content — text, links, stats, projects,
                         skills, timeline, certifications
  lib/
    utils.ts             `cn` class-merge helper
public/
  profile-placeholder.svg     swap for your real photo
  projects/*.svg               swap for real project banners
```

## Customizing content

Everything text-based lives in `src/data/content.ts`. Update:

- `personal` — name, links, email, phone, resume URL
- `aboutContent.stats` — animated counters (projects, DSA count, CGPA, etc.)
- `techStack` — floating tech marquee items
- `skillCategories` — animated skill bars
- `projects` — case-study cards + modal content (swap banner SVGs in
  `public/projects/` for real screenshots)
- `journey` — pinned scroll storytelling timeline
- `experience`, `certifications`, `achievements`, `leadership`

## Replacing placeholders

- **Profile photo**: replace `public/profile-placeholder.svg` with a real
  image (e.g. `profile.jpg`) and update the `src` in
  `src/components/sections/Hero.tsx`.
- **Resume**: add your PDF to `public/resume.pdf` and set
  `personal.resumeUrl = "/resume.pdf"` in `content.ts`.
- **Project banners**: replace the SVGs in `public/projects/` with real
  screenshots (same filenames, or update `banner` paths in `content.ts`).

## Notes

- Respects `prefers-reduced-motion` for the loader, custom cursor and Lenis
  smooth scroll.
- The custom cursor and Lenis smooth-scroll disable automatically on
  touch/coarse-pointer devices.
- The Journey section's pinned scroll (GSAP ScrollTrigger) is desktop-only
  by design — it becomes a normal vertical stack on tablet/mobile.
