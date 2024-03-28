// components/Section4.js
import React from "react";

const Section4 = () => {
  console.log("section4");

  return (
    <section
      id="section4"
      className="h-[80vh] w-screen  bg-green-200 overflow-y-auto z-40 stick2 flex items-center justify-center"
    >
      <div className="h-5/6 w-11/12 bg-blue-300 flex items-center justify-center rounded-3xl">
        {" "}
        <h2 className="text-2xl font-bold">Section 4</h2>
        {/* Add your content for Section 4 here */}
      </div>
    </section>
  );
};

export default Section4;
