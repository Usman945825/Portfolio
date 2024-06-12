import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="mainDiv bg-gray-100 py-[60px]" id="Footer">
      <div className="widthDiv flex flex-col container mx-auto md:flex-col lg:flex-row lg:space-x-10 items-center">
      <div className="lg:w-1/3 md:w-full sm:w-full text-center md:text-center">
          <ul>
            <li>
              <a href="/" className="font-montserrat text-[20px]">Home</a>
            </li>
            <li>
              <a href="/" className="font-montserrat text-[20px]">About</a>
            </li>
            <li>
              <a href="/" className="font-montserrat text-[20px]">Projects</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-2/3 flex flex-col justify-start align-start md:w-full text-left sm:w-full  md:text-left">
          <div className="projectDetail pb-[40px]">
            <h2 className="font-montserrat text-[28px]">Want To Discuss A Project?</h2>
            <h2 className="font-montserrat text-[28px] border-b border-#333-400">Let's Work Together On Your Project.</h2>
          </div>
          <h2 className="font-montserrat text-[28px]">Connect With Me On Social Media:</h2>
          <div className="icons flex flex-row gap-x-4 mt-[8px]">
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0072b1" className="hover:opacity-70" />
            <FontAwesomeIcon icon={faGithub} size="3x" color="#333" className="hover:opacity-70"/>
            <FontAwesomeIcon icon={faFacebook} size="3x" color="#4267B2" className="hover:opacity-70" />
            <FontAwesomeIcon icon={faInstagram} size="3x" color="#E1306C" className="hover:opacity-70"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
