import React, { useEffect, useRef, useState } from "react";
import img2 from "../../assets/coffee4.png";

const ServicesData = [
  {
    id: 1,
    img: img2,
    name: "Midnight Velvet Espresso",
    description:
      "A deep, bold espresso brewed from dark roasted Arabica beans, delivering a smooth cocoa finish with a hint of smoky richness. Perfect for those who crave intensity wrapped in elegance.",
  },
  {
    id: 2,
    img: img2,
    name: "Caramel Horizon Latte",
    description:
      "A silky blend of fresh espresso and creamy milk, layered with golden caramel drizzle. Every sip feels like a warm sunset, sweet, smooth, and irresistibly comforting.",
  },
  {
    id: 3,
    img: img2,
    name: "Arctic Vanilla Brew",
    description:
      "A refreshing cold brew infused with subtle vanilla essence and a clean, crisp finish. Light, smooth, and energizing, crafted for a calm yet focused mind.",
  },
];

// Tailwind transition delays
const delayClasses = ["delay-[200ms]", "delay-[400ms]", "delay-[600ms]"];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when at least 10% of the section enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Optional: Reset animation if they scroll away completely, 
          // allowing it to re-animate when clicked from the Navbar again.
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it fully rolls into view
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="services"
      ref={servicesRef}
      className="py-10 px-6 sm:px-16 overflow-hidden scroll-mt-24"
    >
      <div
        className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
      >
        <h1 className="text-7xl font-bold shadows-into-light-regular text-gray-700">
          Best Coffee for you
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {ServicesData.map((data, index) => (
          <div
            key={data.id}
            className={`w-80 h-[320px] bg-white rounded-2xl shadow-lg flex flex-col items-center p-5 cursor-pointer group 
              transition-all duration-700 ease-out 
              ${delayClasses[index] || ""} 
              hover:scale-105 hover:bg-primary  
              will-change-transform
              ${
                isVisible
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-24 blur-sm"
              }
            `}
          >
            {/* Image */}
            <img
              src={data.img}
              alt={data.name}
              className="w-32 h-32 mx-auto mb-4 object-contain transition-all duration-300 group-hover:scale-125 group-hover:rotate-6"
            />

            {/* Name */}
            <h2 className="text-lg font-bold text-center mb-2 transition-colors duration-300 group-hover:text-white">
              {data.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-white">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;