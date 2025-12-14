import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          환영합니다
          <span className="block text-blue-600">당신의 비즈니스를</span>
          <span className="block">성공으로 이끌어 드립니다</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          혁신적인 솔루션으로 당신의 비즈니스를 한 단계 더 높은 곳으로 도약시켜
          드립니다. 함께 미래를 만들어 가요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            시작하기
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-lg border border-gray-300 transition-colors duration-200 shadow-lg hover:shadow-xl">
            자세히 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
