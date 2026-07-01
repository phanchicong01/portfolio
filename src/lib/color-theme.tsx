"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { LocalizedText } from "@/lib/locale";

export type AccentTheme = "forest" | "ocean" | "mono";

interface AccentThemeContextValue {
  accentTheme: AccentTheme;
  setAccentTheme: (theme: AccentTheme) => void;
}

export const accentThemeOptions: ReadonlyArray<{
  value: AccentTheme;
  label: LocalizedText;
  swatches: readonly [string, string, string];
}> = [
  {
    value: "forest",
    label: { en: "Emerald", vi: "Xanh lá" },
    swatches: ["#6ce7ad", "#081018", "#f8fbff"],
  },
  {
    value: "ocean",
    label: { en: "Ocean", vi: "Xanh dương" },
    swatches: ["#74d4ff", "#07121b", "#f4fbff"],
  },
  {
    value: "mono",
    label: { en: "Mono", vi: "Đen trắng" },
    swatches: ["#f5f7fb", "#0b0f15", "#8ea5bf"],
  },
] as const;

const STORAGE_KEY = "portfolio-accent-theme";
const DEFAULT_THEME: AccentTheme = "forest";
const ACCENT_THEME_EVENT = "portfolio-accent-theme-change";

const AccentThemeContext = createContext<AccentThemeContextValue | null>(null);

function isAccentTheme(value: string | null): value is AccentTheme {
  return accentThemeOptions.some((option) => option.value === value);
}

function getAccentThemeSnapshot(): AccentTheme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return isAccentTheme(saved) ? saved : DEFAULT_THEME;
}

function subscribeToAccentTheme(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: Event) => {
    if (event instanceof StorageEvent && event.key && event.key !== STORAGE_KEY) {
      return;
    }

    callback();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(ACCENT_THEME_EVENT, callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(ACCENT_THEME_EVENT, callback);
  };
}

export function AccentThemeProvider({ children }: { children: ReactNode }) {
  const accentTheme = useSyncExternalStore(
    subscribeToAccentTheme,
    getAccentThemeSnapshot,
    () => DEFAULT_THEME
  );

  const setAccentTheme = (nextTheme: AccentTheme) => {
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(ACCENT_THEME_EVENT));
  };

  useEffect(() => {
    document.documentElement.dataset.accent = accentTheme;
  }, [accentTheme]);

  const value = useMemo(() => ({ accentTheme, setAccentTheme }), [accentTheme]);

  return <AccentThemeContext.Provider value={value}>{children}</AccentThemeContext.Provider>;
}

export function useAccentTheme() {
  const context = useContext(AccentThemeContext);

  if (!context) {
    throw new Error("useAccentTheme must be used within AccentThemeProvider");
  }

  return context;
}
