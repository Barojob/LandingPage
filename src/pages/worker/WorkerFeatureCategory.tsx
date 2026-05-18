import { JobPickPopout } from "../../components/JobPickPopout";

export function WorkerFeatureCategory() {
  return (
    <div className="feature-block fade-up">
      <div className="feature-block__copy">
        <span className="feature-block__num">02</span>
        <h3 className="feature-block__title">
          원하는 업무만
          <br />
          <em>쏙쏙</em> 골라 선택해요
        </h3>
        <p className="feature-block__desc">
          보통 인부, 신호수, 철거… 내가 하고 싶고, 잘하는 업무를 등록해놓으면
          관련 현장 알림이 와요.{" "}
          <strong>하기 싫은 일은 미리 체크에서 빼놓을 수 있습니다.</strong>
        </p>
        <ul className="feature-block__bullets">
          <li>보통 인부 / 기능공 카테고리 분리</li>
          <li>일반·조공·하스리·서비스 등 30+ 세부 업무</li>
          <li>여러 개 동시 선택 가능</li>
          <li>등록한 업무에서만 알림이 옵니다</li>
        </ul>
      </div>
      <div className="feature-block__media">
        <JobPickPopout
          backgroundSrc="/images/workerJobPick.png"
          pointSrc="/images/workerJobPickPoint.png"
          backgroundAlt="업무 카테고리 선택 화면"
          pointTopPct={30}
          pointLeftPct={9}
          pointWidthPct={90}
        />
      </div>
    </div>
  );
}
