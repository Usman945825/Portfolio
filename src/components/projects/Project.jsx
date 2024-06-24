import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import register from "../../Images/1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../projects/Project.css";

const ProjectCard = ({ image, title, description }) => (
  <div className="project-card shadow-md rounded-lg p-4 flex flex-col items-center">
    <img className="w-full h-58 object-cover mb-4" src={image} alt={title} />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

const Project = () => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      image: register,
      title: "SignIn/SignUp",
      description: "Simple and elegant register and login form",
    },
    {
      image: "https://placeholder.com/48x48", // Replace with your image
      title: "Authentication App",
      description: "Slight Info",
    },
    {
      image: "https://placeholder.com/48x48", // Replace with your image
      title: "To-Do List",
      description: "Slight Info",
    },
    // Add more projects here
  ];

  return (
    <motion.div 
    initial={{ opacity: 0 }} // initial opacity is 0 (fully transparent)
    whileInView={{ opacity: 1 }} // animate to opacity 1 (fully visible)
    transition={{ delay: 0.5, duration: 0.5 }} // delay for 1 second, then animate for 0.5 seconds
    className="mainDiv pt-[50px] pb-[50px]" id="Project">
      <h1 className="text-[35px] font-bold text-center mb-[60px] font-montserrat">
        Projects
      </h1>
      <div className="widthDiv container mx-auto">
        <Slider {...settings}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Project;
