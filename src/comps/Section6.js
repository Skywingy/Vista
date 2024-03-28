// components/Section6.js
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Section6 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  useEffect(() => {
    if (isInView) {
      console.log("should be here");
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <section
      ref={ref}
      id="section6"
      className="h-[130vh] w-screen bg-blue-700 z-50 flex items-center justify-center"
    >
      <div className="h-5/6 w-11/12 bg-blue-300 flex flex-row items-center justify-center rounded-3xl">
        <div className="card h-screen w-screen flex flex-row items-center justify-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
            className="first h-[90vh] w-5/12 rounded-3xl border-2 border-rose-600 ml-10"
          ></motion.div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
            className="second h-[90vh] w-5/12 rounded-3xl border-2 border-rose-600 mr-10"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
