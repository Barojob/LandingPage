export function LandingWorkerSection() {
  return (
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
  );
}
