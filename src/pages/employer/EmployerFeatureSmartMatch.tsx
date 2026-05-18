import { ShieldWithCheckSvg } from "../../components/icons/ShieldIcons";

export function EmployerFeatureSmartMatch() {
  return (
    <div className="feature-block fade-up">
      <div className="feature-block__copy">
        <span className="feature-block__num">01</span>
        <h3 className="feature-block__title">
          좋은 인력, <em>알고리즘</em>이
          <br />
          알아서 찾아드려요
        </h3>
        <p className="feature-block__desc">
          업무를 고르시고 나면 매칭 방법을 선택하실 수 있어요.{" "}
          <strong>스마트 매칭</strong>은 현장 위치, 인력의 경력과 평점 등을
          종합해서 우리 현장에 가장 잘 맞는 인력을 자동으로 찾아드립니다.
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
            <ShieldWithCheckSvg strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
