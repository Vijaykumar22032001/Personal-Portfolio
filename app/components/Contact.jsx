import React from "react";
import Image from "next/image";
import ContactImage from "../../public/assets/contact.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full ">
      <div className="max-w-[1240px] m-auto px-2 py-30 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid grid-cols-5 gap-8 ">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={ContactImage}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  alt="Contact Image"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h2 className="py-2">Vijaykumar Vyakaranal</h2>
                <p className="">Front-End Developer</p>
                <p className="py-4 ">
                  Iam available for freelance or full-time positions. Contact me
                  let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact with me</p>
                <div className="flex items-center justify-between  py-4 ">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">Phone No</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 ">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 ">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 ">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3  border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
