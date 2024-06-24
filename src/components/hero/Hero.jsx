// import { React, useEffect, useRef } from "react";
import { React } from "react";
import developer from "../../Images/developer.jpg";
import videoFile from "../../Images/codingvideo.mp4";


const Hero = () => {
  return (
    <div className="bg-gray-100 p-10" id="Home">
<div className="flex flex-col container mx-auto md:flex-row md:space-x-10 items-center">
  <div className="flex-grow w-full md:w-full sm:w-full text-center md:text-left">
    <h1 className="text-[30px] font-bold mb-5 font-montserrat ">
      Hello <br />
      <span className="auto-type text-[38px] text-[#800080] ">
        I am Hafiz Qirab Jaffar
      </span>
    </h1>
    <p className="text-gray-700 leading-loose font-montserrat text-[17px] font-weight-500">
      MERN Stack Developer crafting beautiful, scalable web applications
      for your business needs. Expertise in MongoDB, Express, React &
      Node.js. Let's discuss your project!
    </p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
      Contact me
    </button>
  </div>
  <div className="flex lg:justify-center items-center w-full md:w-full sm:w-full md:justify-start mt-10 md:mt-0 sm:mt-10">
  {/* <img 
    src={developer} 
    alt="About Me" 
    className="max-w-full h-auto md:max-w-md sm:max-w-sm"
    style={{
      objectFit: 'cover',
      width: 450,
      height: 350,
      border: 'olid 1px #CCC'
    }}
  /> */}
  <video autoplay loop muted controls>
        <source src={videoFile} type="video/webm" />
</video>
</div>
</div>
    </div>
  );
};

export default Hero;
