// components/Section3.js
"use client";
import React, { useEffect } from "react";

const Section3 = () => {
  console.log("section3");
  return (
    <section
      id="section3"
      className="h-screen w-screen bg-pink-400 overflow-y-auto stick z-30 flex items-center justify-center"
    >
      <div className="h-screen w-11/12 bg-blue-300 flex items-center justify-center rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Section 3</h2>

        {/* Scrollable content */}
        {/*      <div className="flex h-90">
          <div className="w-screen overflow-y-auto mr-4">
            <div className="h-[80vh] w-screen mb-4 bg-white">1</div>
            <div className="h-[80vh] w-screen mb-4 bg-white">2</div>
            <div className="h-[80vh] w-screen mb-4 bg-white">3</div>
            <div className="h-[80vh] w-screen mb-4 bg-white">4</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Section3;
