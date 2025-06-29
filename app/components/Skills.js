import React from "react";
import Image from "next/image";
import about from "../../public/assets/about.png";
import html from "../../public/assets/html.png";
import css from "../../public/assets/css.png";
import js from "../../public/assets/javascript.png";
import react from "../../public/assets/react.png";
import tailwind from "../../public/assets/tailwind.png";
import bootstrap from "../../public/assets/bootstrap.png";
import github from "../../public/assets/github.png";
import nextjs from "../../public/assets/next.png";
import typescript from "../../public/assets/typescript.png";

export default function Skills() {
  return (
    <div className="w-full py-30 p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                HTML
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                CSS
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={js} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                JavaScript
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                React JS
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextjs} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                Next JS
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={typescript} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                Typescript
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={bootstrap} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                Bootstrap
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                Tailwind CSS
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={github} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
