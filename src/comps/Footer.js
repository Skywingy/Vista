import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="h-[35vh] w-screen bg-indigo-200 overflow-y-auto z-50 flex items-center justify-center"
    >
      <div className="w-screen h-full py-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold h-1/6 w-11/12 border-2 border-rose-600 my-8">
          Footer
        </h2>
        <nav className="flex flex-row items-center justify-between h-3/6 w-11/12 border-2 border-rose-600">
          <a
            href="#"
            className="text-lg font-semibold text-gray-800 hover:text-gray-900"
          >
            PROJECTS
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-800 hover:text-gray-900"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-800 hover:text-gray-900"
          >
            RENTAL
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-800 hover:text-gray-900"
          >
            SUITES
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-800 hover:text-gray-900"
          >
            NEW LISTINGS
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-800 hover:text-gray-900"
          >
            CONTACT US
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
