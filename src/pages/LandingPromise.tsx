import { Container } from "../components/Container";
import { SectionHead } from "../components/SectionHead";

export function LandingPromise() {
  return (
    <section className="promise">
      <Container>
        <SectionHead
          className="promise__head"
          eyebrow="HOW IT WORKS"
          title={
            <h2>
              등록 한 번으로 끝.
              <br />
              나머지는 알고리즘이 합니다.
            </h2>
          }
          description="전화 돌리고, 공고 찾아보고, 사람 검증할 시간을 줄여드려요."
        />
        <div className="promise__grid">
          <div className="promise__card fade-up fade-up--d1">
            <span className="promise__num">01</span>
            <svg
              className="promise__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
            <h3>조건 등록</h3>
            <p>
              일정·작업·위치·이동방식·희망 단가 등 내 조건을 한 번만
              등록하세요. 1분이면 끝.
            </p>
          </div>
          <div className="promise__card fade-up fade-up--d2">
            <span className="promise__num">02</span>
            <svg
              className="promise__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 10v6m11-11h-6m-10 0H1" />
            </svg>
            <h3>자동 매칭</h3>
            <p>
              알고리즘이 위치·경력·평점·근태를 종합해 가장 잘 맞는 짝을
              찾습니다.
            </p>
          </div>
          <div className="promise__card fade-up fade-up--d3">
            <span className="promise__num">03</span>
            <svg
              className="promise__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <h3>알림 도착</h3>
            <p>
              매칭이 되면 즉시 알림. 수락 한 번이면 그 날 일·사람이
              정해집니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
