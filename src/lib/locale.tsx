"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Locale = "en" | "vi";

export type LocalizedText = Record<Locale, string>;

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const STORAGE_KEY = "portfolio-locale";
const LOCALE_EVENT = "portfolio-locale-change";

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getLocaleSnapshot(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "vi" || saved === "en" ? saved : "en";
}

function subscribeToLocale(callback: () => void) {
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
  window.addEventListener(LOCALE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(LOCALE_EVENT, callback);
  };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, getLocaleSnapshot, () => "en");

  const setLocale = (nextLocale: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}

export function t(locale: Locale, text: LocalizedText) {
  return text[locale];
}
