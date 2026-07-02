import React, { useEffect, useRef, useState } from "react"; // 👈 1. Added hooks
import AppStoreImg from "../../assets/appstore.png";
import PlayStoreImg from "../../assets/googleplay.png";
import BgPng from "../../assets/bg2.jpg";

const AppBanner = () => {
  // 👈 2. Added visibility state and a DOM ref
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger only once
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={bannerRef} // 👈 3. Attached ref to parent
      className="w-full h-[350px] bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${BgPng})` }}
    >
      <div className="w-full h-full bg-black/40 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl text-white">
            
            {/* 👈 4. Text slides smoothly in from the left */}
            <h1
  className={`text-3xl sm:text-4xl font-bold leading-snug mb-4 transform transition-all duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
  }`}
>
  PrimeCoffee is available
  <br className="sm:hidden" />
  <span className="hidden sm:inline"> for</span>
  <span className="sm:hidden"> for Android and iOS</span>
  <br className="hidden sm:block" />
  <span className="hidden sm:inline">Android and iOS</span>
</h1>

            <div className="flex gap-4">
              {/* 👈 5. App Store Button pops up with a short delay */}
              <img
                src={AppStoreImg}
                alt="App Store"
                className={`h-14 w-40 object-contain cursor-pointer transform transition-all duration-700 ease-out delay-[400ms] hover:scale-105 active:scale-95 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"
                }`}
              />
              {/* 👈 6. Play Store Button pops up with a slightly longer delay */}
              <img
                src={PlayStoreImg}
                alt="Play Store"
                className={`h-14 w-40 object-contain cursor-pointer transform transition-all duration-700 ease-out delay-[600ms] hover:scale-105 active:scale-95 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"
                }`}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;