"use client";

import { Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { CopyEmailButton } from "@/components/copy-email-button";
import { profile } from "@/data/profile";
import { useLocale } from "@/lib/locale";

export function ContactSection() {
  const { locale } = useLocale();
  const contactItems = [
    { icon: Mail, label: locale === "vi" ? "Email" : "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: locale === "vi" ? "Điện thoại" : "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MessageCircle, label: "Zalo", value: profile.zalo, href: null },
    { icon: MapPin, label: locale === "vi" ? "Địa điểm" : "Location", value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-36">
      <Container>
        <Reveal>
          <div className="soft-card noise-surface rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col">
                <p className="editorial-kicker">{locale === "vi" ? "Liên hệ" : "Action"}</p>
                <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--color-fg)] sm:text-5xl">
                  {locale === "vi"
                    ? "Nếu frontend cần cấu trúc, sự rõ ràng và một ngôn ngữ thiết kế điềm tĩnh hơn, tôi có thể hỗ trợ."
                    : "If the frontend needs structure, clarity, and a calmer design language, I can help."}
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--color-fg-muted)]">
                  {locale === "vi"
                    ? "Tôi sẵn sàng cho các vai trò senior frontend, công việc ở cấp độ lead sản phẩm và cả freelance, nơi brief đòi hỏi cả tư duy hệ thống lẫn sự tiết chế trong thiết kế."
                    : "I am open to senior frontend roles, lead-level product work, and freelance engagements where the brief calls for both systems thinking and visual restraint."}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <span className="flex h-full items-start gap-3 rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-panel-2)] px-4 py-4 transition-colors hover:border-[var(--color-line-strong)]">
                        <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-[var(--color-panel-2)] text-[var(--color-signal)]">
                          <Icon className="size-4" />
                        </span>
                        <span className="flex flex-col">
                          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                            {item.label}
                          </span>
                          <span className="mt-2 text-sm text-[var(--color-fg)]">{item.value}</span>
                        </span>
                      </span>
                    );

                    return item.href ? (
                      <a key={item.label} href={item.href}>
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={`mailto:${profile.email}`}>
                      <Mail />
                      {locale === "vi" ? "Gửi email" : "Email me"}
                    </a>
                  </Button>
                  <CopyEmailButton />
                  <Button asChild variant="outline">
                    <a href={profile.cvPath} download>
                      <Download />
                      {locale === "vi" ? "Tải CV" : "Download CV"}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel-2)] p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
