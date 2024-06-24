import React from "react";
import { FaCode, FaPencilAlt, FaCodeBranch,FaRocket,FaServer,FaCamera } from "react-icons/fa"; // Import icons from Font Awesome

function Services() {
  return (
    <section className="bg-gray-100 py-20" id="Services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
            <FaPencilAlt className="text-4xl mb-4 text-blue-500" />{" "}
            {/* Use FaCode icon component */}
            <h3 className="text-xl font-bold mb-2">Creative Design</h3>
            <p className="text-gray-700 text-center">
              We craft stunning and user-centric visual experiences.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
            <FaCode className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-700 text-center">
              We build modern, responsive websites that perform.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
            <FaCodeBranch className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Branding & Strategy</h3>
            <p className="text-gray-700 text-center">
              We help you define your brand and create a winning strategy.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
          <FaRocket className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Marketing & Growth</h3>
            <p className="text-gray-700 text-center">
              We help you reach your target audience and achieve your goals.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
          <FaServer className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Web Hosting & Maintenance</h3>
            <p className="text-gray-700 text-center">
              We keep your website secure, reliable, and up-to-date.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
          <FaCamera className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Content Creation</h3>
            <p className="text-gray-700 text-center">
              We create engaging content that resonates with your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
