import React from 'react';

const Business: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            사업도 우리 서비스와 함께
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            사업을 시작하셨나요? 사업의 시작부터 관리까지 이제 우리 서비스와 함께 하세요.
          </p>
          <div className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
            사업자 전용 서비스
          </div>
        </div>

        {/* 주요 서비스들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* 토스결제 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">결제 서비스</h3>
              <p className="text-gray-600 text-lg mb-4">
                합리적인 수수료, 간편한 결제 경험으로 비용은 절감하고 매출은 늘리세요.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-sm text-gray-500">수수료</div>
                <div className="text-lg font-bold text-blue-600">최저 1.5%</div>
              </div>
            </div>
          </div>

          {/* 내 매출 장부 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">매출 장부</h3>
              <p className="text-gray-600 text-lg mb-4">
                내 매출 장부 따로 관리할 필요 없어요. 총 매출, 총 입금, 총 지출을 보기 쉽게 알려드려요.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-sm text-gray-500">실시간 현황</div>
                <div className="text-lg font-bold text-green-600">한눈에 확인</div>
              </div>
            </div>
          </div>

          {/* 온라인 비즈니스 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">온라인 결제</h3>
              <p className="text-gray-600 text-lg mb-4">
                시작하기 어려웠던 온라인 비즈니스, 간편한 온라인 결제 시스템으로 시작해보세요.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-sm text-gray-500">시작하기</div>
                <div className="text-lg font-bold text-purple-600">무료</div>
              </div>
            </div>
          </div>

          {/* 오프라인 매장 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">오프라인 매장</h3>
              <p className="text-gray-600 text-lg mb-4">
                포스·주문·결제 시스템까지 오프라인 매장을 위한 모든 것이 준비되어 있어요.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-sm text-gray-500">통합 솔루션</div>
                <div className="text-lg font-bold text-orange-600">올인원</div>
              </div>
            </div>
          </div>
        </div>

        {/* 사업자 혜택 */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">사업자를 위한 특별 혜택</h3>
            <p className="text-xl text-gray-600">사업의 성공을 위한 다양한 혜택과 지원</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">저렴한 수수료</h4>
              <p className="text-gray-600">업계 최저 수준의 결제 수수료로 비용 절감</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">빠른 정산</h4>
              <p className="text-gray-600">최대 2영업일 이내 빠른 정산으로 자금 운용 용이</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">전문 지원</h4>
              <p className="text-gray-600">전담 매니저가 사업 성장에 필요한 모든 지원 제공</p>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            사업 서비스 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Business;
