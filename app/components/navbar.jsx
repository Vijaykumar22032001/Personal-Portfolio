"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/assets/vijay.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-lg z-[1000] bg-[#ecf0f3]">
      {" "}
      {/* Added a background color for better visibility */}
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
        {" "}
        {/* Removed z-[100] from here */}
        <Image src={logo} width={100} height={100} alt="logo" />
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#home">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About Me</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              {/* Use a standard <a> tag with the download attribute */}
              <a href="/resume.pdf" download="Vijay_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </li>
          </ul>
          <div onClick={handleNav} className="sm:block md:hidden lg:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={logo} width={87} height={35} alt="logo" />
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90] py-4">
                Let's Build Something Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col space-y-4">
            <ul className="uppercase">
              <li onClick={handleNav} className="py-4 text-sm">
                <Link href="/#home">Home</Link>
              </li>
              <li onClick={handleNav} className="py-4 text-sm">
                <Link href="/#about">About Me</Link>
              </li>
              <li onClick={handleNav} className="py-4 text-sm">
                <Link href="/#skills">Skills</Link>
              </li>
              <li onClick={handleNav} className="py-4 text-sm">
                <Link href="/#projects">Projects</Link>
              </li>
              <li onClick={handleNav} className="py-4 text-sm">
                <Link href="/#contact">Contact</Link>
              </li>
              <li onClick={handleNav} className="py-4 text-sm">
                <a href="/resume.pdf" download="Vijay_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </li>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-105 ease-in duration-300">
                  <FaLinkedin size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-105 ease-in duration-300">
                  <FaGithub size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-105 ease-in duration-300">
                  <FaEnvelope size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
