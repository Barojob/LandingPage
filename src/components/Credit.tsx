import React from 'react';

const Credit: React.FC = () => {
  return (
    <section id="credit" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            금융 생활의 첫 걸음, 신용점수를 미리 무료로 관리하세요
          </h2>
        </div>

        {/* 주요 특징들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* 신용점수 확인 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">내 신용점수</h3>
              <p className="text-gray-600 text-lg mb-4">
                언제 어디서든, 원할 때 간편하게 신용점수를 확인할 수 있어요.
              </p>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">850</div>
                <div className="text-sm text-blue-700">KCB 신용점수</div>
              </div>
            </div>
          </div>

          {/* 신용점수 올리기 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">신용점수 올리기</h3>
              <p className="text-gray-600 text-lg mb-4">
                통신비, 일반 납부내역 등의 서류를 간편하게 제출해 신용점수를 올릴 수 있어요.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  통신비 납부내역
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  건강보험 납부내역
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  국민연금 납부내역
                </div>
              </div>
            </div>
          </div>

          {/* 신용관리 알림 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">신용관리 알림</h3>
              <p className="text-gray-600 text-lg mb-4">
                신용점수에 변동이 생기면 바로 알려드려요. 나의 신용점수가 바뀔 때마다 확인하세요.
              </p>
              <div className="bg-orange-50 rounded-xl p-4">
                <div className="text-sm text-orange-700 font-medium">실시간 알림</div>
                <div className="text-xs text-orange-600 mt-1">변동 시 즉시 알림</div>
              </div>
            </div>
          </div>

          {/* 신용관리 팁 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">신용관리 팁</h3>
              <p className="text-gray-600 text-lg mb-4">
                신용점수 관리가 막막하다면? 전문가들의 팁을 확인하세요.
              </p>
              <div className="space-y-2">
                <div className="bg-purple-50 rounded-lg p-3 text-left">
                  <div className="text-sm font-medium text-purple-900">💡 카드값은 제때</div>
                  <div className="text-xs text-purple-700">연체는 신용점수의 최대 적</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-left">
                  <div className="text-sm font-medium text-purple-900">📱 조회는 최소화</div>
                  <div className="text-xs text-purple-700">불필요한 조회는 점수 하락</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            신용점수 확인하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Credit;
