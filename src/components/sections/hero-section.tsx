"use client";

import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";
import { t, useLocale } from "@/lib/locale";

export function HeroSection() {
  const { locale } = useLocale();

  return (
    <section id="top" className="relative overflow-hidden pt-30 pb-22 sm:pt-38 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-ambient" aria-hidden />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-5xl">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-overlay)] px-4 py-2 text-sm text-[var(--color-fg-muted)] shadow-[0_18px_36px_-30px_var(--color-shadow)]">
                <span className="pulse-dot size-2 rounded-full bg-[var(--color-signal)]" aria-hidden />
                {t(locale, profile.status)}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-8 max-w-5xl font-display text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[var(--color-fg)] [text-shadow:0_10px_36px_rgba(0,0,0,0.36)]">
                {locale === "vi"
                  ? "Xây dựng hệ thống frontend vững vàng dưới áp lực sản phẩm."
                  : "Building frontend systems that stay sharp under product pressure."}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 grid gap-6">
                <p className="max-w-[38rem] text-lg leading-relaxed text-[var(--color-fg-muted)]">
                  {locale === "vi"
                    ? "Tôi làm việc trong fintech, e-commerce và các nền tảng nội bộ, nơi frontend cần nhiều hơn sự bóng bẩy. Nó cần cấu trúc, tốc độ và đủ tinh tế để biến những hệ thống dày đặc trở nên dễ thở."
                    : "I work across fintech, e-commerce, and internal platforms where the frontend needs more than polish. It needs structure, speed, and enough taste to make dense systems feel calm."}
                </p>
                <div className="grid gap-3 md:grid-cols-2 lg:max-w-[42rem] text-sm text-[var(--color-fg-muted)]">
                  <div className="soft-card rounded-[var(--radius-sm)] px-5 py-4">
                    <p className="editorial-kicker">{locale === "vi" ? "Địa điểm" : "Based in"}</p>
                    <p className="mt-2 flex items-center gap-2 text-base text-[var(--color-fg)]">
                      <MapPin className="size-4 text-[var(--color-signal)]" />
                      {profile.location}
                    </p>
                  </div>
                  <div className="soft-card rounded-[var(--radius-sm)] px-5 py-4">
                    <p className="editorial-kicker">{locale === "vi" ? "Trọng tâm" : "Focus"}</p>
                    <p className="mt-2 text-base text-[var(--color-fg)]">{profile.stack}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="#projects">
                    {locale === "vi" ? "Dự án tiêu biểu" : "Selected work"}
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={profile.cvPath} download>
                    <Download />
                    {locale === "vi" ? "Tải CV" : "Download CV"}
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
                {profile.heroBadges.map((badge) => (
                  <li
                    key={badge.en}
                    className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)]"
                  >
                    <span className="size-1.5 rounded-full bg-[var(--color-signal-dim)]" />
                    {t(locale, badge)}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative ml-auto w-full max-w-[30rem]">
              <div className="noise-surface soft-card overflow-hidden rounded-[2rem]">
                <div className="aspect-[0.96] bg-[var(--color-bg-elevated)] p-4">
                  <div
                    className="relative h-full overflow-hidden rounded-[1.6rem] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(5,8,6,0.12), rgba(5,8,6,0.58)), url('https://picsum.photos/seed/cong-editorial/1200/1500')",
                    }}
                  >
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
                      <div className="flex gap-2">
                        <span className="size-2 rounded-full bg-[#607080]" />
                        <span className="size-2 rounded-full bg-[#8ea1b2]" />
                        <span className="size-2 rounded-full bg-[var(--color-signal)]" />
                      </div>
                      <span className="font-mono text-[11px] text-[var(--color-on-media-muted)]">
                        portfolio / editorial mode
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-[var(--color-overlay-strong)] p-5 backdrop-blur-md">
                        <p className="editorial-kicker">{locale === "vi" ? "Góc nhìn hiện tại" : "Current lens"}</p>
                        <p className="mt-3 max-w-sm text-lg leading-snug text-[var(--color-on-media)]">
                          {locale === "vi"
                            ? "Định hướng frontend theo tư duy sản phẩm cho quy trình giao dịch, công cụ admin và giao diện thương mại."
                            : "Product-minded frontend leadership for trading workflows, admin tooling, and commerce interfaces."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="soft-card absolute -left-6 bottom-6 hidden max-w-[14rem] rounded-[1.3rem] p-4 lg:block">
                <p className="editorial-kicker">{locale === "vi" ? "Chỉ mục năng lực" : "Capability index"}</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-fg-muted)]">
                  {profile.capabilities.slice(0, 3).map((cap) => (
                    <li key={cap.en} className="flex items-center justify-between gap-3">
                        <span>{t(locale, cap)}</span>
                        <span className="font-mono text-[11px] text-[var(--color-signal)]">
                        {locale === "vi" ? "bật" : "on"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
