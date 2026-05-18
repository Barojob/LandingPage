import { BrandLogoGlyph } from "../components/icons/ShieldIcons";

export function LandingNav() {
  return (
    <nav className="nav" id="nav">
      <div className="nav__inner">
        <a href="#top" className="brand">
          <BrandLogoGlyph />
          <span>인력특공대</span>
        </a>
        <div className="nav__links">
          <a href="#worker">근로자</a>
          <a href="#employer">구인자</a>
          <a href="#faq">자주 묻는 질문</a>
        </div>
        <a href="#cta" className="nav__cta">
          앱 다운로드 →
        </a>
      </div>
    </nav>
  );
}
