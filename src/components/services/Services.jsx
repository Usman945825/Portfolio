import React from "react";

function Services() {
  return (
    <section className="bg-gray-100 py-20" id="Services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
            <svg
              className="w-16 h-16 mb-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* Replace with your WordPress icon SVG */}
              <path
                fillRule="evenodd"
                d="M4 4v12h12V4zm6 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2">WordPress</h3>
            <p className="text-gray-700 text-center">
              We specialize in creating beautiful and functional WordPress
              websites.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
            <svg
              className="w-16 h-16 mb-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* Replace with your Webflow icon SVG */}
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 1 1 2.828 2.828l-3.777 3.777a2 2 0 0 1-2.828-2.828zM5.777 8.277a2 2 0 1 1 2.828-2.828l3.777 3.777a2 2 0 0 1-2.828 2.828zM16.414 11.414a2 2 0 1 1-2.828-2.828l-3.777 3.777a2 2 0 0 1 2.828 2.828zM11.172 15.172a2 2 0 1 1-2.828-2.828l3.777-3.777a2 2 0 0 1 2.828 2.828z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2">Webflow</h3>
            <p className="text-gray-700 text-center">
              We help you build custom and creative websites using Webflow.
            </p>
          </div>
          <div className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover bg-slate-200">
            <svg
              className="w-16 h-16 mb-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* Replace with your Site Maintenance icon SVG */}
            </svg>
            <span className="sr-only">
              <svg
                className="w-16 h-16 mb-4 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* Replace with your Site Maintenance icon SVG */}
                <path
                  fillRule="evenodd"
                  d="M11.49 3.51a1 1 0 0 0-1.98 0l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L13.414 10.5a.5.5 0 0 0 0-.707l-2.929-2.929a.5.5 0 0 0-.707 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4 4v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm1.5 9a.5.5 0 0 0-.5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zM14 4v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="text-xl font-bold mb-2">Site Maintenance</h3>
            <p className="text-gray-700 text-center">
              We offer ongoing maintenance plans to keep your website secure and
              up-to-date.
            </p>
          </div>
        </div>
        <button className="mt-10 block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Let's Discuss Your Project
        </button>
      </div>
    </section>
  );
}

export default Services;
