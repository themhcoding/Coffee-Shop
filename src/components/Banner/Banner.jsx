import React, { useEffect, useRef, useState } from "react";

import BannerImg from "../../assets/coffee5.png";
import BgTexture from "../../assets/bg.jpg";
import { GiCoffeeCup } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const bannerRef = useRef(null);

  // ✅ Scroll zoom effect
  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrolledIntoView = (windowHeight - rect.top) / windowHeight;
        const newScale =
          1 + Math.min(Math.max(scrolledIntoView * 0.3, 0), 0.3);
        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Intersection Observer (REPEATABLE)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Re-trigger animation on navbar/footer click
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        setIsVisible(false);

        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div
      id="about"
      ref={bannerRef}
      style={bgImage}
      className="py-16 text-white overflow-hidden scroll-mt-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-center w-full">
          
          {/* IMAGE SECTION */}
          <div className="flex justify-end">
            <div
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? "opacity-100" : "opacity-0 scale-50"
              }`}
            >
              <img
                src={BannerImg}
                alt="Coffee Banner"
                style={{ transform: `scale(${scale})` }}
                className="w-[360px] max-w-[380px] animate-slow-spin drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
              />
            </div>
          </div>

          {/* TEXT SECTION */}
          <div>
            <h1
              className={`text-3xl sm:text-4xl mb-4 text-black font-logo leading-tight animate-pulse transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <>
  Brewed to Perfection,
  <br className="block sm:hidden" />
  <span className="hidden sm:inline"> </span>
  Served with Passion
</>
            </h1>

            <p
              className={`text-gray-800 font-heading transform transition-all duration-1000 ease-out delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Discover handcrafted coffee made from premium beans, roasted to
              perfection for a bold aroma and unforgettable taste. Every cup is
              designed to energize your day.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-6">
              
              {/* LEFT FEATURES */}
              <div
                className={`flex flex-col gap-6 transform transition-all duration-700 ease-out delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <GiCoffeeCup className="h-12 w-12 p-3 rounded-full bg-amber-500 text-white" />
                  <span className="text-black font-medium">
                    Rich Aroma Coffee
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaLeaf className="h-12 w-12 p-3 rounded-full bg-green-500 text-white" />
                  <span className="text-black font-medium">
                    100% Organic Beans
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MdDeliveryDining className="h-12 w-12 p-3 rounded-full bg-red-500 text-white" />
                  <span className="text-black font-medium">
                    Fast Home Delivery
                  </span>
                </div>
              </div>

              {/* RIGHT TEXT */}
              <div
                className={`border-l-4 border-primary/50 pl-6 space-y-3 ml-[-20px] md:ml-[-40px] lg:ml-[-80px] transform transition-all duration-700 ease-out delay-200 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <h1 className="text-4xl font-bold text-gray-500 shadows-into-light-regular">
                  Tea Lovers
                </h1>
                <p className="text-sm text-gray-500">
                  We believe tea is more than just a drink. It’s a moment of
                  calm in a busy world. Every cup is crafted to slow time down.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;