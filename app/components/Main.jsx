import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
  return (
    <div className="w-full pt-50 pb-30 text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 sm:p-8 md:p-16 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build Something Together
          </p>

          <h1 className="py-4 text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm
            <span className="text-[#5651e5]"> VijayKumar Vyakaranal</span>
          </h1>

          <h1 className="py-4 text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            A Front-End Web Developer
          </h1>

          <p className="py-4 text-gray-600 max-w-[90%] md:max-w-[70%] m-auto text-base sm:text-lg">
            Frontend Developer with 1 year of professional experience at Zersys,
            Bangalore, specializing in building responsive and user-friendly web
            applications. Skilled in React.js, JavaScript, HTML5, CSS3, and
            modern frontend frameworks.
          </p>

          <div className="flex items-center justify-between max-w-[320px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-110 ease-in duration-300">
              <FaEnvelope />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
