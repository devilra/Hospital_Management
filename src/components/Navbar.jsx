import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = () => {
    // Menu-வை மூடுவது
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("about", {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    } else {
      scroller.scrollTo("about", {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "About Us", path: "/about", action: handleAboutClick },
    { name: "Contact Us", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  // Mobile/Tablet Menu-வில் Link-ஐ க்ளிக் செய்தால் Menu-வை மூடுவதற்கு ஒரு Helper Function
  const handleLinkClick = (action) => {
    setIsOpen(false);
    if (action) {
      action(); // About Us-க்கு மட்டும் scroll action
    }
  };

  return (
    // Fixed Navbar
    <nav className="fixed top-0 w-full flex items-center justify-between px-4 md:px-10 lg:px-20 py-2 bg-white shadow z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src="/logo1.png" alt="RKP" className="h-16 w-auto md:h-20" />
        </Link>
      </div>

      {/* Desktop Links: இது இப்போ LG ஸ்கிரீன்ல (1024px) மட்டும் தான் தெரியும் */}
      <ul className="hidden lg:flex justify-between items-center gap-8 text-sm font-semibold text-blue-900">
        {navLinks.map(({ name, path, action }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              `lg:text-lg cursor-pointer px-2 py-2 border-b-4 transition duration-500 ${
                isActive
                  ? "text-blue-600 font-bold border-blue-600"
                  : "text-blue-600 font-bold border-transparent hover:border-blue-600"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </ul>

      {/* Right Side: Call Button (LG Only) & Menu Icon (MD and below) */}
      <div className="flex items-center gap-4">
        {/* Desktop Call Button: இது LG ஸ்கிரீன்ல மட்டும் தான் தெரியும் */}
        <a href="tel:9384676002" className="hidden lg:block">
          <button className="bg-blue-900 text-white px-5 font-bold py-3 flex gap-2 justify-center items-center rounded-lg hover:bg-blue-700 transition duration-300">
            <IoCall size={20} className="text-white" /> 9384676002
          </button>
        </a>

        {/* Hamburger/X Icon: இது MD (Tablet) மற்றும் அதற்கு கீழே இருக்கிற ஸ்கிரீன்ல தெரியும் */}
        <div
          className="lg:hidden text-3xl text-blue-900 cursor-pointer z-50" // lg:hidden use பண்ணிருக்கேன்
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile/Tablet Fullscreen Menu (Off-Canvas Menu) 
        - இது MD (Tablet) ஸ்கிரீன்ல கூட தெரியணும், அதனால md:hidden-ஐ அப்படியே வச்சிருக்கேன் (Mobile/Tablet ரெண்டுக்கும் பொதுவா).
      */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-xl font-bold text-blue-900 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden z-40`}
      >
        {" "}
        {/* இங்க md:hidden-க்கு பதில் lg:hidden ஆக்கிருக்கேன் */}
        {navLinks.map(({ name, path, action }) =>
          action ? (
            <button
              key={name}
              onClick={() => handleLinkClick(action)}
              className="hover:text-blue-600 text-2xl"
            >
              {name}
            </button>
          ) : (
            <NavLink
              to={path}
              key={name}
              onClick={() => handleLinkClick()}
              className={({ isActive }) =>
                `hover:text-blue-600 text-2xl ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              {name}
            </NavLink>
          )
        )}
        {/* Mobile Call Button (Menu-வுக்கு உள்ள) */}
        <a href="tel:9384676002">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 mt-4 hover:bg-blue-700 transition duration-300">
            <IoCall size={20} className="text-white" />
            9384676002
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
