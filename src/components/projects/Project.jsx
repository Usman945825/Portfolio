import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../projects/Project.css";

const Project = () => {
  const settings = {
    dots: false,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };
  return (
    <div className="mainDiv pt-[50px] pb-[50px]" id="Project">
      <h1 class="text-[35px] font-bold text-center mb-[60px] font-montserrat">
        Projects
      </h1>
      <div className="widthDiv container mx-auto">
        <div className="slider-container text-center">
          <Slider {...settings}>
            <div className="slider-details">
              <img
                className="w-48 h-48 rounded-full object-cover mx-auto"
                src="https://placeholder.com/48x48" // Replace with your image
                alt="About Me"
              />
              <div className="content-body">
                <h3 class="text-[30px]">T0-DO-LIST</h3>
                <p class="text-[18px]">Slight Info</p>
              </div>
            </div>
            <div className="slider-details">
              <img
                className="w-48 h-48 rounded-full object-cover mx-auto"
                src="https://placeholder.com/48x48" // Replace with your image
                alt="About Me"
              />
              <div className="content-body">
                <h3 class="text-[30px]">Authentication App</h3>
                <p class="text-[18px]">Slight Info</p>
              </div>
            </div>
            <div className="slider-details">
              <img
                className="w-48 h-48 rounded-full object-cover mx-auto"
                src="https://placeholder.com/48x48" // Replace with your image
                alt="About Me"
              />
              <div className="content-body">
                <h3 class="text-[30px]">T0-DO-LIST</h3>
                <p class="text-[18px]">Slight Info</p>
              </div>
            </div>
            <div className="slider-details">
              <img
                className="w-48 h-48 rounded-full object-cover mx-auto"
                src="https://placeholder.com/48x48" // Replace with your image
                alt="About Me"
              />
              <div className="content-body">
                <h3 class="text-[30px]">T0-DO-LIST</h3>
                <p class="text-[18px]">Slight Info</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Project;
