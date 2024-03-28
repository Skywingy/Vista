import React from "react";
import { motion } from "framer-motion";

const MenuItem = () => {
  const scrollToSection = (sectionId) => {
    console.log("clicked", sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed top-10 bg-red-300 p-4 shadow menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex gap-10">
        <motion.li
          onClick={() => scrollToSection("section1")}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Section1
        </motion.li>
        <motion.li
          onClick={() => scrollToSection("section2")}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Section2
        </motion.li>
        <motion.li
          onClick={() => scrollToSection("section3")}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Section3
        </motion.li>
        <motion.li
          onClick={() => scrollToSection("section4")}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Section4
        </motion.li>
        <motion.li
          onClick={() => scrollToSection("section5")}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Section5
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default MenuItem;
