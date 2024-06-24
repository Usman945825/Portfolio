// import { React, useEffect, useRef } from "react";
import { React } from "react";
import developer from "../../Images/developer.jpg";
import videoFile from "../../Images/codingvideo.mp4";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="bg-black text-white p-10" id="Home">
<div className="flex flex-col container mx-auto md:flex-row md:space-x-10 items-center overflow-hidden">
<motion.div
  initial={{ x: -1000,opacity: 0}} // start from the left side, outside the viewport
  animate={{ x: 0,opacity:1 }} // animate to its original position
  transition={{  type: "spring", stiffness: 100 , ease: "linear",delay: 0.5 }}
  className="flex-grow w-full md:w-full sm:w-full text-center md:text-left "
>
  <h1 className="text-[30px] font-bold mb-5 font-montserrat  md:text-[20px] ">
    Hello <br />
    <span className="text-purple-500 text-4xl">
      I am Hafiz Qirab Jaffar
    </span>
  </h1>
  <p className="text-white leading-loose font-montserrat text-[17px] font-weight-500">
    MERN Stack Developer crafting beautiful, scalable web applications
    for your business needs. Expertise in MongoDB, Express, React &
    Node.js. Let's discuss your project!
  </p>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
    Contact me
  </button>
</motion.div>

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
  <motion.video 
  initial={{ x: 1000,opacity: 0}} // start from the left side, outside the viewport
  animate={{ x: 0,opacity:1 }} // animate to its original position
  transition={{ ease: "linear",delay: 0.5 }}
  autoPlay loop muted >
        <source src={videoFile} type="video/webm" />
</motion.video>
</div>
</div>
    </div>
  );
};

export default Hero;
