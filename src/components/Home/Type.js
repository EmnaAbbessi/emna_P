import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
  options={{
    strings: [
      "Software Engineer",
      "DevOps & Cloud Enthusiast",
      "Full-Stack Developer (MERN)",
      "Python Automation Developer",
      "AI & Data-Driven Solutions",
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
  }}
/>
  );
}

export default Type;
