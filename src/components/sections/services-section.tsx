"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";
import { t, useLocale } from "@/lib/locale";

export function ServicesSection() {
  const { locale } = useLocale();

  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow={locale === "vi" ? "Dịch vụ" : "Services"}
          title={
            locale === "vi"
              ? "Những nơi tôi thường tạo ra nhiều giá trị nhất."
              : "Where I tend to add the most leverage."
          }
          description={
            locale === "vi"
              ? "Từ xây mới sản phẩm đến gỡ rối các hệ thống frontend legacy cần thêm cấu trúc mà chưa nhất thiết phải viết lại toàn bộ."
              : "From greenfield product builds to untangling legacy frontend systems that need structure without a full rewrite."
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title.en} delay={(i % 3) * 0.06}>
                <div className="soft-card group flex h-full flex-col gap-5 rounded-[var(--radius)] p-6 transition-all duration-300 hover:-translate-y-1">
                  <span className="grid size-12 place-items-center rounded-full bg-[var(--color-panel-2)] text-[var(--color-signal)] transition-colors group-hover:bg-[var(--color-panel-3)]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-[var(--color-fg)]">
                    {t(locale, service.title)}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--color-fg-muted)]">
                    {t(locale, service.description)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
