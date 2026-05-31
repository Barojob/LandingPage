import { Container } from "../components/Container";
import { Eyebrow } from "../components/Eyebrow";
import { HeroRotatingTypeWord } from "../components/HeroRotatingTypeWord";
import { StoreBadgeLinks } from "../components/StoreBadgeLinks";

export function LandingHero() {
  return (
    <section className="hero" id="top">
      <Container>
        <div className="hero__inner">
          <div className="hero__bears fade-up">
            <img
              src="/images/leftBear.png"
              alt="근로자 마스코트"
              className="hero__bear hero__bear--worker"
            />
            <img
              src="/images/rightBear.png"
              alt="구인자 마스코트"
              className="hero__bear hero__bear--employer"
            />
          </div>
          <Eyebrow variant="badge" className="fade-up fade-up--d1">
            앱 등록 1분 · 매칭 자동
          </Eyebrow>
          <h1 className="hero__title fade-up fade-up--d1">
            <span className="hero__title-line">
              <span className="hero__title-prefix">등록만 해두면</span>
              <HeroRotatingTypeWord />
            </span>
            <em>알아서 찾아옵니다</em>
          </h1>
          <p className="hero__lede fade-up fade-up--d2">
            현장에 딱 맞는 <strong>인력</strong>도, 우리 동네{" "}
            <strong>일자리</strong>도.
            <br />
            알고리즘이 위치·경력·평점을 분석해서 알아서 매칭해드려요.
          </p>
          <StoreBadgeLinks className="store-badges fade-up fade-up--d3" />
          <div className="hero__meta fade-up fade-up--d3">
            <span className="hero__meta-item">평점 시스템</span>
            <span className="hero__meta-item">알고리즘 매칭</span>
            <span className="hero__meta-item">검증된 인력 풀</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
