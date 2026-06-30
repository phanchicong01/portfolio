"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useLocale } from "@/lib/locale";

export function CopyEmailButton() {
  const { locale } = useLocale();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently.
    }
  };

  return (
    <Button
      variant="outline"
      onClick={copy}
      aria-label={locale === "vi" ? "Sao chép địa chỉ email" : "Copy email address"}
    >
      {copied ? <Check className="text-[var(--color-signal)]" /> : <Copy />}
      {copied ? (locale === "vi" ? "Đã sao chép" : "Copied") : locale === "vi" ? "Sao chép Email" : "Copy Email"}
    </Button>
  );
}
