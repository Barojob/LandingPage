export function LandingHero() {
  return (
<section className="hero" id="top">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__bears fade-up">
              <img
                src="/images/bear-worker-only.png"
                alt="근로자 마스코트"
                className="hero__bear hero__bear--worker"
              />
              <img
                src="/images/bear-employer-only.png"
                alt="구인자 마스코트"
                className="hero__bear hero__bear--employer"
              />
            </div>
            <span className="eyebrow eyebrow--badge fade-up fade-up--d1">
              앱 등록 1분 · 매칭 자동
            </span>
            <h1 className="hero__title fade-up fade-up--d1">
              등록만 해두면
              <br />
              <em>알아서 찾아옵니다</em>
            </h1>
            <p className="hero__lede fade-up fade-up--d2">
              현장에 딱 맞는 <strong>인력</strong>도, 우리 동네{" "}
              <strong>일자리</strong>도.
              <br />
              알고리즘이 위치·경력·평점을 분석해서 알아서 매칭해드려요.
            </p>
            <div className="store-badges fade-up fade-up--d3">
              <a
                href="#cta"
                className="store-badge"
                aria-label="App Store 다운로드"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="store-badge__text">
                  <span className="store-badge__small">Download on the</span>
                  <span className="store-badge__large">App Store</span>
                </span>
              </a>
              <a
                href="#cta"
                className="store-badge"
                aria-label="Google Play 다운로드"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.808 1.626L15.146 12l2.552-2.492zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
                </svg>
                <span className="store-badge__text">
                  <span className="store-badge__small">GET IT ON</span>
                  <span className="store-badge__large">Google Play</span>
                </span>
              </a>
            </div>
            <div className="hero__meta fade-up fade-up--d3">
              <span className="hero__meta-item">현장 인터뷰 60+</span>
              <span className="hero__meta-item">알고리즘 매칭</span>
              <span className="hero__meta-item">검증된 인력 풀</span>
            </div>
          </div>
        </div>
      </section>
  );
}
