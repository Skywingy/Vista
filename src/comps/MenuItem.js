"use client";
import React from "react";

const MenuItem = () => {
  const scrollToSection = (sectionId) => {
    console.log(sectionId);
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      console.log(section);
    }
  };

  return (
    <div className="fixed top-10 bg-red-300 p-4 shadow menu">
      <ul className="flex gap-10">
        <li
          onClick={() => scrollToSection("section1")}
          className="cursor-pointer"
        >
          Section1
        </li>
        <li
          onClick={() => scrollToSection("section2")}
          className="cursor-pointer"
        >
          Section2
        </li>
        <li
          onClick={() => scrollToSection("section3")}
          className="cursor-pointer"
        >
          Section3
        </li>
        <li
          onClick={() => scrollToSection("section4")}
          className="cursor-pointer"
        >
          Section4
        </li>
        <li
          onClick={() => scrollToSection("section5")}
          className="cursor-pointer"
        >
          Section5
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
