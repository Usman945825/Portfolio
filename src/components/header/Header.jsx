import React, { useState, useEffect } from "react";
import "../header/Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scroller = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`mainDiv bg-black text-white ${isSticky ? "sticky" : ""}`}>
      <div className="widthDiv">
        <header>
          <ul class="flex justify-center gap-x-5 py-[13px] px-0 font-montserrat text-[18px]">
            <li>
              <button onClick={() => scroller("Home")} className="border-none">Home</button>
            </li>
            <li>
              <button onClick={() => scroller("About")}>About</button>
            </li>
            <li>
              <button onClick={() => scroller("Services")}>Services</button>
            </li>
            <li>
              <button onClick={() => scroller("Project")}>Projects</button>
            </li>
            <li>
              <button onClick={() => scroller("Footer")}>Contact</button>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
