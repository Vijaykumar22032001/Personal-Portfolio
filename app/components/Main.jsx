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

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-6 m-auto py-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vijaykumar-vyakaranal-40769325b/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Vijaykumar22032001"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            {/* Email */}
            <a href="mailto:vijaykumar.vyakaranal@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaEnvelope />
              </div>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download="Vijay_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
