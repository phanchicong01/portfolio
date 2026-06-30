"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";
import { navLinks, profile } from "@/data/profile";
import { t, useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { locale } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <Container>
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex max-w-4xl items-center justify-between rounded-full border px-3 py-2 backdrop-blur-md transition-all duration-300",
            scrolled
              ? "border-[var(--color-line-strong)] bg-[var(--color-nav-scrolled)] shadow-[0_18px_44px_-30px_var(--color-shadow)]"
              : "border-[var(--color-line)] bg-[var(--color-nav)]"
          )}
        >
          <Link
            href="#top"
            className="flex items-center gap-3 rounded-full px-2 py-1 transition-colors hover:text-[var(--color-signal)]"
          >
            <span className="editorial-kicker text-[var(--color-fg-subtle)]">PC</span>
            <span className="font-display text-sm font-semibold tracking-tight text-[var(--color-fg)]">
              {profile.name}
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-2.5 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {t(locale, link.label)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <ThemeToggle />
            <Button asChild size="sm" className="px-4">
              <Link href="#contact">
                {locale === "vi" ? "Trao đổi với tôi" : "Start a conversation"}
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle className="hidden sm:inline-flex" />
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent title="Navigation">
                <div className="mb-8">
                  <p className="editorial-kicker">{locale === "vi" ? "Điều hướng" : "Navigation"}</p>
                  <p className="mt-3 font-display text-xl font-semibold text-[var(--color-fg)]">
                    {profile.name}
                  </p>
                </div>
                <div className="mb-5 sm:hidden">
                  <LanguageToggle />
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-2xl px-4 py-3 text-base text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-panel-2)] hover:text-[var(--color-fg)]"
                      >
                        {t(locale, link.label)}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <SheetClose asChild>
                  <Button asChild className="mt-6 w-full">
                    <Link href="#contact">
                      {locale === "vi" ? "Trao đổi với tôi" : "Start a conversation"}
                    </Link>
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}
