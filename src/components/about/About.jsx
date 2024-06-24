import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white p-10" id="About">
      <motion.div
        initial={{ x: -1000, opacity: 0 }} // start from the left side, outside the viewport
        whileInView={{ x: 0, opacity: 1 }} // animate to its original position
        transition={{ ease: "linear", delay: 0.2 }}
        className="flex flex-col container mx-auto md:flex-row md:space-x-10 items-center overflow-hidden"
      >
        <div
          // initial={{ x: -1000, opacity: 0 }} // start from the left side, outside the viewport
          // whileInView={{ x: 0, opacity: 1 }} // animate to its original position
          // transition={{ ease: "linear", delay: 0.5 }}
          className="w-2/5 w-full md:w-full sm:w-full flex justify-center md:justify-start mt-10 md:mt-0 sm:mt-10"
        >
          <img
            className="w-48 h-48 rounded-full object-cover mx-auto"
            src="https://placeholder.com/48x48" // Replace with your image
            alt="About Me"
          />
        </div>
        <div
          // initial={{ x: 1000, opacity: 0 }} // start from the left side, outside the viewport
          // whileInView={{ x: 0, opacity: 1 }} // animate to its original position
          // viewport={{ once: true, threshold: 0.5}}
          // transition={{ ease: "linear", delay: 0.5 }}
          className="w-3/5 w-full md:w-full sm:w-full text-center md:text-left"
        >
          <h1 className="text-[35px] font-bold mb-5 font-montserrat ">
            About Me
          </h1>
          <p className="text-white leading-loose font-montserrat text-[17px] font-weight-500">
            As a Passionate MERN stack developer, I specialize in crafting
            scalable, efficient, and visually stunning web applications that
            drive business results. With expertise in MongoDB, Express, React,
            and Node.js, I deliver tailored solutions that meet the unique needs
            of my clients. From e-commerce platforms to social media apps, I
            bring ideas to life with my proficiency in front-end and back-end
            development, ensuring seamless user experiences and robust
            performance. Whether you're looking to build a new application from
            scratch or revamp an existing one, I'm dedicated to delivering
            top-notch MERN stack development services that exceed your
            expectations
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
            <a
              href="https://drive.google.com/file/d/1UGVTeY_1VmeiIymp1sG6g7nfCRBjLvyP/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my CV
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
