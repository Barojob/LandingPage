import React from 'react';

const Loan: React.FC = () => {
  return (
    <section id="loan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            여러 은행의 조건을 1분 만에 확인해보세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            한도는 높게, 금리는 낮게, 부담은 적게.
            앉은 자리에서 여러 은행의 한도와 금리를 비교하고 내게 꼭 맞는 대출을 찾아보세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full">신용대출</span>
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full">비상금대출</span>
            <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full">대환대출</span>
            <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full">주택담보대출</span>
          </div>
        </div>

        {/* 대출 특징들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">높은 한도</h3>
            <p className="text-gray-600">최대 한도로 필요한 금액을</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">낮은 금리</h3>
            <p className="text-gray-600">최저 금리로 부담 적게</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">빠른 승인</h3>
            <p className="text-gray-600">신청 즉시 결과 확인</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">안전 보장</h3>
            <p className="text-gray-600">개인정보 철저히 보호</p>
          </div>
        </div>

        {/* 대출 상품 예시 */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">대표 대출 상품</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">신용대출</h4>
              <p className="text-gray-600 mb-4">신용등급에 따른 최적의 조건</p>
              <div className="text-sm text-gray-500">
                <div>최대 1억원</div>
                <div>연 3.5% ~ 19.9%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">비상금대출</h4>
              <p className="text-gray-600 mb-4">급할 때 빠르게 필요한 금액</p>
              <div className="text-sm text-gray-500">
                <div>최대 300만원</div>
                <div>연 4.5% ~ 19.9%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">주택담보대출</h4>
              <p className="text-gray-600 mb-4">주택을 담보로 낮은 금리로</p>
              <div className="text-sm text-gray-500">
                <div>최대 10억원</div>
                <div>연 2.8% ~ 7.5%</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            대출 비교하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Loan;
