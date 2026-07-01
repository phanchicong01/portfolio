"use client";

import { Button } from "@/components/ui/button";
import { accentThemeOptions, useAccentTheme } from "@/lib/color-theme";
import { t, useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface PaletteToggleProps {
  className?: string;
  expanded?: boolean;
}

export function PaletteToggle({ className, expanded = false }: PaletteToggleProps) {
  const { accentTheme, setAccentTheme } = useAccentTheme();
  const { locale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] p-1",
        expanded ? "w-full flex-col items-stretch gap-1.5 rounded-[1.5rem] p-2" : "gap-1",
        className
      )}
      role="group"
      aria-label={locale === "vi" ? "Bảng màu giao diện" : "Interface palette"}
    >
      {accentThemeOptions.map((option) => {
        const active = accentTheme === option.value;

        return (
          <Button
            key={option.value}
            type="button"
            variant="ghost"
            size="sm"
            aria-pressed={active}
            aria-label={`${locale === "vi" ? "Chọn bảng màu" : "Choose palette"} ${t(locale, option.label)}`}
            onClick={() => setAccentTheme(option.value)}
            className={cn(
              "h-8 transition-colors",
              expanded ? "w-full justify-start gap-3 rounded-2xl px-3.5" : "min-w-8 px-2",
              active
                ? "bg-[var(--color-panel-2)] text-[var(--color-fg)] hover:bg-[var(--color-panel-2)]"
                : "text-[var(--color-fg-subtle)] hover:text-[var(--color-fg)]"
            )}
          >
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full border p-1",
                active ? "border-[var(--color-signal-dim)]" : "border-[var(--color-line)]"
              )}
            >
              {option.swatches.map((swatch) => (
                <span
                  key={swatch}
                  className="size-2.5 rounded-full border border-black/10"
                  style={{ backgroundColor: swatch }}
                />
              ))}
            </span>
            {expanded ? (
              <span className="text-xs font-semibold tracking-[0.14em] uppercase">
                {t(locale, option.label)}
              </span>
            ) : null}
          </Button>
        );
      })}
    </div>
  );
}
