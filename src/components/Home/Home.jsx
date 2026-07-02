import React, { useEffect, useRef, useState } from "react";
import hero from "../../assets/coffee2.avif";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Resetting allows it to re-animate if they navigate away and click "Home" again
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      id="home" 
      ref={homeRef}
      className="container py-12 sm:py-0 min-h-137.5 sm:min-h-150 bg-brandDark flex justify-center items-center text-center text-white overflow-hidden scroll-mt-24"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-0">
          
          {/* Text Section */}
          <div className="flex flex-col items-center justify-center">
            {/* Main Heading Stagger 1 */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl transform transition-all duration-1000 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              Crafted for true{" "}
              <span
                className={`text-primary font-semibold inline-block transform transition-all duration-1000 delay-300
                  ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                style={{ fontFamily: "'Shadows Into Light', cursive" }}
              >
                Coffee
              </span>{" "}
              lovers
            </h1>

            {/* Button Stagger 2 */}
            <div 
              className={`mt-16 h-12 transform transition-all duration-1000 delay-500
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <button className="bg-linear-to-r from-primary to-secondary border-2 border-primary rounded-full px-6 py-2 text-white transition-all duration-100 hover:scale-105 hover:shadow-xl active:scale-95 inline-block transform">
                MH Coding
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[400px] flex justify-center items-center">
            {/* Image Wrapper Stagger 3 (Zoom In) */}
            <div
              className={`absolute top-[-20px] left-1/2 -translate-x-1/2 w-100 h-100 rounded-full overflow-hidden border-4 border-white transform transition-all duration-1000 delay-400
                ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
            >
              <img
                src={hero}
                alt="Coffee"
                className="w-full h-full object-cover sm:scale-110 mx-auto object-center animate-spin"
                style={{ animationDuration: "40s" }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;