import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import FooterBg from "../../assets/footer.jpg";

const FooterLinks = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Contact", link: "#contact" },
  { title: "Blog", link: "#blog" },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="w-full mt-16">
      <div className="bg-black/40 w-full min-h-[500px] md:min-h-[500px] min-h-[850px]">
        <div className="container grid grid-cols-1 md:grid-cols-3 pt-16 pb-32 gap-y-4">
          {/* DETAILS */}
          <div className="ml-4 md:ml-16 py-8 px-4">
            <a
              href="#"
              className="text-4xl md:text-6xl text-white font-semibold tracking-widest font-cursive"
            >
              Prime Coffee
            </a>

            <p className="pt-4 text-2xl">
              Coffee that fuels your dreams, energy, and creativity every day.
            </p>

            <a
              href="#"
              target="_blank"
              className="mt-5 inline-block text-amber-100 bg-[#3d2517] py-2 px-4 text-sm rounded-full"
            >
              Visit Our Youtube
            </a>
          </div>

          {/* FOOTER LINKS */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 md:pl-10 px-4">
            <div className="pt-1 pb-4 px-4 md:py-8">
              <h1 className="text-2xl font-semibold sm:text-left mb-3  text-white/100">
                Footer Links
              </h1>

              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className=" text-xl text-gray-900 inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* QUICK LINKS */}

            <div className="pt-1 pb-4 px-4 md:py-8">
              <h1 className="text-2xl font-semibold sm:text-left mb-3  text-white/100">
                Quick Links
              </h1>

              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className=" text-xl text-gray-900 inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ADDRESS */}

            <div className="pt-2 px-4 col-span-2 sm:col-auto md:py-8">
              <h1 className="text-2xl font-semibold ssm:text-left mb-3 text-white">
                Address
              </h1>
              <div>
                <p className="text-xl">78 Mocha Road, Cappuccino City, Islamabad, Pakistan</p>
                <p className="text-xl">+92 7700 900123</p>
                {/* Social Links */}
                <div className="flex gap-3">
                  <a href="#">
                    <FaFacebook className=" text-3xl text-white inline-block hover:scale-105 duration-200"/>
                  </a>
                  <a href="#">
                    <FaYoutube className=" text-3xl text-white inline-block hover:scale-105 duration-200"/>
                  </a>
                  <a href="#">
                    <FaInstagram className=" text-3xl text-white inline-block hover:scale-105 duration-200"/>
                  </a>
                  <a href="#">
                    <FaLinkedin className=" text-3xl text-white inline-block hover:scale-105 duration-200"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
