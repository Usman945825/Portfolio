import { React, useEffect } from "react";
// import developer from "../../Images/developer.jpg";
import Typed from "typed.js";
import me from "../../Images/me.png";
import { motion } from "framer-motion";


const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Ambitious",
        "Enthusiastic",
        "Dedicated",
        "Confident",
        "Determined",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="mt-12 bg-black text-white p-10" id="Home">
<div className="flex flex-col container mx-auto md:flex-row md:space-x-10 items-center overflow-hidden">
<motion.div
  initial={{ x: -1000,opacity: 0}} // start from the left side, outside the viewport
  animate={{ x: 0,opacity:1 }} // animate to its original position
  transition={{  type: "spring", stiffness: 100 , ease: "linear",delay: 0.5 }}
  className="flex-grow w-full md:w-full sm:w-full text-center md:text-left  "
>
  <h1 className="text-4xl font-bold mb-5 font-montserrat max-md:text-3xl  max-sm:text-xl ">
    Hello <br />
    <span className="text-purple-500">
      I am Muhammad Usman
    </span>
  </h1>
    <span className="auto-type text-3xl max-md:text-2xl  max-sm:text-lg"></span>
  <p className="text-white leading-loose font-montserrat text-[17px] font-weight-500 max-md:text-xl  max-sm:text-base">
    MERN Stack Developer crafting beautiful, scalable web applications
    for your business needs. Expertise in MongoDB, Express, React &
    Node.js. Let's discuss your project!
  </p>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
    Contact me
  </button>
</motion.div>

<div className="flex lg:justify-center items-center justify-center w-full md:w-full sm:w-full md:justify-start md:justify-center mt-10 md:mt-0 sm:mt-10">
  <motion.div 
  className="contents"
    initial={{ opacity: 0}}
    animate={{ opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}>
    <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}}}
     className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[428px] lg:h-[428px] xl:w-[428px] xl:h-[428px] mix-blend-lighten absolute">
      <img 
        src={me} 
        alt="SignIn/SignUp" 
        className="object-contain w-full h-full"
        style={{
          objectFit: 'cover',
          border: 'olid 1px #CCC'
        }}
      />
    </motion.div>
    <motion.svg 
      className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg">
      <motion.circle 
        cx="253" 
        cy="253" 
        r="250" 
        stroke="#007bff" 
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "24 10 0 0"}}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate: [120, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.svg>
  </motion.div>
</div>
</div>
    </div>
  );
};

export default Hero;
