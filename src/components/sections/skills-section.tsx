"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/skills";
import { t, useLocale } from "@/lib/locale";
import { SkillBadge } from "@/components/ui/skill-badge";
import { cn } from "@/lib/utils";

const layoutClasses = [
  "lg:col-span-8 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-3 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
];

export function SkillsSection() {
  const { locale } = useLocale();

  return (
    <section id="skills" className="scroll-mt-24 border-y border-[var(--color-line)] py-24 lg:py-36">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="editorial-kicker">{locale === "vi" ? "Chuyên môn" : "Interest"}</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--color-fg)] sm:text-5xl">
                {locale === "vi"
                  ? "Stack có thể rộng, nhưng kỹ năng thật sự nằm ở việc biết chỗ nào cấu trúc là quan trọng nhất."
                  : "The stack is broad, but the real skill is knowing where structure matters most."}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--color-fg-muted)]">
              {locale === "vi"
                ? "Tôi thường di chuyển giữa kiến trúc sản phẩm, điều phối dữ liệu, công cụ delivery và độ rõ ràng của giao diện mà không xem chúng là những cuộc hội thoại tách biệt."
                : "I tend to move between product architecture, data orchestration, delivery tooling, and interface clarity without treating them as separate conversations."}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:grid-flow-dense">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category.en} delay={(index % 3) * 0.05} className={cn(layoutClasses[index])}>
              <article className="soft-card noise-surface flex h-full flex-col rounded-[var(--radius)] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-fg)]">
                    {t(locale, group.category)}
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-signal)]">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <SkillBadge key={item} name={item} />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
