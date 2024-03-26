import React, { useEffect } from "react";
import { timeline } from "motion";

const Test = () => {
  useEffect(() => {
    const draw = (progress) => ({
      strokeDashoffset: 1 - progress,
      visibility: "visible",
    });

    timeline([
      ["#circle", draw(1), { duration: 0.8, delay: 1 }],
      ["#path", draw(1), { duration: 0.6, at: "-0.2" }],
    ]);
  }, []);

  return (
    <section
      id="section1"
      className="h-screen w-screen bg-yellow-200 flex items-center justify-center"
    >
      <h1 className="text-4xl font-bold body1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <circle id="circle" cx="100" cy="100" r="80" pathLength="1"></circle>
          <path
            id="path"
            d="M 54 107.5 L 88 138.5 L 144.5 67.5"
            pathLength="1"
          ></path>
        </svg>
      </h1>
    </section>
  );
};

export default Test;
