import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface AuthFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AuthShellProps {
  headline: string;
  description: string;
  features: AuthFeature[];
  children: ReactNode;
}

export function AuthShell({
  headline,
  description,
  features,
  children,
}: AuthShellProps) {
  return (
    <div className="grid min-h-screen flex-1 bg-base lg:grid-cols-2">
      <aside className="hidden flex-col justify-between gap-10 border-r border-surface-border bg-surface p-10 lg:flex">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-sm font-semibold text-primary-foreground">
            G
          </span>
          <span className="text-sm font-semibold text-copy-primary">
            Ghost Project
          </span>
        </div>

        <div className="flex max-w-md flex-col gap-8 self-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-copy-primary">
              {headline}
            </h1>
            <p className="text-sm text-copy-muted">{description}</p>
          </div>
          <ul className="flex flex-col gap-5">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-accent-dim text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-copy-primary">
                    {title}
                  </span>
                  <span className="text-xs text-copy-muted">{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <span aria-hidden className="h-4" />
      </aside>
      <main className="flex items-center justify-center p-6">{children}</main>
    </div>
  );
}
