export function LandingFooter() {
  return (
<footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div>
              <div className="footer__brand">
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
            <div>
              <div className="footer__title">서비스</div>
              <div className="footer__links">
                <a href="#worker">근로자</a>
                <a href="#employer">구인자</a>
                <a href="#trust">신뢰 시스템</a>
                <a href="#cta">앱 다운로드</a>
              </div>
            </div>
            <div>
              <div className="footer__title">회사</div>
              <div className="footer__links">
                <a href="#">소개</a>
                <a href="#">채용</a>
                <a href="#">언론보도</a>
                <a href="#">파트너십 문의</a>
              </div>
            </div>
            <div>
              <div className="footer__title">고객지원</div>
              <div className="footer__links">
                <a href="#faq">자주 묻는 질문</a>
                <a href="#">고객센터</a>
                <a href="#">이용약관</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">유료서비스 이용약관</a>
              </div>
            </div>
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
        </div>
      </footer>
  );
}
