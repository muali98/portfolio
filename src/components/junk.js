import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export const Header = () => {
  const [nav, setNav] = useState(true);
  const [isHome, setIsHome] = useState(true); // Renamed to represent 'home'
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleNav = () => setNav(!nav);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home'); // Changed from 'main' to 'home'
      if (homeSection) setIsHome(homeSection.getBoundingClientRect().top >= -homeSection.offsetHeight);
    };
    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const navItems = ['Home', 'Introduction', 'Education', 'Experience', 'Projects', 'Research', 'Visits', 'Awards', 'Skills', 'Leadership', 'Courses', 'Language', 'Gallery', 'Contact'];

  return (
    <nav className={`fixed z-50 transition-all duration-300 
    ${isHome ? 'top-0 left-0 right-0 bg-transparent'
        : isMobile ? 'top-0 left-0 right-0 bg-nav'
          : 'lg:top-0 lg:left-0 lg:w-[18%] lg:h-screen lg:bg-body'}`}>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className={`flex ${isHome ? 'items-center justify-between mx-auto px-10 pt-3' : 'lg:flex-col lg:items-end lg:justify-center lg:h-screen lg:p-20'}`}>
          {/* Render name only if on home */}
          {isHome && (
            <div onClick={() => scrollToSection('home')} className="cursor-pointer py-3"> {/* Changed here */}
              <h2 className="text-lg font-semibold text-gray-100 font-Oxygen">Muhammad Ali</h2>
            </div>
          )}
          <div className={`flex ${isHome ? 'space-x-6 text-sm' : 'lg:flex-col lg:items-end lg:space-y-6 lg:text-lg lg:font-semibold lg:text-green-100 lg:tracking-widest '}`}>
            {navItems.map((name) => (
              <span key={name} onClick={() => scrollToSection(name.toLowerCase() === 'home' ? 'home' : name.toLowerCase())} className="hover:text-gray-400 cursor-pointer ">
                {name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex items-center justify-between px-4 pt-4">
          <div onClick={() => scrollToSection('home')} className="cursor-pointer"> {/* Changed here */}
            <h2 className="text-lg font-semibold text-gray-100 font-Oxygen">Muhammad Ali</h2>
          </div>
          <div className="flex items-center space-x-4">
            <span onClick={() => scrollToSection('home')} className="text-xs text-gray-200 hover:text-gray-400">Home</span> {/* Changed here */}
            <span onClick={() => scrollToSection('contact')} className="text-xs text-gray-200 hover:text-gray-400">Contact</span>
            <AiOutlineMenu onClick={handleNav} size={20} className="fill-gray-200 hover:fill-gray-400 cursor-pointer" />
          </div>
          <div className={!nav ? 'fixed top-11 right-1 w-[40%] bg-[#212121] rounded-md text-gray-100 border border-gray-900' : 'hidden'}>
            <ul className="cursor-pointer p-2">
              {navItems.map((name) => (
                <li key={name} onClick={() => { scrollToSection(name.toLowerCase() === 'home' ? 'home' : name.toLowerCase()); handleNav(); }} className="py-2 hover:text-gray-300">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
