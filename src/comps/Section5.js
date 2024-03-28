// components/Section5.js
import React from "react";

const Section5 = () => {
  console.log("section5");

  return (
    <section
      id="section5"
      className="h-[80vh] w-screen  bg-red-200 overflow-y-auto z-50 stick2 flex items-center justify-center"
    >
      <div className="h-5/6 w-11/12 bg-blue-300 flex items-center justify-center rounded-3xl">
        <h2 className="text-2xl font-bold">Section 5</h2>
      </div>
    </section>
  );
};

export default Section5;
