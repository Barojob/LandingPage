export function LandingNav() {
  return (
<nav className="nav" id="nav">
        <div className="nav__inner">
          <a href="#top" className="brand">
            <span className="brand__logo">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span>인력특공대</span>
          </a>
          <div className="nav__links">
            <a href="#worker">근로자</a>
            <a href="#employer">구인자</a>
            <a href="#trust">신뢰 시스템</a>
            <a href="#faq">자주 묻는 질문</a>
          </div>
          <a href="#cta" className="nav__cta">
            앱 다운로드 →
          </a>
        </div>
      </nav>
  );
}
