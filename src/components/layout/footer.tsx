"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { navLinks, profile } from "@/data/profile";
import { t, useLocale } from "@/lib/locale";

export function Footer() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const sectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="editorial-kicker">{locale === "vi" ? "Hồ sơ" : "Portfolio"}</p>
            <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-fg)]">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-[var(--color-fg-muted)]">{t(locale, profile.role)}</p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
              {navLinks.filter((link) => link.href !== "#skills").map((link) => (
                <Link
                  key={link.href}
                  href={sectionHref(link.href)}
                  className="text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                >
                  {t(locale, link.label)}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-[var(--color-fg-subtle)]">
              {locale === "vi"
                ? `© 2026 ${profile.name}. Được xây dựng với Next.js, TypeScript, Tailwind CSS và GSAP.`
                : `© 2026 ${profile.name}. Built with Next.js, TypeScript, Tailwind CSS, and GSAP.`}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
