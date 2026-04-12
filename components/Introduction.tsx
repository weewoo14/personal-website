"use client";

import Link from "next/link";
import StarField from "./StarField";
import { starProperties } from "@/types";
import { generateStars } from "@/utils";
import { useState, useEffect } from "react";

type navLinkProperties = {
  name: string;
  route: string;
  styling: string;
}
const navLinks: navLinkProperties[] = [
  {
    name: "[about]",
    route: "/about",
    styling: "font-caveat text-[5vw] md:text-[3vw] z-10 underline"
  },
  {
    name: "[experience]",
    route: "/experience",
    styling: "font-caveat text-[5vw] md:text-[3vw] z-10 underline"
  },
  {
    name: "[projects]",
    route: "/projects",
    styling: "font-caveat text-[5vw] md:text-[3vw] z-10 underline"
  },
  {
    name: "[sandbox]",
    route: "/sandbox",
    styling: "font-caveat text-[5vw] md:text-[3vw] z-10 underline"
  },
];

function Introduction() {
  const [stars, setStars] = useState<starProperties[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStars(generateStars());
  }, [])

  if (!mounted) return null;

  return(
    <>
    <div className="flex flex-col justify-center items-center bg-linear-to-b from-midnightBlue to-skyBlue h-screen">

      <StarField starList={stars} reflect={false}/>

      <h1 className="font-caveat text-white text-[20vw] md:text-[10vw] z-10">
        Haoshi Wu
      </h1>
      <p className="font-caveat text-white text-[5vw] md:text-[3vw] z-10">
        Aspiring Researcher
      </p>

      <div className="flex flex-row justify-center items-center gap-4">
        {navLinks.map((navLink, idx) => {
          return(
            <Link
              key = {idx}
              href = {navLink.route}
              className={`${navLink.styling} text-white`}
            >
              {navLink.name}
            </Link>
          );
        })}
      </div>
      
    </div>
    <div id = "AboutMe" className='flex flex-col justify-center items-center bg-linear-to-b from-skyBlue to-midnightBlue h-screen'>

      <StarField starList = {stars} reflect = {true}/>

      <div className="rotate-180 flex flex-row justify-center items-center gap-4">

        {navLinks.map((navLink, idx) => {
          return(
            <Link
              key = {idx}
              href = {navLink.route}
              className={`${navLink.styling} text-gray-300`}
            >
              {navLink.name}
            </Link>
          );
        })}
         
      </div>
      <p className="rotate-180 font-caveat text-gray-300 text-[5vw] md:text-[3vw] z-10">
        Aspiring Researcher
      </p>
      <h1 className="rotate-180 font-caveat text-gray-300 text-[20vw] md:text-[10vw] z-10">
        Haoshi Wu
      </h1>
    </div>
    </>
  );
}

export default Introduction;