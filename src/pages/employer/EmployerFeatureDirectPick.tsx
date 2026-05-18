import { JobPickPopout } from "../../components/JobPickPopout";

export function EmployerFeatureDirectPick() {
  return (
    <div className="feature-block fade-up">
      <div className="feature-block__copy">
        <span className="feature-block__num">02</span>
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
          <strong>만약 근로자가 제안을 거절할 경우</strong> 자동으로 매칭 방법이
          스마트 매칭으로 변경되니, 배정받지 못 할 걱정은 안 하셔도 됩니다.
        </div>
      </div>
      <div className="feature-block__media">
        <JobPickPopout
          backgroundSrc="/images/employerJobPick.png"
          pointSrc="/images/employerJobPickPoint.png"
          backgroundAlt="직접 매칭 인력 리스트 화면"
          pointTopPct={24}
          pointLeftPct={8}
          pointWidthPct={85}
        />
      </div>
    </div>
  );
}
