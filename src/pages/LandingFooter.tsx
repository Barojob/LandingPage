import { Container } from "../components/Container";
import { FooterLinkColumn } from "../components/FooterLinkColumn";

const SERVICE_LINKS = [
  { href: "#worker", label: "근로자" },
  { href: "#employer", label: "구인자" },
  { href: "/download", label: "앱 다운로드" },
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
              <img
                src="/images/Logo.png"
                alt=""
                className="brand__logo"
                width={48}
                height={48}
                draggable={false}
              />
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
        </div>
        <div className="footer__legal">
          <div>
            인력특공대 (Inteuk) · 대표 김정우 · 사업자등록번호 240-93-02404
          </div>
          <div>주소 : 강원특별자치도 원주시 남산로 77, 3층 T7호(일산동)</div>
          <div>이메일 : jeongwoo@inteuk.com</div>
          <div style={{ marginTop: 8 }}>
            Inteuk is a construction day-labor matching app based in Wonju,
            South Korea.
          </div>
          <div style={{ marginTop: 8 }}>
            © 2026 인력특공대 (Inteuk). All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
