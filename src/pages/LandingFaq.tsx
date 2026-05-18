import { useState } from "react";
import { Container } from "../components/Container";
import { SectionHead } from "../components/SectionHead";
import { FAQ_ITEMS } from "../utils/constants";
import { FaqItemRow } from "./FaqItemRow";

export function LandingFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="faq" id="faq">
      <Container>
        <SectionHead
          className="faq__head"
          eyebrow="FAQ"
          title={<h2>자주 묻는 질문</h2>}
        />
        <div className="faq__list">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItemRow
              key={item.q}
              item={item}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
