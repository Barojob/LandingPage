import { useState } from "react";
import { FAQ_ITEMS } from "./constants";
import { FaqItemRow } from "./FaqItemRow";

export function LandingFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
<section className="faq" id="faq">
        <div className="container">
          <div className="faq__head fade-up">
            <span className="eyebrow">FAQ</span>
            <h2>자주 묻는 질문</h2>
          </div>
          <div className="faq__list">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItemRow
                key={item.q}
                item={item}
                isOpen={openFaq === i}
                onToggle={() =>
                  setOpenFaq((prev) => (prev === i ? null : i))
                }
              />
            ))}
          </div>
        </div>
      </section>
  );
}
