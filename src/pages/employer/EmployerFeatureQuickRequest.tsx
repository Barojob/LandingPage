import { PhoneMockup } from "../../components/PhoneMockup";

export function EmployerFeatureQuickRequest() {
  return (
    <div className="feature-block fade-up">
      <div className="feature-block__copy">
        <span className="feature-block__num">01</span>
        <h3 className="feature-block__title">
          필요한 인력,
          <br />
          <em>몇 번의 터치</em>로 요청 완료!
        </h3>
        <p className="feature-block__desc">
          복잡한 양식 작성 없이 필요한 조건만 선택하면 됩니다. 사무실에서든
          현장에서든, 이젠 핸드폰 하나로 간편하게 인력 요청을 마칠 수 있어요.
        </p>
        <ul className="feature-block__bullets">
          <li>일정 지정 (단일/연속/반복)</li>
          <li>업무 카테고리 선택 (보통 인부 / 기능공)</li>
          <li>세부 옵션 (평지·엘베, 보양, 자재정리 등)</li>
          <li>준비물·인원·시간까지 한 화면에서</li>
        </ul>
      </div>
      <div className="feature-block__media">
        <PhoneMockup
          src="/images/06-employer-request.png"
          alt="인력 요청 화면"
        />
      </div>
    </div>
  );
}
