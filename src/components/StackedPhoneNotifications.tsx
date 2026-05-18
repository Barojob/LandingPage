import { useEffect, useRef, useState } from "react";

const BG = "/images/iphone.png";
const ALARMS = [
  "/images/01-alarm.png",
  "/images/02-alarm.png",
  "/images/03-alarm.png",
] as const;

const STEP_MS = 1500;

export function StackedPhoneNotifications() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let started = false;
    let t2 = 0;
    let t3 = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit || started) return;
        started = true;
        setVisibleCount(1);
        t2 = window.setTimeout(() => setVisibleCount(2), STEP_MS);
        t3 = window.setTimeout(() => setVisibleCount(3), STEP_MS * 2);
      },
      { threshold: 0.32, rootMargin: "0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto w-full max-w-[min(100%,300px)] select-none"
    >
      <img
        src={BG}
        alt=""
        className="pointer-events-none block h-auto w-full"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-[9%_6.5%_14%_6.5%] overflow-visible">
        <div className="relative h-full min-h-[200px] w-full overflow-visible sm:min-h-[220px]">
          {ALARMS.map((src, idx) => {
            const visible = idx < visibleCount;
            const depth = visible ? visibleCount - 1 - idx : 0;
            const baseScale = 1.08;
            const scale = visible ? baseScale * (1 - depth * 0.05) : 0.92;
            const translateY = visible ? depth * -14 : -20;
            const opacity = visible ? 1 : 0;
            const z = visible ? idx + 1 : 0;

            return (
              <img
                key={src}
                src={src}
                alt=""
                draggable={false}
                className="absolute bottom-[-23%] left-1/2 w-[124%] max-w-none origin-bottom transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [border-radius:20px] [filter:drop-shadow(0_18px_32px_rgba(37,99,235,0.14))]"
                style={{
                  opacity,
                  zIndex: z,
                  transform: `translateX(-50%) translateY(${translateY}px) scale(${scale})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
