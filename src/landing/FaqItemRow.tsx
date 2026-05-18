import { useEffect, useRef, useState } from "react";
import type { FaqItemData } from "./constants";
import { FADE_IO } from "./constants";

export function FaqItemRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.unobserve(entry.target);
        }
      });
    }, FADE_IO);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`fade-up${revealed ? " in-view" : ""}`}
      data-faq-row
    >
      <div className={`faq__item${isOpen ? " open" : ""}`}>
        <button type="button" className="faq__q" onClick={onToggle}>
          {item.q}
          <span className="faq__icon">+</span>
        </button>
        <div className="faq__a">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}
