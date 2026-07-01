import type { Metadata, Viewport } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AccentThemeProvider } from "@/lib/color-theme";
import { LocaleProvider } from "@/lib/locale";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://phanchicong.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Phan Chi Cong — Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js, TypeScript, e-commerce systems, fintech platforms, and admin dashboards.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Senior Frontend Developer",
    "Ho Chi Minh City",
    "E-commerce Frontend",
    "FinTech Frontend",
  ],
  authors: [{ name: "Phan Chi Cong" }],
  creator: "Phan Chi Cong",
  openGraph: {
    title: "Phan Chi Cong — Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, TypeScript, e-commerce systems, fintech platforms, and admin dashboards.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Phan Chi Cong",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phan Chi Cong — Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, TypeScript, e-commerce systems, fintech platforms, and admin dashboards.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0e14",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-accent="forest">
      <body className={`${outfit.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-fg)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--color-bg)]"
        >
          Skip to content / Bỏ qua đến nội dung
        </a>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AccentThemeProvider>
            <LocaleProvider>{children}</LocaleProvider>
          </AccentThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
