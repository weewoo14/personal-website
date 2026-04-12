"use client";
import Link from "next/link";
import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    const getGitHubActivity = async () => {
      const response = await fetch("api/github");
      const data = await response.json();
      console.log(data);
    }
    getGitHubActivity();
  }, [])

  return (
    <div id = "AboutMe" className="flex flex-col justify-center items-center h-screen bg-linear-to-b from-skyBlue to-tropicalBlue">
      <h1 className="font-caveat text-white text-[20vw] md:text-[10vw] m-2 z-10">
        About Me
      </h1>
      <div className="text-left w-[65vw] ml-4 mr-4">
        <p className="font-mplus text-[2.5rem] text-bold text-white">
          Hello! My name is Haoshi (Owen).
        </p>
        <p className="font-mplus text-[1.5rem] text-bold text-white">
          You might know me by my online alias "weewoo14" <br/>
          Isn't it so fascinating how the internet can function with billions of users?<br/>
          That's why I'm mainly interested in pursuing research in Computer Science, specifically Combinatorics and Optimizations. <br/>
          I'll be a First-Year student at the University of [] to help me achieve this goal of mine!
        </p>
      </div>
      <Link href="/" className="font-caveat text-[5vw] md:text-[3vw] z-10 underline text-white">
        [back]
      </Link>
    </div>
  );
}

export default AboutMe;