import { Container } from "../components/Container";
import { SectionHead } from "../components/SectionHead";
import { ShieldOutlineSvg } from "../components/icons/ShieldIcons";

export function LandingTrust() {
  return (
    <section className="trust" id="trust">
      <Container>
        <SectionHead
          className="trust__head"
          eyebrow="TRUST SYSTEM"
          title={
            <h2>
              믿고 쓸 수 있어야
              <br />
              플랫폼입니다.
            </h2>
          }
          description="익명의 일용직 시장에 신뢰 인프라를 만듭니다. 세 개의 검증 시스템이 모든 매칭 뒤에서 작동합니다."
        />
        <div className="trust__grid">
          <div className="trust__card fade-up fade-up--d1">
            <div className="trust__card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.4 0 4.6.9 6.3 2.4" />
              </svg>
            </div>
            <h3>경력 검증 시스템</h3>
            <p>
              출근 횟수·업무별 경력이 앱 내에서 자동으로 누적·기록됩니다. 위조
              불가능한 데이터 기반 신뢰.
            </p>
            <div className="trust__card-stat">
              <span className="trust__card-stat-num">100%</span>
              <span className="trust__card-stat-label">
                앱 내 자동 기록 · 위변조 불가
              </span>
            </div>
          </div>
          <div className="trust__card fade-up fade-up--d2">
            <div className="trust__card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
              </svg>
            </div>
            <h3>양방향 평점 시스템</h3>
            <p>
              사장님 → 근로자뿐 아니라 근로자 → 사장님 평가도. 서로가 서로를
              검증합니다.
            </p>
            <div className="trust__card-stat">
              <span className="trust__card-stat-num">★4.7</span>
              <span className="trust__card-stat-label">
                매칭 후 양방향 평점 입력
              </span>
            </div>
          </div>
          <div className="trust__card fade-up fade-up--d3">
            <div className="trust__card-icon">
              <ShieldOutlineSvg strokeWidth={2} />
            </div>
            <h3>노쇼 방지 페널티</h3>
            <p>
              무단 결근·지연·중도 이탈 시 즉시 점수 차감. 현장이 멈추는 일을
              시스템으로 막습니다.
            </p>
            <div className="trust__card-stat">
              <span className="trust__card-stat-num">3-Strike</span>
              <span className="trust__card-stat-label">
                3회 누적 시 매칭 제한
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
