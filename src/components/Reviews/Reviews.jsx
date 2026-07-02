import React, { useEffect, useRef, useState } from "react";
import OriginalSlider from "react-slick";

const Slider = OriginalSlider.default || OriginalSlider;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review1 from "../../assets/review1.jpg";
import Review2 from "../../assets/review2.jpg";
import Review3 from "../../assets/review3.jpg";
import Review4 from "../../assets/review4.jpg";
import Review5 from "../../assets/review5.jpg";
import Review6 from "../../assets/review6.jpg";
import Review7 from "../../assets/review7.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "James Carter",
    text: "Really good coffee and peaceful environment. I come here often to relax and work.",
    img: Review1,
  },
  {
    id: 2,
    name: "Daniel Wilson",
    text: "The espresso is strong and perfect. Staff is polite and service is quick.",
    img: Review2,
  },
  {
    id: 3,
    name: "Michael Brown",
    text: "Great place to hang out with friends. Coffee quality is consistently good.",
    img: Review3,
  },
  {
    id: 4,
    name: "Liam Anderson",
    text: "Affordable and high-quality coffee. One of the best cafés in town.",
    img: Review4,
  },
  {
    id: 5,
    name: "Emily Johnson",
    text: "Such a cozy café. I usually come here in the evenings to study.",
    img: Review5,
  },
  {
    id: 6,
    name: "Olivia Davis",
    text: "Their cold coffee is my favorite. Perfect balance of sweetness and taste.",
    img: Review6,
  },
  {
    id: 7,
    name: "Sophie Williams",
    text: "I really love their latte. It’s smooth, creamy, and always fresh.",
    img: Review7,
  },
];

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reviewsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div ref={reviewsRef} className="py-10 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div
          className={`text-center mt-1 mb-4 transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <h1 className="text-7xl font-bold shadows-into-light-regular text-gray-600">
            What Our Customers Say
          </h1>
        </div>

        {/* SLIDER WRAPPER */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-[300ms] ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Slider {...settings}>
            {TestimonialData.map((data, index) => (
              <div
                key={data.id}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`px-3 py-4 transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0 blur-0"
                      : "opacity-0 translate-y-10 blur-sm"
                  }
                `}
              >
                <div className="flex flex-col gap-2 shadow-lg py-5 px-6 mx-4 rounded-xl bg-primary/10 relative h-full min-h-[220px]">

                  {/* IMAGE */}
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-xs text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80 font-cursive">
                      {data.name}
                    </h1>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default Reviews;