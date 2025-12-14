import React from 'react';

const Investment: React.FC = () => {
  return (
    <section id="investment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            투자, 모두가 할 수 있도록
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            이해하기 쉬운 용어, 설명이 필요 없는 직관적인 화면 구성,
            송금처럼 쉬운 구매 경험 그리고 투자 판단에 도움을 주는 콘텐츠까지
          </p>
        </div>

        {/* 주요 특징들 */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* 왼쪽: 특징 설명 */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">이해하기 쉬운 용어</h3>
                <p className="text-gray-600">복잡한 투자 용어 대신 누구나 이해할 수 있는 쉬운 설명으로 안내해드려요.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">직관적인 화면 구성</h3>
                <p className="text-gray-600">설명이 필요 없는 깔끔하고 직관적인 디자인으로 쉽게 투자할 수 있어요.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">송금처럼 쉬운 구매 경험</h3>
                <p className="text-gray-600">복잡한 절차 없이 송금하듯 간편하게 투자 상품을 구매할 수 있어요.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">투자 판단에 도움을 주는 콘텐츠</h3>
                <p className="text-gray-600">전문가들의 분석과 다양한 콘텐츠로 현명한 투자 판단을 도와드려요.</p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 투자 상품 미리보기 */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 투자 상품</h3>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">주식</h4>
                    <p className="text-gray-600 text-sm">국내외 우량주 투자를</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-bold">+2.3%</div>
                    <div className="text-xs text-gray-500">오늘</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">삼성전자</span>
                  <span className="text-sm font-medium text-gray-900">₩72,000</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">펀드</h4>
                    <p className="text-gray-600 text-sm">전문가가 운용하는 투자 상품</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-bold">+1.8%</div>
                    <div className="text-xs text-gray-500">최근 1개월</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">TIGER 200</span>
                  <span className="text-sm font-medium text-gray-900">수익률 12.5%</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">예적금</h4>
                    <p className="text-gray-600 text-sm">안전한 예금 상품</p>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-bold">연 3.5%</div>
                    <div className="text-xs text-gray-500">기본금리</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">정기예금</span>
                  <span className="text-sm font-medium text-gray-900">최대 ₩50,000,000</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium">
                별도 앱 설치 없이 바로 투자
              </div>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            투자 시작하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Investment;
