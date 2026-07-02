 import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppBanner from "./components/AppBanner/AppBanner";
import Reviews from "./components/Reviews/Reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";




const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>
     <Home></Home>
     <Services></Services>
     <Banner></Banner>
     <AppBanner></AppBanner>
     <Reviews></Reviews>
     <Footer></Footer>
     
    </div>
  );
};

export default App;