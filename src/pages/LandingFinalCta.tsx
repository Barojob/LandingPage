import { Container } from "../components/Container";
import { ShieldWithCheckSvg } from "../components/icons/ShieldIcons";
import { StoreBadgeLinks } from "../components/StoreBadgeLinks";

export function LandingFinalCta() {
  return (
    <section className="final-cta" id="cta">
      <Container>
        <div className="final-cta__card fade-up">
          <div className="final-cta__inner">
            <div className="final-cta__shield">
              <ShieldWithCheckSvg />
            </div>
            <h2 className="final-cta__title">
              <em>지금 바로 시작</em>해보세요
            </h2>
            <p className="final-cta__desc">
              한 번 사용해보시면 현장 운영이, 일자리 찾기가 훨씬 수월해질
              거예요.
              <br />
              앱 등록은 1분, 그 뒤로는 알아서 매칭이 옵니다.
            </p>
            <StoreBadgeLinks className="final-cta__store" placement="final_cta" />
          </div>
        </div>
      </Container>
    </section>
  );
}
