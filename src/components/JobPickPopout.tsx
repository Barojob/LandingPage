import { useEffect, useRef, useState } from "react";

export type JobPickPopoutProps = {
  backgroundSrc: string;
  pointSrc: string;
  backgroundAlt: string;
  /** 배경 스크린샷 위 UI와 맞추는 값(%) */
  pointTopPct: number;
  pointLeftPct: number;
  pointWidthPct: number;
  /** 활성 시 Tailwind scale 클래스, 예: scale-[1.28] */
  activeScaleClass?: string;
};

export function JobPickPopout({
  backgroundSrc,
  pointSrc,
  backgroundAlt,
  pointTopPct,
  pointLeftPct,
  pointWidthPct,
  activeScaleClass = "scale-[1.28]",
}: JobPickPopoutProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.32, rootMargin: "0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto w-full max-w-[min(100%,320px)] select-none"
    >
      <img
        src={backgroundSrc}
        alt={backgroundAlt}
        className="pointer-events-none block w-full rounded-[28px] shadow-lg shadow-slate-900/10"
        draggable={false}
      />
      <img
        src={pointSrc}
        alt=""
        aria-hidden
        draggable={false}
        className={`pointer-events-none absolute z-10 max-w-none origin-center transition-all duration-700 ease-out will-change-transform ${
          isActive ? `opacity-100 ${activeScaleClass}` : "opacity-0 scale-100"
        }`}
        style={{
          top: `${pointTopPct}%`,
          left: `${pointLeftPct}%`,
          width: `${pointWidthPct}%`,
        }}
      />
    </div>
  );
}
