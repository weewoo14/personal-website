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
      setGitHubActivity(data);
    }

    getGitHubActivity();
    setStars(generateStars());
  }, [])

  if (!mounted) return null;

  return (
    <div id="AboutMe" className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b from-midnightBlue to-tropicalBlue py-12 px-4">
      <StarField
        starList={stars}
        reflect={false}
      />
      <h1 className="font-caveat text-white text-6xl md:text-8xl mb-8 z-10 text-center">
        About Me
      </h1>
      <div className="text-left w-full max-w-4xl mb-8 px-4">
        <p className="font-mplus text-2xl md:text-3xl font-bold text-white mb-4">
          Hello! My name is Haoshi (Owen).
        </p>
        <p className="font-mplus text-lg md:text-xl text-white/90 leading-relaxed mb-6">
          You might know me by my online alias "weewoo14". <br/>
          Isn't it so fascinating how the internet can function with billions of users?<br/>
          That's why I'm mainly interested in pursuing research in Computer Science, specifically Combinatorics and Optimizations. <br/>
          I'll be a first-Year student at the University of [] to help me achieve this goal of mine!
        </p>
        <p className="font-mplus text-2xl md:text-3xl font-bold text-white">
          Recent Commits:
        </p>
      </div>
      
      <div className="w-full max-w-4xl max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent space-y-3 px-4">
        {gitHubActivity.map((activity, idx) => {
          const activityLink = "https://github.com/" + activity.repo.name;
          const activityType = activity.type.split(/(?=[A-Z])/).join(" ");
          const activityDate = new Date(activity.created_at).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

          return (
            <a key={idx} href={activityLink} target="_blank" className="block group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <p className="font-mplus text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-tropicalBlue transition-colors">
                      {activity.repo.name}
                    </p>
                    <p className="font-mplus text-sm md:text-base text-white/80 capitalize">
                      {activityType}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="font-mplus text-xs md:text-sm text-white/60">
                      {activityDate}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <Link href="/" className="font-caveat text-3xl md:text-4xl z-10 mt-8 underline text-white hover:text-tropicalBlue transition-colors">
        [back]
      </Link>
    </div>
  );
}

export default AboutMe;