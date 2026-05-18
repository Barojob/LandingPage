export function EmployerFeatureLiveMap() {
  return (
    <div className="feature-block fade-up">
      <div className="feature-block__copy">
        <span className="feature-block__num">03</span>
        <h3 className="feature-block__title">
          현장 도착 현황을
          <br />
          <em>실시간</em>으로 체크해요
        </h3>
        <p className="feature-block__desc">
          오늘 어떤 분이 어디쯤 오고 있는지 한 눈에 확인할 수 있어요.{" "}
          <strong>
            &quot;몇 시쯤 도착하시나요?&quot;라고 일일이 전화하실 필요 없습니다.
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
        <img
          className="employer-live-map__img"
          src="/images/EmployerPosition.png"
          alt="실시간 위치·도착 현황 화면"
          draggable={false}
        />
      </div>
    </div>
  );
}
