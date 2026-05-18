export function LandingEmployerSection() {
  return (
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
  );
}
