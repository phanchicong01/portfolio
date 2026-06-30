"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";
import { t, useLocale } from "@/lib/locale";

export function AboutSection() {
  const { locale } = useLocale();

  return (
    <section id="about" className="section-shell scroll-mt-24 py-24 lg:py-36">
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="max-w-md">
              <p className="editorial-kicker">{locale === "vi" ? "Giới thiệu" : "About"}</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--color-fg)] sm:text-5xl">
                {locale === "vi"
                  ? "Tư duy frontend vẫn còn giá trị ngay cả sau khi hiệu ứng launch đã qua."
                  : "Frontend thinking that stays useful after the launch week glow fades."}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.04}>
              <div className="soft-card noise-surface rounded-[var(--radius)] p-8">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-5">
                    {profile.about.map((paragraph) => (
                      <p
                        key={paragraph.en}
                        className="max-w-[38rem] text-[17px] leading-8 text-[var(--color-fg-muted)]"
                      >
                        {t(locale, paragraph)}
                      </p>
                    ))}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {profile.aboutHighlights.map((item, index) => (
                      <div
                        key={item.title.en}
                        className="rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-panel-2)] p-5"
                      >
                        <p className="font-mono text-xs tracking-[0.18em] text-[var(--color-signal)]">
                          0{index + 1}
                        </p>
                        <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.04em] text-[var(--color-fg)]">
                          {t(locale, item.title)}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-fg-muted)]">
                          {t(locale, item.description)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
