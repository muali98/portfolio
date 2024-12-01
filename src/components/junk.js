import React, { useState, useEffect, useMemo } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export const Header = () => {
  const [nav, setNav] = useState(true);
  const [isHome, setIsHome] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [currentSection, setCurrentSection] = useState('home');

  const handleNav = () => setNav(!nav);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    }
  };

  // Memoize the navItems array to prevent it from changing on every render
  const navItems = useMemo(() => [
    'Home', 'Introduction', 'Education', 'Experience', 'Projects', 
    'Research', 'Visits', 'Awards', 'Skills', 'Leadership', 
    'Courses', 'Language', 'Gallery', 'Contact'
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        setIsHome(homeSection.getBoundingClientRect().top >= -homeSection.offsetHeight);
      }

      const sectionOffsets = navItems.map((name) => {
        const section = document.getElementById(name.toLowerCase());
        return {
          name,
          offsetTop: section ? section.offsetTop : 0,
          offsetHeight: section ? section.offsetHeight : 0,
        };
      });

      const current = sectionOffsets.find(
        ({ offsetTop, offsetHeight }) =>
          window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + offsetHeight - 100
      );

      if (current) {
        setCurrentSection(current.name.toLowerCase());
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, navItems]); // navItems is stable due to useMemo, preventing unnecessary re-renders

  return (
    <nav className={`fixed z-50 transition-all duration-300 
      ${isHome ? 'top-0 left-0 right-0 bg-transparent' 
      : isMobile ? 'top-0 left-0 right-0 bg-nav' 
      : 'lg:top-0 lg:left-0 lg:w-[18%] lg:h-screen lg:bg-nav'}`}>
      
      {/* Desktop Navigation */}
      {!isMobile && (
        <div className={`flex ${isHome ? 'items-center justify-between mx-auto px-10 pt-3' 
        : 'lg:flex-col lg:items-end lg:justify-center lg:h-screen lg:p-20'}`}>
          {isHome && (
            <div onClick={() => scrollToSection('home')} className="cursor-pointer py-3">
              <h2 className="text-lg font-semibold text-gray-100 font-Oxygen">Muhammad Ali</h2>
            </div>
          )}
          <div className={`flex ${isHome ? 'space-x-6 text-sm' 
          : 'lg:flex-col lg:items-end lg:space-y-6 lg:text-lg lg:font-semibold lg:text-green-100 lg:tracking-widest '}`}>
            {navItems.map((name) => (
              <span
                key={name}
                onClick={() => scrollToSection(name.toLowerCase())}
                className={hover:text-gray-400 cursor-pointer ${currentSection === name.toLowerCase() && !isHome ? 'text-red-500' : ''}}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex items-center justify-between px-4 pt-4">
          <div onClick={() => scrollToSection('home')} className="cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-100 font-Oxygen">
              {currentSection === 'home' ? 'Muhammad Ali' : currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <span onClick={() => scrollToSection('home')} className="text-xs text-gray-200 hover:text-gray-400">Home</span>
            <span onClick={() => scrollToSection('contact')} className="text-xs text-gray-200 hover:text-gray-400">Contact</span>
            <AiOutlineMenu onClick={handleNav} size={20} className="fill-gray-200 hover:fill-gray-400 cursor-pointer" />
          </div>
          {!nav && (
            <div className="fixed top-11 right-1 w-[40%] bg-[#212121] rounded-md text-gray-100 border border-gray-900">
              <ul className="cursor-pointer p-2">
                {navItems.map((name) => (
                  <li
                    key={name}
                    onClick={() => { scrollToSection(name.toLowerCase()); handleNav(); }}
                    className={py-2 hover:text-gray-300 ${currentSection === name.toLowerCase() && currentSection !== 'home' ? 'text-red-500' : ''}}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};