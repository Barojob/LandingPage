import React from 'react';

const DailyFinance: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            금융을 넘어 일상을 더 편리하게
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            세금 납부, 등본 발급까지 놓치기 쉬운 일들을 한 곳에서 해결하세요
          </p>
        </div>

        {/* 주요 서비스들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* 세금 납부 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">세금 납부</h3>
              <p className="text-gray-600 mb-4">
                놓치기 쉬운 세금 납부 및 환급을 간편하게 신청하고 받아보세요.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• 종합소득세</div>
                <div>• 지방세</div>
                <div>• 4대보험</div>
              </div>
            </div>
          </div>

          {/* 등본 발급 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">등본 발급</h3>
              <p className="text-gray-600 mb-4">
                주민등록 등초본을 포함한 각종 증명서를 간편하게 발급받으세요.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• 주민등록등본</div>
                <div>• 건축물대장</div>
                <div>• 토지대장</div>
              </div>
            </div>
          </div>

          {/* 보험 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">보험</h3>
              <p className="text-gray-600 mb-4">
                보험료 조회부터 병원비 청구까지. 내 보험을 한눈에 관리하세요.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• 실손보험 청구</div>
                <div>• 보험금 조회</div>
                <div>• 갱신 알림</div>
              </div>
            </div>
          </div>

          {/* 부동산 · 자동차 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">부동산 · 자동차</h3>
              <p className="text-gray-600 mb-4">
                시세 조회부터 관리비 납부까지. 집과 차 관리를 한 곳에서.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• 아파트 시세</div>
                <div>• 관리비 납부</div>
                <div>• 자동차 보험</div>
              </div>
            </div>
          </div>
        </div>

        {/* 결제 섹션 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">결제는 간편하게, 할인과 적립은 두둑히</h3>
            <p className="text-xl text-gray-600">
              온라인과 오프라인 모두 국내는 물론, 해외에서도 간편하게 결제해요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">간편한 결제</h4>
                  <p className="text-gray-600 text-sm">터치 한 번으로 빠른 결제</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">할인 혜택</h4>
                  <p className="text-gray-600 text-sm">쿠폰과 포인트로 추가 할인</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">포인트 적립</h4>
                  <p className="text-gray-600 text-sm">결제할 때마다 포인트가 쌓여요</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="text-6xl mb-4">💳</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">토스페이</h4>
                <p className="text-gray-600 mb-6">온라인과 오프라인 어디서나</p>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">결제 혜택</div>
                  <div className="text-2xl font-bold text-green-600">최대 10% 적립</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            모든 서비스 둘러보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyFinance;
