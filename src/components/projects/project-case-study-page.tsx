"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Clock3, Layers3, Sparkles } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { t, useLocale } from "@/lib/locale";

export function ProjectCaseStudyPage({ project }: { project: Project }) {
  const { locale } = useLocale();
  const nextProject =
    projects.find((item) => item.slug !== project.slug && item.group === project.group) ??
    projects.find((item) => item.slug !== project.slug);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pt-28">
        <section className="relative pb-18 pt-4 lg:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-ambient" aria-hidden />
          <Container className="relative">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-line-strong)] hover:text-[var(--color-fg)]"
            >
              <ArrowLeft className="size-4" />
              {locale === "vi" ? "Quay lại danh sách dự án" : "Back to selected work"}
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="editorial-kicker">{t(locale, project.category)}</p>
                <h1 className="mt-5 max-w-5xl font-display text-[clamp(3.2rem,7vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-fg)]">
                  {t(locale, project.name)}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-fg-muted)]">
                  {t(locale, project.caseStudy.overview)}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Badge variant="signal">{t(locale, project.impact)}</Badge>
                  <Badge>{t(locale, project.role)}</Badge>
                  <Badge>{project.group}</Badge>
                </div>
              </div>

              <div className="soft-card noise-surface overflow-hidden rounded-[2rem]">
                <div className="aspect-[1.02] bg-[var(--color-bg-elevated)] p-4">
                  <div
                    className="relative h-full overflow-hidden rounded-[1.6rem] bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(6,10,14,0.12), rgba(6,10,14,0.72)), url("https://picsum.photos/seed/${project.imageSeed}/1400/1400")`,
                    }}
                  >
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-5">
                      <div className="flex gap-2">
                        <span className="size-2 rounded-full bg-[#607080]" />
                        <span className="size-2 rounded-full bg-[#8ea1b2]" />
                        <span className="size-2 rounded-full bg-[var(--color-signal)]" />
                      </div>
                      <span className="font-mono text-[11px] text-[var(--color-on-media-muted)]">
                        {project.slug} / case-study
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-[var(--color-overlay-strong)] p-5 backdrop-blur-md">
                        <p className="editorial-kicker">
                          {locale === "vi" ? "Điểm nhấn triển khai" : "Delivery lens"}
                        </p>
                        <p className="mt-3 text-lg leading-snug text-[var(--color-on-media)]">
                          {t(locale, project.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-24 lg:pb-32">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
              <aside className="space-y-4">
                <div className="soft-card rounded-[var(--radius)] p-6">
                  <p className="editorial-kicker">{locale === "vi" ? "Thông tin nhanh" : "Quick frame"}</p>
                  <dl className="mt-5 space-y-5">
                    <div className="flex items-start gap-3">
                      <BriefcaseBusiness className="mt-1 size-4 text-[var(--color-signal)]" />
                      <div>
                        <dt className="text-sm text-[var(--color-fg-subtle)]">
                          {locale === "vi" ? "Bối cảnh" : "Context"}
                        </dt>
                        <dd className="mt-1 text-sm leading-7 text-[var(--color-fg)]">
                          {t(locale, project.caseStudy.client)}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock3 className="mt-1 size-4 text-[var(--color-signal)]" />
                      <div>
                        <dt className="text-sm text-[var(--color-fg-subtle)]">
                          {locale === "vi" ? "Phạm vi thời gian" : "Timeline"}
                        </dt>
                        <dd className="mt-1 text-sm leading-7 text-[var(--color-fg)]">
                          {t(locale, project.caseStudy.timeline)}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers3 className="mt-1 size-4 text-[var(--color-signal)]" />
                      <div>
                        <dt className="text-sm text-[var(--color-fg-subtle)]">
                          {locale === "vi" ? "Phối hợp" : "Team shape"}
                        </dt>
                        <dd className="mt-1 text-sm leading-7 text-[var(--color-fg)]">
                          {t(locale, project.caseStudy.team)}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="soft-card rounded-[var(--radius)] p-6">
                  <p className="editorial-kicker">{locale === "vi" ? "Stack chính" : "Primary stack"}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--color-line)] bg-[var(--color-panel-2)] px-3 py-1 text-xs text-[var(--color-fg-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <article className="soft-card rounded-[var(--radius)] p-7 lg:p-8">
                  <p className="editorial-kicker">{locale === "vi" ? "Bài toán" : "Challenge"}</p>
                  <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--color-fg-muted)]">
                    {t(locale, project.caseStudy.challenge)}
                  </p>
                </article>

                <article className="soft-card rounded-[var(--radius)] p-7 lg:p-8">
                  <p className="editorial-kicker">{locale === "vi" ? "Phần tôi phụ trách" : "What I owned"}</p>
                  <ul className="mt-5 grid gap-4">
                    {project.caseStudy.responsibilities.map((item) => (
                      <li key={item.en} className="flex gap-3 text-sm leading-7 text-[var(--color-fg-muted)]">
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[var(--color-signal-dim)]" />
                        <span>{t(locale, item)}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="soft-card rounded-[var(--radius)] p-7 lg:p-8">
                  <p className="editorial-kicker">{locale === "vi" ? "Cách triển khai" : "Approach"}</p>
                  <ul className="mt-5 grid gap-4">
                    {project.caseStudy.approach.map((item) => (
                      <li key={item.en} className="flex gap-3 text-sm leading-7 text-[var(--color-fg-muted)]">
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[var(--color-signal-dim)]" />
                        <span>{t(locale, item)}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="soft-card rounded-[var(--radius)] p-7 lg:p-8">
                  <p className="editorial-kicker">{locale === "vi" ? "Kết quả đạt được" : "Outcome"}</p>
                  <ul className="mt-5 grid gap-4 md:grid-cols-2">
                    {project.caseStudy.wins.map((item) => (
                      <li key={item.en} className="rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-panel-2)] p-4 text-sm leading-7 text-[var(--color-fg-muted)]">
                        {t(locale, item)}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="soft-card rounded-[var(--radius)] p-7 lg:p-8">
                  <p className="editorial-kicker">{locale === "vi" ? "Điểm nhấn delivery" : "Delivery highlights"}</p>
                  <ul className="mt-5 grid gap-4">
                    {project.contributions.map((item) => (
                      <li key={item.en} className="flex gap-3 text-sm leading-7 text-[var(--color-fg-muted)]">
                        <Sparkles className="mt-1 size-4 shrink-0 text-[var(--color-signal)]" />
                        <span>{t(locale, item)}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {nextProject ? (
                  <article className="soft-card rounded-[var(--radius)] p-7 lg:p-8">
                    <p className="editorial-kicker">{locale === "vi" ? "Đi tiếp" : "Keep exploring"}</p>
                    <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                      <div>
                        <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-fg)]">
                          {t(locale, nextProject.name)}
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-fg-muted)]">
                          {t(locale, nextProject.description)}
                        </p>
                      </div>
                      <Button asChild>
                        <Link href={`/projects/${nextProject.slug}`}>
                          {locale === "vi" ? "Xem case study tiếp theo" : "Read the next case study"}
                          <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ) : null}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
