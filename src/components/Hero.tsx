import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* 메인 타이틀 */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            내 모든 금융 내역을
            <br />
            <span className="text-blue-600">한눈에 조회하고</span>
            <br />
            한 곳에서 관리하세요
          </h1>

          {/* 서브 타이틀 */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
            <br />
            우리 서비스와 함께라면 당신의 일상이 새로워질 거예요.
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              지금 시작하기
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              앱 다운로드
            </button>
          </div>

          {/* 추가 정보 */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>무료 회원가입</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>안전한 금융 서비스</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>24시간 고객지원</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
