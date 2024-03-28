// components/Section4.js
import React from "react";

const Section4 = () => {
  return (
    <section
      id="section4"
      className="h-[80vh] w-screen  bg-green-200 overflow-y-auto z-40 stick2 flex items-center justify-center"
    >
      <div className="h-5/6 w-11/12 bg-blue-300 flex flex-row items-center justify-center rounded-3xl">
        <div className="firstHalf h-full w-7/12 rounded-3xl border-2 border-rose-600"></div>
        <div className="firstHalf h-full w-1/12"></div>
        <div className="secondHalf h-full w-4/12 rounded-3xl border-2 border-rose-600"></div>
      </div>
    </section>
  );
};

export default Section4;
