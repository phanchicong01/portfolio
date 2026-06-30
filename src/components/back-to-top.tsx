"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const { locale } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={locale === "vi" ? "Lên đầu trang" : "Back to top"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-panel)] text-[var(--color-fg-muted)] shadow-lg transition-all duration-300 hover:border-[var(--color-signal-dim)] hover:text-[var(--color-signal)]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="size-[18px]" />
    </button>
  );
}
