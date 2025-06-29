import React from "react";
import Image from "next/image";
import about from "../../public/assets/about.png";

export default function About() {
  return (
    <div
      id="about"
      className="w-full   p-2 flex items-center py-30 bg-gray-100"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 ">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 ">
            Frontend Developer with 1 year of professional experience at Zersys,
            Bangalore, specializing in building responsive and user-friendly web
            applications. Skilled in React.js, JavaScript, HTML5, CSS3, and
            modern frontend frameworks.
          </p>
          <p className="py-2 text-gray-600 ">
            Think Gas is a platform involving three roles: Admin, Dealer, and
            Approver. The Admin manages users, models, dealers, and schemes.
            Dealers enter vehicle details, apply schemes, and submit
            applications. Approvers review and either accept or reject
            applications.A Next.js-based web application for real-time tracking
            and analytics of 3-wheeler vehicles. Live location tracking and trip
            history. Trip analytics: Distance, duration, efficiency, and fuel
            consumption. Data visualization: Graphs/tables for trip trends and
            driver performance. Admin dashboard for fleet management.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check Out Some Of My Projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            width={700}
            height={700}
            className="rounded-xl"
            src={about}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
}
