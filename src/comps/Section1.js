// components/Section1.js
import React from "react";

const Section1 = () => {
  return (
    <section
      id="section1"
      className="h-screen w-screen bg-yellow-200 flex items-center justify-center"
    >
      <div className="h-5/6 w-11/12 bg-blue-300 flex items-center justify-center rounded-3xl">
        <h1 className="text-4xl font-bold">Section 1</h1>
      </div>
    </section>
  );
};

export default Section1;
