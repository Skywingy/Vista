// components/Section6.js
import React, { useEffect } from "react";
import { inView, animate } from "motion";

const Section6 = () => {
  useEffect(() => {
    const sectionElement = document.getElementById("section6");

    inView(sectionElement, () => {
      animate(
        sectionElement.querySelector(".tadaa"),
        { opacity: 1, transform: "none" },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);

  return (
    <section id="section6" className="h-screen w-screen  bg-blue-700  z-50">
      <div className="container mx-auto py-8">
        <h2 className="tadaa text-2xl font-bold">For Sale</h2>
        <div className="card h-screen flex flex-row">
          <div className="first h-3/4 w-2/5 rounded border-2 border-rose-600"></div>
          <div className="second h-3/4 w-2/5 rounded border-2 border-rose-600"></div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
