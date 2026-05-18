import { StackedPhoneNotifications } from "../../components/StackedPhoneNotifications";

export function WorkerFeatureJobAlert() {
  return (
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
        <StackedPhoneNotifications />
      </div>
    </div>
  );
}
