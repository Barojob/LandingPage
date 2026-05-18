import { BrandLogoGlyph } from "../components/icons/ShieldIcons";
import { Container } from "../components/Container";
import { FooterLinkColumn } from "../components/FooterLinkColumn";

const SERVICE_LINKS = [
  { href: "#worker", label: "근로자" },
  { href: "#employer", label: "구인자" },
  { href: "#cta", label: "앱 다운로드" },
];

const COMPANY_LINKS = [
  { href: "#", label: "소개" },
  { href: "#", label: "채용" },
  { href: "#", label: "언론보도" },
  { href: "#", label: "파트너십 문의" },
];

const SUPPORT_LINKS = [
  { href: "#faq", label: "자주 묻는 질문" },
  { href: "#", label: "고객센터" },
  { href: "#", label: "이용약관" },
  { href: "#", label: "개인정보처리방침" },
  { href: "#", label: "유료서비스 이용약관" },
];

export function LandingFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div>
            <div className="footer__brand">
              <BrandLogoGlyph />
              인력특공대
            </div>
            <p className="footer__about">
              현장에 딱 맞는 인력도, 우리 동네 일자리도.
              <br />
              알고리즘이 알아서 찾아주는 건설 인력 매칭 앱.
              <br />
              등록만 해두면 끝.
            </p>
          </div>
          <FooterLinkColumn title="서비스" links={SERVICE_LINKS} />
          <FooterLinkColumn title="회사" links={COMPANY_LINKS} />
          <FooterLinkColumn title="고객지원" links={SUPPORT_LINKS} />
        </div>
        <div className="footer__compliance">
          <strong>유료직업소개사업 신고 정보</strong>
          <br />
          직업안정법 제19조에 따라 유료직업소개사업 신고를 완료한 사업자입니다.
          <br />
          유료직업소개사업 신고번호 : [출시 시점 표기] · 관할 지자체 : [출시
          시점 표기]
        </div>
        <div className="footer__legal">
          <div>
            (주)인력특공대 · 대표 [대표자명] · 사업자등록번호 [출시 시점 표기]
          </div>
          <div>
            주소 : [출시 시점 표기] · 통신판매업 신고번호 : [출시 시점 표기]
          </div>
          <div>
            고객센터 : 1234-5678 (평일 09:00 - 18:00) · 이메일 :
            help@inryeok.kr
          </div>
          <div style={{ marginTop: 8 }}>
            © 2026 인력특공대. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
