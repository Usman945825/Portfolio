import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="flex flex-col container mx-auto md:flex-row md:space-x-10 items-center overflow-hidden">
        <div className="w-[60%] w-full md:w-full sm:w-full text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-left">Get in Touch</h2>
          <p className="text-lg mb-8 text-left">
            Want To Discuss A Project? Let's Work Together On Your Project. <br />
            Connect With Me On Social Media:
          </p>
          <div className="flex flex-row justify-start mt-8 text-[40px] ">
            <a
              href="https://github.com/Qirab14"
              className="mr-4 hover:text-gray-700"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hafiz-qirab-jaffar-61b248242/"
              className="mr-4 hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a href="/" className="mr-4 hover:text-blue-700">
              <FaFacebook />
            </a>
            <a href="/" className="mr-4 hover:text-blue-700">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div
          className="w-[40%] flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 max-md:mt-4 max-sm:mt-4" id="Footer"
        >
          <a
            href="mailto:qirab14@gmail.com"
            className="flex items-center
            bg-gray-800 hover:bg-gray-700 h-[150px] text-white font-bold py-3 px-8 text-center
             focus:outline-none focus:shadow-outline
            shadow-blue-500 shadow-lg hover:shadow-none
            "
          >
            <div
              className="flex flex-col items-center
            "
            >
              <FaEnvelope />
              qirab14@gmail.com
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
