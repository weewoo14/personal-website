"use client";

import Link from "next/link";
import StarField from "./StarField";
import PlanetField from "./PlanetField";
import LoadingScreen from "./LoadingScreen";
import { navLinkProperties } from "@/types";
import { useAppState } from "./AppStateProvider";

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
  const {dataLoaded, stars} = useAppState();

  if (!dataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return(
    <>
    <div className="flex flex-col justify-center items-center bg-linear-to-b from-midnightBlue to-tropicalBlue h-screen">

      <StarField starList={stars} reflect={false}/>
      <PlanetField/>

      <h1 className="font-caveat text-white text-[20vw] md:text-[10vw] z-10">
        Haoshi Wu
      </h1>
      <p className="font-caveat text-white text-[5vw] md:text-[3vw] z-10">
        CS @ UWaterloo
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
    </>
  );
}

export default Introduction;