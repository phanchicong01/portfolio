"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { projects, projectFilters } from "@/data/projects";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const spanMap: Record<number, string[]> = {
  1: ["lg:col-span-12"],
  2: ["lg:col-span-7", "lg:col-span-5"],
  3: ["lg:col-span-4", "lg:col-span-4", "lg:col-span-4"],
  4: ["lg:col-span-8", "lg:col-span-4", "lg:col-span-6", "lg:col-span-6"],
  5: ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"],
};

export function ProjectsSection() {
  const { locale } = useLocale();
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const visible = projects.filter((project) => filter === "All" || project.group === filter);
  const spans = spanMap[visible.length] ?? visible.map(() => "lg:col-span-4");
  const filterLabels = {
    All: locale === "vi" ? "Tất cả" : "All",
    FinTech: "FinTech",
    "E-commerce": locale === "vi" ? "Thương mại điện tử" : "E-commerce",
    "Internal Tools": locale === "vi" ? "Công cụ nội bộ" : "Internal Tools",
  } as const;

  return (
    <section id="projects" className="scroll-mt-24 py-24 lg:py-36">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="editorial-kicker">{locale === "vi" ? "Dự án tiêu biểu" : "Selected work"}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--color-fg)] sm:text-5xl">
              {locale === "vi"
                ? "Giao diện được định hình cho bài toán giao dịch phức tạp, vận hành rõ ràng và thương mại linh hoạt."
                : "Interfaces shaped for trading complexity, operational clarity, and flexible commerce."}
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label={locale === "vi" ? "Lọc dự án theo nhóm" : "Filter projects by category"}
          >
            {projectFilters.map((option) => (
              <button
                key={option}
                role="tab"
                aria-selected={filter === option}
                onClick={() => setFilter(option)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  filter === option
                    ? "border-[var(--color-signal-dim)] bg-[color-mix(in_oklab,var(--color-signal)_12%,transparent)] text-[var(--color-fg)]"
                    : "border-[var(--color-line)] text-[var(--color-fg-muted)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-fg)]"
                )}
              >
                {filterLabels[option]}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:grid-flow-dense">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className={spans[index]}
              >
                <ProjectCard
                  {...project}
                  variant={spans[index]?.includes("7") || spans[index]?.includes("8") || spans[index]?.includes("12") ? "featured" : "compact"}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
