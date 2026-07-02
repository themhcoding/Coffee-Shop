import React from "react";
import logo from "../../assets/logo.png";
import { FaCoffee } from "react-icons/fa";

const Menus = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "#about" },
];

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-secondary to-primary text-white" data-aos="fade-down"
  data-aos-once="true">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-3xl font-bold tracking-wider"
          >
            <img src={logo} alt="LOGO" className="w-12" />
            <span>Prime Coffee</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-4" data-aos="fade-down"
data-aos-once="true"
data-aos-delay="300" >
            <ul className="hidden sm:flex items-center gap-6">
              {Menus.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="text-lg hover:opacity-80"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="bg-orange-900 px-5 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition">
              Grab Yours <FaCoffee />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;