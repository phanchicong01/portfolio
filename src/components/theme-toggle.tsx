"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-[var(--color-fg-muted)]"
    >
      {/* Render both, hide via CSS until mounted to avoid hydration mismatch */}
      <Sun className={`size-[18px] ${mounted && isDark ? "block" : "hidden"}`} />
      <Moon className={`size-[18px] ${mounted && !isDark ? "block" : "hidden"}`} />
      {!mounted && <Moon className="size-[18px]" />}
    </Button>
  );
}
