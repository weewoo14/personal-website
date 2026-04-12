"use client";
import Link from "next/link";
import StarField from "./StarField";
import { starProperties, gitHubEventProperties } from "@/types";
import { generateStars } from "@/utils";
import { useState, useEffect } from "react";

function AboutMe() {
  const [stars, setStars] = useState<starProperties[]>([]);
  const [gitHubActivity, setGitHubActivity] = useState<gitHubEventProperties[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const getGitHubActivity = async () => {
      const response = await fetch("api/github");
      const data = await response.json();
      console.log(data);
      setGitHubActivity(data);
    }

    getGitHubActivity();
    setStars(generateStars());
  }, [])

  if (!mounted) return null;

  return (
    <div id = "AboutMe" className="flex flex-col justify-center items-center h-screen bg-linear-to-b from-midnightBlue to-skyBlue">
      <StarField
        starList={stars}
        reflect={false}
      />
      <h1 className="font-caveat text-white text-[17vw] md:text-[6vw] m-2 z-10">
        About Me
      </h1>
      <div className="text-left w-[65vw] ml-4 mr-4">
        <p className="font-mplus text-[1.7rem] md:text-[2vw] text-bold text-white">
          Hello! My name is Haoshi (Owen).
        </p>
        <p className="font-mplus text-[1.2rem] md:text-[1.3vw] text-bold text-white">
          You might know me by my online alias "weewoo14". <br/>
          Isn't it so fascinating how the internet can function with billions of users?<br/>
          That's why I'm mainly interested in pursuing research in Computer Science, specifically Combinatorics and Optimizations. <br/>
          I'll be a First-Year student at the University of [] to help me achieve this goal of mine!
        </p>
        <p className="font-mplus text-[1.7rem] md:text-[2vw] text-bold text-white mt-2">
          Recent Commits:
        </p>
      </div>
      
      <div className="w-[65vw] max-h-[26vh] overflow-y-scroll">
        {gitHubActivity.map((activity, idx) => {
          const activityLink = "https://github.com/" + activity.repo.name;
          const activityType = activity.type.split(/(?=[A-Z])/).join(" ");
          const activityDate = new Date(activity.created_at).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
          
          return (
            <a key = {idx} href = {activityLink} target="_blank">
              <div
                className="mt-2 mb-2 border-white"
              >
                <p className="font-mplus text-[1rem] md:text-[1.1vw] text-bold text-white">
                  {activity.repo.name}
                </p>
                <p className="font-mplus text-[0.8rem] md:text-[0.9vw] text-bold text-white">
                  {activityType}
                </p>
                <p className="font-mplus text-[0.8rem] md:text-[0.9vw] text-bold text-white">
                  {activityDate}
                </p>
              </div>
            </a>
          );
        })}
      </div>
      <Link href="/" className="font-caveat text-[5vw] md:text-[3vw] z-10 m-2 underline text-white">
        [back]
      </Link>
    </div>
  );
}

export default AboutMe;