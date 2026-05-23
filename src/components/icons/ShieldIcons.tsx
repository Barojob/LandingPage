type SvgProps = {
  className?: string;
  strokeWidth?: number | string;
};

/** 방패 실루엣만 (브랜드 글리프·알림 아이콘 등) */
export function ShieldOutlineSvg({
  className,
  strokeWidth = 2,
}: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/** 방패 + 체크 (CTA 카드, 스마트 다이아몬드 등) */
export function ShieldWithCheckSvg({
  className,
  strokeWidth = 2,
}: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
