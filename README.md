# Phan Chi Cong — Portfolio

A one-page personal portfolio for a Senior Frontend Developer. Clean, dark-mode-first, built around a "trading terminal" visual identity that reflects the fintech / e-commerce / admin-systems work it showcases.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first tokens in `globals.css`)
- **shadcn/ui-style primitives** (Button, Card, Badge, Input, Textarea, Separator, Sheet) on Radix UI
- **Framer Motion** — subtle scroll reveals + project filter transitions
- **Lucide React** — icons
- **React Hook Form + Zod** — contact form validation
- **next-themes** — dark/light toggle

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
src/
  app/              layout.tsx (SEO + fonts), page.tsx, globals.css (design tokens)
  components/
    layout/         navbar, footer
    sections/       hero, about, skills, projects, experience, services, contact
    ui/             reusable primitives + SectionHeading, ProjectCard, SkillBadge,
                    ExperienceTimeline, Container, Reveal
    theme-*.tsx     theme provider + toggle
    contact-form.tsx, copy-email-button.tsx, back-to-top.tsx
  data/             profile, skills, projects, experience, services  (all content lives here)
  lib/utils.ts      cn() helper
public/
  Phan_Chi_Cong_CV.pdf   <- placeholder; replace with the real CV
```

All copy lives in `src/data/*` — edit those files to update content, no component changes needed.

## Things to wire up

- **CV** — replace `public/Phan_Chi_Cong_CV.pdf` with the real file (same name, or update `cvPath` in `src/data/profile.ts`).
- **Contact form** — currently UI-only. It validates and simulates a send. To make it deliver mail, see the `TODO` in `src/components/contact-form.tsx` (options: an `/api/contact` route handler calling Resend, EmailJS client-side, or a form backend like Formspree).
- **Domain** — update `siteUrl` in `src/app/layout.tsx` for correct Open Graph / canonical URLs.

## Deploy

Vercel-ready: push to a Git repo and import, or run `vercel`. No env vars required for the static build.
