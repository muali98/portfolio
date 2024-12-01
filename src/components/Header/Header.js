import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = ({ sections }) => {
  const [nav, setNav] = useState(true);
  const [isHome, setIsHome] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [currentSection, setCurrentSection] = useState("home");

  const handleNav = () => setNav(!nav);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        setIsHome(
          homeSection.getBoundingClientRect().top >= -homeSection.offsetHeight
        );
      }

      const sectionOffsets = sections.map(({ id }) => {
        const section = document.getElementById(id);
        return {
          id,
          offsetTop: section ? section.offsetTop : 0,
          offsetHeight: section ? section.offsetHeight : 0,
        };
      });

      const current = sectionOffsets.find(
        ({ offsetTop, offsetHeight }) =>
          window.scrollY >= offsetTop - 100 &&
          window.scrollY < offsetTop + offsetHeight - 100
      );

      if (current) {
        setCurrentSection(current.id);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, sections]);

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 
      ${
        isHome
          ? "top-0 left-0 right-0 bg-transparent"
          : isMobile
          ? "top-0 left-0 right-0 bg-nav"
          : "lg:top-0 lg:left-0 lg:w-[18%] lg:h-screen lg:bg-nav"
      }`}
    >
      {/* Desktop Navigation */}
      {!isMobile && (
        <div
          className={`flex ${
            isHome
              ? "items-center justify-between mx-auto px-10 pt-3"
              : "lg:flex-col lg:items-end lg:justify-center lg:h-screen lg:p-20 lg:shadow-[8px_0_16px_rgba(0,0,0,0.6)]"
          }`}
        >
          {isHome && (
            <div
              onClick={() => scrollToSection("home")}
              className="cursor-pointer py-3"
            >
              <h2 className="text-lg font-semibold text-gray-100 font-Oxygen">
                Muhammad Ali
              </h2>
            </div>
          )}
          <div
            className={`flex ${
              isHome
                ? "space-x-6 text-sm"
                : "lg:flex-col lg:items-end lg:space-y-6 lg:text-lg lg:font-semibold lg:text-green-100 lg:tracking-widest"
            }`}
          >
            {sections.map(({ id, displayName }) => (
              <span
                key={id}
                onClick={() => scrollToSection(id)}
                className={`hover:text-gray-400 cursor-pointer ${
                  currentSection === id && !isHome ? "text-green-500 drop-shadow-[0_0_8px_rgba(255,0,0,2)]" : ""
                }`}
              >
                {displayName}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
          >
            <h2
              className={`text-lg font-semibold font-Oxygen ${
                currentSection !== "home"
                  ? "text-gray-100 drop-shadow-[0_0_4px_rgba(200,0,100,1)]" // Add blue glow here
                  : "text-gray-100"
              }`}
            >
              {currentSection === "home"
                ? "Muhammad Ali"
                : sections.find(({ id }) => id === currentSection)?.displayName}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <AiOutlineMenu
              onClick={handleNav}
              size={20}
              className="fill-gray-200 hover:fill-gray-400 cursor-pointer"
            />
          </div>
          {!nav && (
            <div className="fixed top-11 right-1 w-[40%] bg-[#212121] rounded-md text-gray-100 border border-gray-900">
              <ul className="cursor-pointer p-2">
                {sections.map(({ id, displayName }) => (
                  <li
                    key={id}
                    onClick={() => {
                      scrollToSection(id);
                      handleNav();
                    }}
                    className={`py-2 hover:text-gray-300 ${
                      currentSection === id && currentSection !== "home"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {displayName}
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
