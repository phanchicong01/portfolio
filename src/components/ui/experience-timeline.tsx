import { Badge } from "@/components/ui/badge";

interface ExperienceTimelineProps {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  current?: boolean;
  isLast?: boolean;
}

export function ExperienceTimeline({
  company,
  role,
  period,
  description,
  responsibilities,
  current = false,
  isLast = false,
}: ExperienceTimelineProps) {
  return (
    <div className="relative grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-7">
      {/* Rail + node */}
      <div className="relative flex flex-col items-center">
        <span
          className={`relative mt-1.5 size-3 shrink-0 rounded-full ${
            current
              ? "bg-[var(--color-signal)] pulse-dot"
              : "bg-[var(--color-line-strong)] ring-2 ring-[var(--color-line)]"
          }`}
          aria-hidden
        />
        {!isLast && (
          <span className="mt-1 w-px flex-1 bg-gradient-to-b from-[var(--color-line-strong)] to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className={isLast ? "pb-0" : "pb-10"}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-fg)]">
            {role}
            <span className="text-[var(--color-signal)]"> — {company}</span>
          </h3>
          {current && (
            <Badge variant="signal" size="sm" className="font-mono">
              Current
            </Badge>
          )}
        </div>

        <p className="mt-1 font-mono text-xs tracking-wide text-[var(--color-fg-subtle)]">
          {period}
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-fg-muted)]">
          {description}
        </p>

        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {responsibilities.map((r) => (
            <li
              key={r}
              className="flex gap-2.5 text-[13px] leading-relaxed text-[var(--color-fg-muted)]"
            >
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--color-signal-dim)]" aria-hidden />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
