import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 회사 로고/이름 */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">인력특공대</h1>
          </div>

          {/* 네비게이션 메뉴 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#company"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                회사소개
              </a>
              <a
                href="#support"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                고객센터
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                자주 묻는 질문
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
