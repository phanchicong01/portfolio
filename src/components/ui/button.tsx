import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-signal)] text-[#06110b] hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--color-signal)_88%,white)] hover:shadow-[0_22px_38px_-22px_rgba(104,240,168,0.58)] font-semibold",
        outline:
          "border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.02)] text-[var(--color-fg)] hover:-translate-y-0.5 hover:bg-[var(--color-panel-2)] hover:border-[var(--color-signal-dim)]",
        ghost:
          "bg-transparent text-[var(--color-fg-muted)] hover:bg-[var(--color-panel-2)] hover:text-[var(--color-fg)]",
        subtle:
          "bg-[var(--color-panel-2)] text-[var(--color-fg)] hover:bg-[var(--color-panel-3)]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
