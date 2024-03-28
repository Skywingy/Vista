// components/Section6.js
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Section6 = () => {
  console.log("section6");

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  useEffect(() => {
    console.log("now y see me", isInView);
    if (isInView) {
      console.log("should be here");
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <section
      ref={ref}
      id="section6"
      className="h-120% w-screen  bg-blue-700  z-50"
    >
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold pb-8">For Sale</h2>
        <div className="card h-screen flex flex-row">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
            className="first h-5/8 w-2/5 rounded border-2 border-rose-600"
          ></motion.div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
            className="second h-5/8 w-2/5 rounded border-2 border-rose-600"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
