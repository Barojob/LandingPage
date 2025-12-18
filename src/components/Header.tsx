import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      {/* 1. 컨테이너 폭을 max-w-[1100px]로 제한하여 너무 양끝으로 벌어지지 않게 조절 */}
      <nav className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-[70px]">
          {/* 회사 로고/이름 */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="text-[20px] font-bold text-[#333d4b] tracking-tight">
              인력특공대
            </h1>
          </div>

          {/* 2. 네비게이션 메뉴 - flex에는 space-x가 더 명확 */}
          <div className="block">
            <div className="flex items-center space-x-12">
              <a
                href="#company"
                className="text-[#4e5968] no-underline hover:text-[#191f28] hover:bg-[#f2f4f6] px-4 py-2 rounded-[8px] text-[15px] font-medium transition-all duration-200"
              >
                회사소개
              </a>
              <a
                href="#support"
                className="text-[#4e5968] no-underline hover:text-[#191f28] hover:bg-[#f2f4f6] px-4 py-2 rounded-[8px] text-[15px] font-medium transition-all duration-200"
              >
                고객센터
              </a>
              <a
                href="#faq"
                className="text-[#4e5968] no-underline hover:text-[#191f28] hover:bg-[#f2f4f6] px-4 py-2 rounded-[8px] text-[15px] font-medium transition-all duration-200"
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
