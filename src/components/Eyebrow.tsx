import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  /** `badge` → `eyebrow--badge` (히어로 뱃지 등) */
  variant?: "default" | "badge";
  className?: string;
};

export function Eyebrow({
  children,
  variant = "default",
  className,
}: EyebrowProps) {
  const base =
    variant === "badge" ? "eyebrow eyebrow--badge" : "eyebrow";
  return <span className={className ? `${base} ${className}` : base}>{children}</span>;
}
