// components/Section2.js
import React from "react";

const Section2 = () => {
  console.log("section2");
  return (
    <section
      id="section2"
      className="h-screen w-screen bg-slate-300 flex items-center justify-center"
    >
      <div className="h-5/6 w-11/12 bg-blue-300 flex items-center justify-center rounded-3xl">
        <h2 className="text-4xl font-bold">Section 2</h2>
      </div>
    </section>
  );
};

export default Section2;
