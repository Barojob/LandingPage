export function WorkerFeatureMatchingScore() {
  return (
    <div className="feature-block fade-up">
      <div className="feature-block__copy">
        <span className="feature-block__num">03</span>
        <h3 className="feature-block__title">
          성실히 출근할수록
          <br />
          오르는 <em>매칭 점수</em>
        </h3>
        <p className="feature-block__desc">
          출근을 많이 하고 평점이 좋을수록 매칭 점수가 올라가요. 점수가 높으면
          건설사에게{" "}
          <strong>우선적으로 보이게 되어 매칭 확률이 더 높아집니다.</strong>
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
              <img
                src="/images/matching%20Score.png"
                alt="매칭 점수 96점"
                width={80}
                height={88}
                draggable={false}
              />
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
                <span className="worker-card-mock__activity-emoji">⏰</span>
                정시에
                <br />
                출근/퇴근 완료
              </div>
              <div className="worker-card-mock__activity">
                <span className="worker-card-mock__activity-emoji">👍</span>
                건설사로부터
                <br />
                좋은 평점 획득
              </div>
              <div className="worker-card-mock__activity">
                <span className="worker-card-mock__activity-emoji">📈</span>
                출근 횟수
                <br />
                늘리기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
