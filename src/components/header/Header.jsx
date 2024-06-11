import React, { useState, useEffect } from 'react';
import '../header/Header.css'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`mainDiv ${isSticky? 'sticky' : ''}`}>
      <div className='widthDiv'>
        <header>
          <ul class='flex justify-center gap-x-5 py-[13px] px-0 font-montserrat text-[18px]'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;