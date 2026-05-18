import { PhoneMockup } from "../../components/PhoneMockup";

export function WorkerFeatureLocation() {
  return (
    <div className="feature-block fade-up">
      <div className="feature-block__copy">
        <span className="feature-block__num">01</span>
        <h3 className="feature-block__title">
          우리 동네 일자리를
          <br />
          <em>딱!</em> 골라드려요
        </h3>
        <p className="feature-block__desc">
          출퇴근 가능한 범위를 직접 설정할 수 있어요. 너무 먼 현장이나 가기
          힘든 곳이 아니라, <strong>우리 동네 일자리</strong>로 알림을 받을 수
          있습니다.
        </p>
        <ul className="feature-block__bullets">
          <li>지도에서 출퇴근 가능 범위 직접 설정</li>
          <li>&apos;가까운 동네 ↔ 먼 동네&apos; 슬라이더로 직관적 조정</li>
          <li>대중교통+도보 / 자차 이용 모드 선택</li>
          <li>설정한 범위 밖 일자리는 절대 매칭 안 됨</li>
        </ul>
      </div>
      <div className="feature-block__media">
        <PhoneMockup
          src="/images/03-worker-location.png"
          alt="출근 가능 범위 설정 화면"
        />
      </div>
    </div>
  );
}
