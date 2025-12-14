import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">YourBrand</h1>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                홈
              </a>
              <a href="#transfer" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                송금
              </a>
              <a href="#loan" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                대출
              </a>
              <a href="#credit" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                신용
              </a>
              <a href="#investment" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                투자
              </a>
              <a href="#business" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                사업
              </a>
            </div>
          </div>

          {/* 로그인/회원가입 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              로그인
            </button>
            <button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              회원가입
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                홈
              </a>
              <a href="#transfer" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                송금
              </a>
              <a href="#loan" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                대출
              </a>
              <a href="#credit" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                신용
              </a>
              <a href="#investment" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                투자
              </a>
              <a href="#business" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                사업
              </a>
              <div className="border-t border-gray-100 pt-3 mt-3">
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                  로그인
                </button>
                <button className="block w-full mt-1 px-3 py-2 text-base font-medium bg-black text-white rounded-md hover:bg-gray-800">
                  회원가입
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
