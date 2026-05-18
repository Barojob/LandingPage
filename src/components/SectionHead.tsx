import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadProps = {
  /** 예: `promise__head`, `faq__head` — 끝에 `fade-up` 붙음 */
  className: string;
  eyebrow: string;
  eyebrowVariant?: "default" | "badge";
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHead({
  className,
  eyebrow,
  eyebrowVariant = "default",
  title,
  description,
}: SectionHeadProps) {
  return (
    <div className={`${className} fade-up`}>
      <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>
      {title}
      {description != null ? (
        typeof description === "string" ? (
          <p>{description}</p>
        ) : (
          description
        )
      ) : null}
    </div>
  );
}
