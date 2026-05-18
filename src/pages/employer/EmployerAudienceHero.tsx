export function EmployerAudienceHero() {
  return (
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
  );
}
