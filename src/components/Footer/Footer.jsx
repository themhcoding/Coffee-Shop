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
      <div className="bg-black/40 w-full min-h-[500px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* DETAILS */}
          <div className="ml-16 py-8 px-4">
            <a
              href="#"
              className="text-6xl text-white font-semibold tracking-widest sm:text-5xl md:text-6xl font-cursive"
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
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-2xl font-semibold sm:text-left mb-3 mt-5 text-white/100">
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

            <div className="py-8 px-4">
              <h1 className="text-2xl font-semibold sm:text-left mb-3 mt-5 text-white/100">
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

            <div className="py-8 px-4 col-span-2 sm:col-auto mt-5">
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
