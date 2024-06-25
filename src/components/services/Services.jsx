import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPencilAlt, FaCodeBranch,FaRocket,FaServer,FaCamera } from "react-icons/fa"; // Import icons from Font Awesome

function Services() {
  return (
    <section className="bg-black text-white py-20 overflow-hidden" id="Services">
      <motion.div 
       initial={{ x: 0,opacity: 0}} // start from the left side, outside the viewport
       whileInView={{ x: 0,opacity:1 }} // animate to its original position
       transition={{ ease: "linear",delay: 0.2}}
      className="container mx-auto px-4 ">
        <h2 
        className="text-3xl font-bold text-center mb-10 max-md:text-3xl  max-sm:text-2xl">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover  bg-[rgb(14,49,97)] text-white">
            <FaPencilAlt className="text-4xl mb-4 " />{" "}
            {/* Use FaCode icon component */}
            <h3 className="text-xl font-bold mb-2 max-md:text-2xl  max-sm:text-xl">Creative Design</h3>
            <p className=" text-center max-md:text-xl  max-sm:text-base">
              We craft stunning and user-centric visual experiences.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-[rgb(14,49,97)] text-white">
            <FaCode className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 max-md:text-2xl  max-sm:text-xl">Web Development</h3>
            <p className="text-white  text-center max-md:text-xl  max-sm:text-base">
              We build modern, responsive websites that perform.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover  bg-[rgb(14,49,97)] text-white">
            <FaCodeBranch className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 max-md:text-2xl  max-sm:text-xl">Branding & Strategy</h3>
            <p className=" text-center max-md:text-xl  max-sm:text-base">
              We help you define your brand and create a winning strategy.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-[rgb(14,49,97)] text-white">
          <FaRocket className="text-4xl mb-4 " />
            <h3 className="text-xl font-bold mb-2 max-md:text-2xl  max-sm:text-xl">Marketing & Growth</h3>
            <p className=" text-center max-md:text-xl  max-sm:text-base">
              We help you reach your target audience and achieve your goals.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-[rgb(14,49,97)] text-white">
          <FaServer className="text-4xl mb-4 " />
            <h3 className="text-xl font-bold mb-2 max-md:text-2xl  max-sm:text-xl">Web Hosting & Maintenance</h3>
            <p className=" text-center max-md:text-xl  max-sm:text-base">
              We keep your website secure, reliable, and up-to-date.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-[rgb(14,49,97)] text-white">
          <FaCamera className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 max-md:text-2xl  max-sm:text-xl">Content Creation</h3>
            <p className="text-center max-md:text-xl  max-sm:text-base">
              We create engaging content that resonates with your audience.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
