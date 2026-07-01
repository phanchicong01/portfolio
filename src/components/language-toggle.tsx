"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const options = [
  { value: "en", label: "EN" },
  { value: "vi", label: "VI" },
] as const;

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] p-1",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      {options.map((option) => {
        const active = locale === option.value;

        return (
          <Button
            key={option.value}
            type="button"
            variant="ghost"
            size="sm"
            aria-pressed={active}
            onClick={() => setLocale(option.value)}
            className={cn(
              "h-8 min-w-11 px-3 text-[11px] font-semibold tracking-[0.16em]",
              active
                ? "bg-[var(--color-signal)] text-[var(--color-accent-contrast)] hover:bg-[var(--color-signal)] hover:text-[var(--color-accent-contrast)]"
                : "text-[var(--color-fg-subtle)] hover:text-[var(--color-fg)]"
            )}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
