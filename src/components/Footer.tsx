import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* 회사 소개 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">YourBrand</h3>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              혁신적인 솔루션으로 당신의 비즈니스를 성공으로 이끌어 드립니다.
              함께 미래를 만들어 가요.
            </p>

            {/* 소셜 링크 */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.012.017z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">홈</a></li>
              <li><a href="#transfer" className="text-gray-400 hover:text-white transition-colors">송금</a></li>
              <li><a href="#loan" className="text-gray-400 hover:text-white transition-colors">대출</a></li>
              <li><a href="#credit" className="text-gray-400 hover:text-white transition-colors">신용</a></li>
              <li><a href="#investment" className="text-gray-400 hover:text-white transition-colors">투자</a></li>
              <li><a href="#business" className="text-gray-400 hover:text-white transition-colors">사업</a></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">고객지원</h4>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-400">전화</div>
                <div className="font-medium">1599-XXXX</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">이메일</div>
                <div className="font-medium">support@yourbrand.com</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">운영시간</div>
                <div className="font-medium">24시간 연중무휴</div>
              </div>
            </div>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="text-sm text-gray-400">
              <p className="mb-2">
                <span className="font-medium text-white">주식회사 YourBrand</span>
                사업자 등록번호: 123-45-67890
              </p>
              <p>대표: 홍길동 | 호스팅 서비스: 주식회사 YourBrand</p>
              <p>06236 서울특별시 강남구 테헤란로 142, 4층</p>
            </div>

            <div className="md:text-right">
              <div className="flex flex-wrap gap-4 md:justify-end text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">이용약관</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">개인정보 처리방침</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">고객보호센터</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">채용</a>
              </div>
            </div>
          </div>

          {/* 저작권 */}
          <div className="text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
            <p>&copy; 2024 YourBrand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
