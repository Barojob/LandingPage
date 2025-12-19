import React from "react";

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f9fafb] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-[32px] md:text-[48px] font-bold text-[#333d4b] mb-16 tracking-tight">
          &lt;인력특공대란?&gt;
        </h2>

        {/* 2. 첫 번째 문단: 행간(leading) 조절 및 한 줄 유지 */}
        <div className="flex flex-col gap-2 mb-16">
          <p className="text-[18px] md:text-[24px] font-semibold text-[#333d4b] leading-[1.6]">
            인력특공대는 실제 현장에서 쌓인
          </p>
          <p className="text-[18px] md:text-[24px] font-semibold text-[#333d4b] leading-[1.6]">
            근로자 경력, 지역, 장비 사용 정보, 리뷰 데이터를 분석해
          </p>
          {/* whitespace-nowrap을 사용하여 강제로 한 줄 유지 */}
          <p className="text-[18px] md:text-[24px] font-semibold text-[#333d4b] leading-[1.6] whitespace-nowrap">
            건설사와 근로자를 가장 적합하게 연결하는 데이터 기반 매칭
            플랫폼입니다.
          </p>
        </div>

        {/* 3. 두 번째 문단: 이미지 속 강조(밑줄) 효과 재현 */}
        <div className="flex flex-col gap-2">
          <p className="text-[18px] md:text-[24px] font-semibold text-[#333d4b] leading-[1.6] whitespace-nowrap">
            스마트매칭을 통해 자동 추천이 이루어지고, 필요 시 직접매칭 으로
            인력을 선택할 수 있습니다.
          </p>
          <p className="text-[18px] md:text-[24px] font-semibold text-[#333d4b] leading-[1.6] whitespace-nowrap">
            이 과정에서 축적된 매칭 점수와 리뷰 정보를 통해 근로자의 신뢰도와
            숙련도를 지속적으로 관리합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
