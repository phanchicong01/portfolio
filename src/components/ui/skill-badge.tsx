import { cn } from "@/lib/utils";

export function SkillBadge({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.03)] px-3.5 py-1.5 text-[13px] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-signal-dim)] hover:text-[var(--color-fg)]",
        className
      )}
    >
      {name}
    </span>
  );
}
