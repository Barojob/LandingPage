import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/android/.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.barojob.app&hl=ko";
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      window.location.href =
        "https://apps.apple.com/kr/app/%EC%9D%B8%EB%A0%A5%ED%8A%B9%EA%B3%B5%EB%8C%80/id6766862592";
    } else {
      window.location.href = "/";
    }
  }, []);

  return <div>스토어로 이동 중입니다</div>;
};

export default Download;
