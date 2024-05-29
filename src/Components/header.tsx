import React, { useState } from "react";
import index from "../index.json";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Adjust this value to the height of your navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false); // Automatically close the dropdown after selection on mobile
  };

  return (
    <header className="w-full bg-light-green text-theme-white fixed top-0 left-0 right-0 z-50">
      <div className="mx-none px-0 sm:px-2 lg:px-0 flex justify-between items-center h-20">
        <div className="flex pl-5">
          <div onClick={() => scrollTo("home")} className=" cursor-pointer">
            <img src={index.logoDark} alt="logo" className="h-12 w-12 mr-3" />
          </div>
          <h1
            onClick={() => scrollTo("home")}
            className={`text-3xl font-bebas tracking-wide cursor-pointer mt-1 ${
              isOpen ? "text-center" : "text-left"
            } flex items-center`}
          >
            {index.appName}
          </h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="px-3 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          className={`absolute top-full right-0 w-full md:static md:w-auto md:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row items-center md:h-20`}
        >
          {/* <a
            href="#_"
            className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Button Text</span>
          </a> */}

          <button
            onClick={() => scrollTo("aboutus")}
            className="relative block w-full text-center md:w-auto px-4 py-7 group font-medium bg-light-green text-theme-white"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-hover-green group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-light-green">
              About Us
            </span>
          </button>

          <button
            onClick={() => scrollTo("product")}
            className="relative block w-full text-center md:w-auto px-4 py-7 group font-medium bg-light-green text-theme-white"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-hover-green group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-light-green">
              Our Product
            </span>
          </button>

          <button
            onClick={() => scrollTo("reviews")}
            className="relative block w-full text-center md:w-auto px-4 py-7 group font-medium bg-light-green text-theme-white"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-hover-green group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-light-green">
              Reviews
            </span>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="relative block w-full text-center md:w-auto px-4 py-7 group font-medium bg-light-green text-theme-white"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-hover-green group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-light-green">
              Contact Us
            </span>
          </button>

          {/* <button
            onClick={() => scrollTo("section1")}
            className="block w-full text-center mx-2 px-4 bg-theme-yellow hover:bg-yellow-50 transition duration-300 md:w-auto rounded-none py-6"
          >
            About Us
          </button>

          <button
            onClick={() => scrollTo("section1")}
            className="block w-full text-center mx-2 px-4 bg-theme-yellow hover:bg-opacity-5 transition duration-300 md:w-auto rounded-none py-6"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollTo("section2")}
            className="block w-full text-center mx-2 px-4 bg-theme-yellow hover:bg-blue-700 transition duration-300 md:w-auto rounded-none py-6"
          >
            Our Team
          </button>
          <button
            onClick={() => scrollTo("section3")}
            className="block w-full text-center mx-2 px-4 bg-theme-yellow  hover:bg-blue-700 transition duration-300 md:w-auto rounded-none py-6"
          >
            Contact Us
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
