import { useEffect, useRef, useState } from "react";
import "./landing.css";

const FADE_IO: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -80px 0px",
};

function FaqItemRow({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.unobserve(entry.target);
        }
      });
    }, FADE_IO);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`fade-up${revealed ? " in-view" : ""}`}
      data-faq-row
    >
      <div className={`faq__item${isOpen ? " open" : ""}`}>
        <button type="button" className="faq__q" onClick={onToggle}>
          {item.q}
          <span className="faq__icon">+</span>
        </button>
        <div className="faq__a">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "이용료는 어떻게 되나요?",
    a: "근로자는 이용료가 무료입니다. 구인자는 매칭 성공 시 일정 비율의 중개 수수료가 청구되며, 정확한 금액은 매칭 시점에 사전 고지됩니다.",
  },
  {
    q: "등록만 하면 정말 매칭이 와요?",
    a: "네. 출근 가능 범위·희망 업무·일정만 등록해두시면, 알고리즘이 그 조건에 맞는 일자리(또는 인력)가 생기는 즉시 푸시 알림을 보내드립니다. 매번 앱을 켜서 검색할 필요가 없습니다. 다만 매칭 빈도는 지역 내 수요·공급에 따라 달라질 수 있습니다.",
  },
  {
    q: "매칭 점수는 어떻게 계산되나요?",
    a: "매칭 점수는 (1) 출근 횟수, (2) 정시 도착률, (3) 사장님 평점, (4) 업무별 경력 누적치를 종합해 계산됩니다. 점수가 높을수록 좋은 일자리에 우선 매칭되며, 100점 만점 기준으로 90점 이상은 '우선 매칭' 등급을 받습니다.",
  },
  {
    q: "노쇼(무단 결근)가 발생하면 어떻게 되나요?",
    a: "매칭 확정 후 사전 통보 없이 출근하지 않은 경우 매칭 점수가 즉시 차감되며, 누적 3회 발생 시 일정 기간 매칭이 제한됩니다. 또한 구인자에게 자동 대체 매칭 시스템이 즉시 작동해 현장 운영의 공백을 최소화합니다.",
  },
  {
    q: "정산은 어떤 방식으로 진행되나요?",
    a: "구인자는 매칭 확정 시점에 안전 결제 시스템에 비용을 예치합니다. 근로자가 정상적으로 근무를 완료하면 자동으로 정산이 진행되며, 일용직 지급명세서·세금계산서 등 법정 서류도 자동으로 처리됩니다.",
  },
  {
    q: "기능공(기술자)도 이용할 수 있나요?",
    a: "네. 보통 인부뿐 아니라 미장·타일·목수·하스리·코아·전기·설비 등 30개 이상의 기능공 카테고리를 지원합니다. 기능공의 경우 '기술자 인증' 페이지를 통해 자격증·경력 증빙 후 우선 매칭 풀에 등록됩니다.",
  },
  {
    q: "알림이 너무 많이 오지 않을까요?",
    a: "아니에요. 등록하신 출근 가능 범위·희망 업무·일정에 정확히 맞는 매칭에만 알림이 오기 때문에, 무차별적 푸시는 없습니다. 알림 빈도는 앱 설정에서 추가로 조절할 수 있습니다.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      FADE_IO,
    );
    document
      .querySelectorAll(".fade-up:not([data-faq-row])")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
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

      <section className="promise">
        <div className="container">
          <div className="promise__head fade-up">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>
              등록 한 번으로 끝.
              <br />
              나머지는 알고리즘이 합니다.
            </h2>
            <p>
              전화 돌리고, 공고 찾아보고, 사람 검증할 시간을 줄여드려요.
            </p>
          </div>
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
        </div>
      </section>

      <section className="audience audience--worker" id="worker">
        <div className="container">
          <div className="audience-hero fade-up">
            <img
              src="/images/bear-worker-only.png"
              alt="근로자 마스코트"
              className="audience-hero__bear"
            />
            <div className="audience-hero__copy">
              <span className="audience-hero__badge">FOR WORKERS</span>
              <h2 className="audience-hero__title">
                이젠 찾지 말고
                <br />
                <em>알림</em> 받으세요
              </h2>
              <p className="audience-hero__sub">
                앱 등록만 해두면 맞는 일자리가 알아서 와요.
              </p>
            </div>
          </div>

          <div className="brand-intro fade-up">
            <div className="brand-intro__copy">
              <span className="brand-intro__eyebrow">인력특공대</span>
              <h3 className="brand-intro__title">
                우리 동네 일자리,
                <br />
                가장 쉽게 찾는 방법
              </h3>
              <div className="brand-intro__body">
                <p>안녕하세요, 인력특공대입니다.</p>
                <p>
                  전화를 돌리고, 공고 글을 찾아보고…{" "}
                  <strong>고생이 너무 많으셨죠?</strong>
                </p>
                <p>
                  조금 더 쉽게, 원하는 일자리를 찾으실 수 있도록 인력특공대가
                  나왔습니다.
                </p>
                <p>
                  인력특공대는{" "}
                  <strong>딱 맞는 일자리를 알아서 찾아드리는 앱</strong>
                  이에요.
                </p>
              </div>
              <div className="key-points">
                <div className="key-points__head">주요 내용</div>
                <ul>
                  <li>
                    내가 출근 가능한 <strong>우리 동네 일자리</strong>만 알림
                    받아요
                  </li>
                  <li>
                    하고 싶은 <strong>업무 종류</strong>를 직접 골라요
                  </li>
                  <li>
                    성실히 출근하면 <strong>매칭 점수</strong>가 올라가요
                  </li>
                  <li>
                    조건에 맞는 일자리는 <strong>알림</strong>으로 알려드려요
                  </li>
                </ul>
              </div>
            </div>
            <div className="brand-intro__shield">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
          </div>

          <div className="features-stack">
            <div className="feature-block fade-up">
              <div className="feature-block__copy">
                <span className="feature-block__num">01</span>
                <h3 className="feature-block__title">
                  우리 동네 일자리를
                  <br />
                  <em>딱!</em> 골라드려요
                </h3>
                <p className="feature-block__desc">
                  출퇴근 가능한 범위를 직접 설정할 수 있어요. 너무 먼 현장이나
                  가기 힘든 곳이 아니라,{" "}
                  <strong>우리 동네 일자리</strong>로 알림을 받을 수 있습니다.
                </p>
                <ul className="feature-block__bullets">
                  <li>지도에서 출퇴근 가능 범위 직접 설정</li>
                  <li>&apos;가까운 동네 ↔ 먼 동네&apos; 슬라이더로 직관적 조정</li>
                  <li>대중교통+도보 / 자차 이용 모드 선택</li>
                  <li>설정한 범위 밖 일자리는 절대 매칭 안 됨</li>
                </ul>
              </div>
              <div className="feature-block__media">
                <div className="phone-mock">
                  <div className="phone-mock__halo" />
                  <img
                    src="/images/03-worker-location.png"
                    alt="출근 가능 범위 설정 화면"
                  />
                </div>
              </div>
            </div>

            <div className="feature-block fade-up">
              <div className="feature-block__copy">
                <span className="feature-block__num">02</span>
                <h3 className="feature-block__title">
                  원하는 업무만
                  <br />
                  <em>쏙쏙</em> 골라 선택해요
                </h3>
                <p className="feature-block__desc">
                  보통 인부, 신호수, 철거… 내가 하고 싶고, 잘하는 업무를
                  등록해놓으면 관련 현장 알림이 와요.{" "}
                  <strong>
                    하기 싫은 일은 미리 체크에서 빼놓을 수 있습니다.
                  </strong>
                </p>
                <ul className="feature-block__bullets">
                  <li>보통 인부 / 기능공 카테고리 분리</li>
                  <li>일반·조공·하스리·서비스 등 30+ 세부 업무</li>
                  <li>여러 개 동시 선택 가능</li>
                  <li>등록한 업무에서만 알림이 옵니다</li>
                </ul>
              </div>
              <div className="feature-block__media">
                <div className="phone-mock">
                  <div className="phone-mock__halo" />
                  <img
                    src="/images/04-worker-category.png"
                    alt="업무 카테고리 선택 화면"
                  />
                </div>
              </div>
            </div>

            <div className="feature-block fade-up">
              <div className="feature-block__copy">
                <span className="feature-block__num">03</span>
                <h3 className="feature-block__title">
                  성실히 출근할수록
                  <br />
                  오르는 <em>매칭 점수</em>
                </h3>
                <p className="feature-block__desc">
                  출근을 많이 하고 평점이 좋을수록 매칭 점수가 올라가요. 점수가
                  높으면 건설사에게{" "}
                  <strong>
                    우선적으로 보이게 되어 매칭 확률이 더 높아집니다.
                  </strong>
                </p>
                <ul className="feature-block__bullets">
                  <li>출근 횟수 + 정시 도착률 + 사장님 평점 종합</li>
                  <li>&apos;우선 매칭&apos; 등급에 들면 좋은 현장이 먼저 옴</li>
                  <li>업무별 경력 자동 데이터화</li>
                  <li>매칭 점수가 곧 내 신뢰도</li>
                </ul>
              </div>
              <div className="feature-block__media">
                <div className="worker-card-mock">
                  <div className="worker-card-mock__header">
                    <span className="worker-card-mock__title">근로자 정보</span>
                    <span className="worker-card-mock__priority">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                      </svg>
                      우선 매칭
                    </span>
                  </div>
                  <div className="worker-card-mock__body">
                    <div className="worker-card-mock__avatar">👷</div>
                    <div className="worker-card-mock__info">
                      이름 <strong>김철수</strong>
                      <br />
                      나이 <strong>33세</strong>
                      <br />
                      역량 <strong>해머드릴, 그라인더</strong>
                    </div>
                    <div className="worker-card-mock__shield">
                      <span className="worker-card-mock__shield-label">
                        매칭 점수
                      </span>
                      <span className="worker-card-mock__shield-score">
                        96점
                      </span>
                    </div>
                  </div>
                  <div className="worker-card-mock__chips">
                    <span className="worker-card-mock__chip">보통인력 28회</span>
                    <span className="worker-card-mock__chip">철거 4회</span>
                    <span className="worker-card-mock__chip">미장 조공 1회</span>
                  </div>
                  <div className="worker-card-mock__activities">
                    <div className="worker-card-mock__activities-head">
                      매칭 점수가 오르는 활동
                    </div>
                    <div className="worker-card-mock__activities-grid">
                      <div className="worker-card-mock__activity">
                        <span className="worker-card-mock__activity-emoji">
                          ⏰
                        </span>
                        정시에
                        <br />
                        출근/퇴근 완료
                      </div>
                      <div className="worker-card-mock__activity">
                        <span className="worker-card-mock__activity-emoji">
                          👍
                        </span>
                        건설사로부터
                        <br />
                        좋은 평점 획득
                      </div>
                      <div className="worker-card-mock__activity">
                        <span className="worker-card-mock__activity-emoji">
                          📈
                        </span>
                        출근 횟수
                        <br />
                        늘리기
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-block fade-up">
              <div className="feature-block__copy">
                <span className="feature-block__num">04</span>
                <h3 className="feature-block__title">
                  찾지 마세요!
                  <br />
                  일자리가 <em>찾아옵니다</em>
                </h3>
                <p className="feature-block__desc">
                  조건만 등록해두면 끝. 매칭되는 일자리가 생기면 알림으로 바로
                  알려드려요. 더 이상 일자리 찾느라 시간 쓰지 않아도 됩니다.
                </p>
                <div className="notice-box">
                  <strong>매칭 알림이 오면</strong> 빠른 시간 안에 수락/거절을
                  결정해주세요. 시간이 지나면 다른 분께 기회가 넘어가요!
                </div>
              </div>
              <div className="feature-block__media">
                <div className="notif-mock">
                  <span className="notif-mock__time">4월 1일 (화)</span>
                  <span className="notif-mock__clock">9:41</span>
                  <div className="notif-mock__notification">
                    <div className="notif-mock__notif-icon">
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
                    </div>
                    <div className="notif-mock__notif-content">
                      <span className="notif-mock__notif-time">지금</span>
                      <span className="notif-mock__notif-app">인력특공대</span>
                      <div className="notif-mock__notif-title">
                        일자리를 찾았어요!
                      </div>
                      <div className="notif-mock__notif-body">
                        포천체육공원 철거작업 · 18만원
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience audience--employer" id="employer">
        <div className="container">
          <div className="audience-hero fade-up">
            <img
              src="/images/bear-employer-only.png"
              alt="구인자 마스코트"
              className="audience-hero__bear"
            />
            <div className="audience-hero__copy">
              <span className="audience-hero__badge">FOR COMPANIES</span>
              <h2 className="audience-hero__title">
                필요한 인력
                <br />
                <em>몇 번의 터치</em>로 구해봐요!
              </h2>
              <p className="audience-hero__sub">
                앱 등록만 해두면 맞는 인력이 알아서 매칭돼요.
              </p>
            </div>
          </div>

          <div className="brand-intro fade-up">
            <div className="brand-intro__copy">
              <span className="brand-intro__eyebrow">인력특공대</span>
              <h3 className="brand-intro__title">
                현장에 딱 맞는 인력,
                <br />
                가장 쉽게 구하는 법
              </h3>
              <div className="brand-intro__body">
                <p>안녕하세요, 인력특공대입니다.</p>
                <p>
                  매번 인력 구하시느라 <strong>번거로우셨죠?</strong>
                </p>
                <p>
                  조금 더 편하고 빠르게, 검증된 인력을 찾으실 수 있도록
                  인력특공대가 나왔습니다.
                </p>
                <p>
                  인력특공대는{" "}
                  <strong>우리 현장에 맞는 인력을 알아서 찾아드리는 앱</strong>
                  이에요.
                </p>
              </div>
              <div className="key-points">
                <div className="key-points__head">주요 내용</div>
                <ul>
                  <li>
                    필요한 조건만 고르면 <strong>몇 번의 터치</strong>로 인력
                    요청
                  </li>
                  <li>
                    알고리즘이 <strong>딱 맞는 인력</strong>을 알아서 찾아줘요
                  </li>
                  <li>
                    <strong>검증된 리스트</strong>에서 인력을 직접 골라요
                  </li>
                  <li>
                    누가 언제 오는지 <strong>실시간</strong>으로 확인해요
                  </li>
                </ul>
              </div>
            </div>
            <div className="brand-intro__shield">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
          </div>

          <div className="features-stack">
            <div className="feature-block fade-up">
              <div className="feature-block__copy">
                <span className="feature-block__num">01</span>
                <h3 className="feature-block__title">
                  필요한 인력,
                  <br />
                  <em>몇 번의 터치</em>로 요청 완료!
                </h3>
                <p className="feature-block__desc">
                  복잡한 양식 작성 없이 필요한 조건만 선택하면 됩니다.
                  사무실에서든 현장에서든, 이젠 핸드폰 하나로 간편하게 인력 요청을
                  마칠 수 있어요.
                </p>
                <ul className="feature-block__bullets">
                  <li>일정 지정 (단일/연속/반복)</li>
                  <li>업무 카테고리 선택 (보통 인부 / 기능공)</li>
                  <li>세부 옵션 (평지·엘베, 보양, 자재정리 등)</li>
                  <li>준비물·인원·시간까지 한 화면에서</li>
                </ul>
              </div>
              <div className="feature-block__media">
                <div className="phone-mock">
                  <div className="phone-mock__halo" />
                  <img
                    src="/images/06-employer-request.png"
                    alt="인력 요청 화면"
                  />
                </div>
              </div>
            </div>

            <div className="feature-block fade-up">
              <div className="feature-block__copy">
                <span className="feature-block__num">02</span>
                <h3 className="feature-block__title">
                  좋은 인력, <em>알고리즘</em>이
                  <br />
                  알아서 찾아드려요
                </h3>
                <p className="feature-block__desc">
                  업무를 고르시고 나면 매칭 방법을 선택하실 수 있어요.{" "}
                  <strong>스마트 매칭</strong>은 현장 위치, 인력의 경력과 평점
                  등을 종합해서 우리 현장에 가장 잘 맞는 인력을 자동으로
                  찾아드립니다.
                </p>
                <ul className="feature-block__bullets">
                  <li>매번 누구에게 부탁할지 고민 안 해도 됨</li>
                  <li>현장에 가장 적합한 인력을 자동 배정</li>
                  <li>인력 펑크 시 자동 대체 매칭</li>
                  <li>한 번 이용해보세요 — 시간이 확 줄어요</li>
                </ul>
              </div>
              <div className="feature-block__media">
                <div className="smart-diamond">
                  <div className="smart-diamond__node smart-diamond__node--top">
                    현장
                    <br />
                    위치
                  </div>
                  <div className="smart-diamond__node smart-diamond__node--right">
                    평점
                  </div>
                  <div className="smart-diamond__node smart-diamond__node--bottom">
                    근태
                  </div>
                  <div className="smart-diamond__node smart-diamond__node--left">
                    출근
                    <br />
                    횟수
                  </div>
                  <div className="smart-diamond__center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-block fade-up">
              <div className="feature-block__copy">
                <span className="feature-block__num">03</span>
                <h3 className="feature-block__title">
                  내 눈으로 <em>직접 확인</em>하고
                  <br />
                  원하는 인력을 골라요
                </h3>
                <p className="feature-block__desc">
                  알고리즘 추천 외에도, 출근 이력·경력·평점이 공개된 검증된 인력
                  리스트에서 직접 고를 수 있어요.{" "}
                  <strong>어떤 분이 오시는지 미리 확인할 수 있습니다.</strong>
                </p>
                <ul className="feature-block__bullets">
                  <li>&apos;인력특공대 추천 Pick!&apos; 우선 노출</li>
                  <li>매칭 점수·평점·총 출근 횟수·요청 단가 한 화면</li>
                  <li>여러 명 동시 선택 가능</li>
                  <li>&apos;우선 매칭&apos; 인력은 신뢰도 검증 완료</li>
                </ul>
                <div className="notice-box">
                  <strong>만약 근로자가 제안을 거절할 경우</strong> 자동으로
                  매칭 방법이 스마트 매칭으로 변경되니, 배정받지 못 할 걱정은 안
                  하셔도 됩니다.
                </div>
              </div>
              <div className="feature-block__media">
                <div className="phone-mock">
                  <div className="phone-mock__halo" />
                  <img
                    src="/images/08-employer-direct.png"
                    alt="직접 매칭 인력 리스트 화면"
                  />
                </div>
              </div>
            </div>

            <div className="feature-block fade-up">
              <div className="feature-block__copy">
                <span className="feature-block__num">04</span>
                <h3 className="feature-block__title">
                  현장 도착 현황을
                  <br />
                  <em>실시간</em>으로 체크해요
                </h3>
                <p className="feature-block__desc">
                  오늘 어떤 분이 어디쯤 오고 있는지 한 눈에 확인할 수 있어요.{" "}
                  <strong>
                    &quot;몇 시쯤 도착하시나요?&quot;라고 일일이 전화하실 필요
                    없습니다.
                  </strong>
                </p>
                <ul className="feature-block__bullets">
                  <li>지도 기반 실시간 위치 (출근 중인 인력만)</li>
                  <li>예상 도착 시간 자동 계산</li>
                  <li>인력별 담당업무·연락처 한 번에</li>
                  <li>인력이 현장 근처 도착 시 자동 알림</li>
                </ul>
              </div>
              <div className="feature-block__media">
                <div className="map-mock">
                  <div className="map-mock__pin" />
                  <div className="map-mock__route" />
                  <div className="map-mock__dest">근무지</div>
                  <div className="map-mock__bottom">
                    <div className="map-mock__bottom-head">
                      <span>오늘 근무하는 인력</span>
                      <span>총 7명</span>
                    </div>
                    <div className="map-mock__bottom-body">
                      <div className="map-mock__avatar">👷</div>
                      <div className="map-mock__person">
                        <div className="map-mock__person-name">김철수, 33세</div>
                        <div className="map-mock__person-role">
                          담당업무 · 미장 조공
                        </div>
                      </div>
                      <div className="map-mock__eta">
                        <span className="map-mock__eta-status">출근 중</span>
                        <div className="map-mock__eta-time">10분 후</div>
                        <div className="map-mock__eta-label">도착예정</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" id="trust">
        <div className="container">
          <div className="trust__head fade-up">
            <span className="eyebrow">TRUST SYSTEM</span>
            <h2>
              믿고 쓸 수 있어야
              <br />
              플랫폼입니다.
            </h2>
            <p>
              익명의 일용직 시장에 신뢰 인프라를 만듭니다. 세 개의 검증 시스템이
              모든 매칭 뒤에서 작동합니다.
            </p>
          </div>
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
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
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__head fade-up">
            <span className="eyebrow">FAQ</span>
            <h2>자주 묻는 질문</h2>
          </div>
          <div className="faq__list">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItemRow
                key={item.q}
                item={item}
                isOpen={openFaq === i}
                onToggle={() =>
                  setOpenFaq((prev) => (prev === i ? null : i))
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" id="cta">
        <div className="container">
          <div className="final-cta__card fade-up">
            <div className="final-cta__inner">
              <div className="final-cta__shield">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
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
              <div className="final-cta__store">
                <a href="#" className="store-badge" aria-label="App Store 다운로드">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="store-badge__text">
                    <span className="store-badge__small">Download on the</span>
                    <span className="store-badge__large">App Store</span>
                  </span>
                </a>
                <a href="#" className="store-badge" aria-label="Google Play 다운로드">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.808 1.626L15.146 12l2.552-2.492zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
                  </svg>
                  <span className="store-badge__text">
                    <span className="store-badge__small">GET IT ON</span>
                    <span className="store-badge__large">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
