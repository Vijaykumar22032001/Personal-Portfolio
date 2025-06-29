import React from "react";
import Image from "next/image";
import thinkgas from "../../public/assets/think-gas.png";
import merabajaj from "../../public/assets/merabajaj.png";
import cvaudit from "../../public/assets/cv-audit.png";
import novosage from "../../public/assets/novosage.png";
import salesdemo from "../../public/assets/sales-demo.png";
import bowring from "../../public/assets/bowring.png";
import golihomes from "../../public/assets/goli-homes.png";
import batl from "../../public/assets/batl.png";

import Link from "next/link";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="w-full  p-2 bg-gray-100">
      <div className="max-w-[1240px] mx-auto px-2 py-30">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Think Gas"
            backgroundImg={thinkgas}
            description="Next.js-based web application for real-time tracking and analytics of 3-wheeler vehicles."
            projectUrl="./"
          />
          <ProjectItem
            title="Bajaj CV Audit App"
            backgroundImg={cvaudit}
            description="Next.js-based web application for real-time tracking and analytics of 3-wheeler vehicles."
            projectUrl="./"
          />
          <ProjectItem
            title="Novosage"
            backgroundImg={novosage}
            description="Next.js-based web application for real-time tracking and analytics of 3-wheeler vehicles."
            projectUrl="./"
          />
          <ProjectItem
            title="Mera Bajaj"
            backgroundImg={merabajaj}
            description="Next.js-based web application for real-time tracking and analytics of 3-wheeler vehicles."
            projectUrl="./"
          />
          <ProjectItem
            title="Baja Sales Demo"
            backgroundImg={salesdemo}
            description="Next.js-based web application for real-time tracking and analytics of 3-wheeler vehicles."
            projectUrl="./"
          />
          <ProjectItem
            title="Bowring"
            backgroundImg={bowring}
            description="Next.js-based web application for real-time tracking and analytics of 3-wheeler vehicles."
            projectUrl="./"
          />
          <ProjectItem
            title="Goli Homes"
            backgroundImg={golihomes}
            description="Next.js-based web application for real-time tracking and analytics of 3-wheeler vehicles."
            projectUrl="./"
          />
          <ProjectItem
            title="Bajaj Auto Technology Pvt Ltd"
            backgroundImg={batl}
            description="Next.js-based web application for real-time tracking and analytics of 3-wheeler vehicles."
            projectUrl="./"
          />
        </div>
      </div>
    </div>
  );
}
