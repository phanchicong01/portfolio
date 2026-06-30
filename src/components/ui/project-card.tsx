"use client";

import { ArrowUpRight } from "lucide-react";
import type { LocalizedText } from "@/lib/locale";
import { t, useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  role: LocalizedText;
  techStack: string[];
  contributions: LocalizedText[];
  imageSeed: string;
  impact: LocalizedText;
  variant?: "featured" | "compact";
}

export function ProjectCard({
  name,
  category,
  description,
  role,
  techStack,
  contributions,
  imageSeed,
  impact,
  variant = "featured",
}: ProjectCardProps) {
  const { locale } = useLocale();
  const compact = variant === "compact";

  return (
    <article
      className={cn(
        "soft-card noise-surface group relative flex h-full flex-col overflow-hidden rounded-[var(--radius)]",
        compact ? "min-h-[20rem]" : "min-h-[28rem]"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          compact ? "h-40" : "h-52"
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(6,10,14,0.08), rgba(6,10,14,0.82)), url("https://picsum.photos/seed/${imageSeed}/1200/900")`,
          }}
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-5">
          <span className="rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(6,8,10,0.52)] px-3 py-1 font-mono text-[11px] text-[var(--color-on-media)]">
            {t(locale, category)}
          </span>
          <ArrowUpRight className="size-4 text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-signal)]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
          <p className="editorial-kicker text-[var(--color-signal)]">
            {locale === "vi" ? "Tác động" : "Impact"}
          </p>
          <p className="mt-2 text-lg font-medium text-[var(--color-on-media)]">{t(locale, impact)}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="font-display text-[1.7rem] font-semibold tracking-[-0.05em] text-[var(--color-fg)]">
              {t(locale, name)}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-fg-subtle)]">{t(locale, role)}</p>
          </div>
        </div>

        <p className="mt-4 max-w-[38rem] text-sm leading-7 text-[var(--color-fg-muted)]">
          {t(locale, description)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-fg-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex-1">
          <ul className="grid gap-3 sm:grid-cols-2">
            {contributions.slice(0, compact ? 2 : 4).map((contribution) => (
              <li key={contribution.en} className="flex gap-3 text-sm leading-7 text-[var(--color-fg-muted)]">
                <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[var(--color-signal-dim)]" />
                <span>{t(locale, contribution)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
