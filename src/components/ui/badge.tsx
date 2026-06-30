import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-line)] bg-[var(--color-panel-2)] text-[var(--color-fg-muted)]",
        signal:
          "border-[var(--color-signal-dim)]/60 bg-[color-mix(in_oklab,var(--color-signal)_12%,transparent)] text-[var(--color-signal)]",
        indigo:
          "border-[var(--color-indigo)]/40 bg-[color-mix(in_oklab,var(--color-indigo)_12%,transparent)] text-[var(--color-indigo)]",
      },
      size: {
        default: "px-3 py-1",
        sm: "px-2.5 py-0.5",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
