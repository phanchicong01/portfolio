"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { experiences } from "@/data/experience";
import { t, useLocale } from "@/lib/locale";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ExperienceSection() {
  const { locale } = useLocale();
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || !introRef.current) {
        return;
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=96",
        end: "bottom bottom-=80",
        pin: introRef.current,
        pinSpacing: false,
      });

      cardsRef.current.forEach((card) => {
        if (!card) {
          return;
        }

        gsap.fromTo(
          card,
          { opacity: 0.35, scale: 0.92, y: 48 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
              end: "bottom 45%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-24 border-y border-[var(--color-line)] py-24 lg:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div ref={introRef} className="max-w-md self-start lg:pt-8">
            <p className="editorial-kicker">{locale === "vi" ? "Kinh nghiệm" : "Desire"}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--color-fg)] sm:text-5xl">
              {locale === "vi"
                ? "Triển khai frontend xuyên suốt giữa nhiều team, không chỉ qua từng màn hình."
                : "Shipping frontend across teams, not just across screens."}
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--color-fg-muted)]">
              {locale === "vi"
                ? "Điểm xuyên suốt trong kinh nghiệm của tôi không nằm ở title, mà ở tinh thần ownership: làm rõ yêu cầu, định hình kiến trúc và giữ delivery ổn định khi phạm vi công việc mở rộng."
                : "The through-line in my experience is less about title changes and more about ownership: clarifying requirements, shaping architecture, and keeping delivery reliable when the scope expands."}
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={experience.company}
                ref={(node) => {
                  cardsRef.current[index] = node;
                }}
                className="soft-card noise-surface rounded-[var(--radius)] p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="editorial-kicker">{experience.period}</p>
                    <h3 className="mt-4 font-display text-[1.9rem] font-semibold tracking-[-0.05em] text-[var(--color-fg)]">
                      {t(locale, experience.role)}
                    </h3>
                    <p className="mt-2 text-base text-[var(--color-accent-soft)]">
                      {experience.company}
                    </p>
                  </div>
                  {experience.current && (
                    <span className="rounded-full border border-[var(--color-signal-dim)] px-3 py-1 font-mono text-[11px] text-[var(--color-signal)]">
                      {locale === "vi" ? "hiện tại" : "current"}
                    </span>
                  )}
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--color-fg-muted)]">
                  {t(locale, experience.description)}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility.en}
                      className="flex gap-3 text-sm leading-7 text-[var(--color-fg-muted)]"
                    >
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[var(--color-signal-dim)]" />
                      <span>{t(locale, responsibility)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
