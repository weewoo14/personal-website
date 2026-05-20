"use client";
import Link from "next/link";
import StarField from "./StarField";
import PlanetField from "./PlanetField";
import { useAppState } from "./AppStateProvider";

function AboutMe() {
  const {dataLoaded, stars, gitHubActivity} = useAppState();

  if (!dataLoaded) {
    return (
      <div>
        <h1> Test </h1>
      </div>
    );
  }

  return (
    <div id="AboutMe" className="flex flex-col justify-center items-center h-screen bg-linear-to-b from-midnightBlue to-tropicalBlue">
      <StarField
        starList={stars}
        reflect={false}
      />
      <PlanetField/>
      <h1 className="font-caveat text-white text-[17vw] md:text-[6vw] m-2 z-10">
        About Me
      </h1>
      <div className="text-left w-[65vw] ml-4 mr-4 z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 shadow-lg">
          <p className="font-mplus text-[1.6rem] md:text-[1.9rem] font-semibold text-white/95 leading-tight">
            Hello — I'm Haoshi (Owen).
          </p>
          <p className="font-mplus mt-4 text-[1rem] md:text-[1.05rem] text-white/85 leading-relaxed tracking-wide max-w-[100ch]">
            You might know me by my online alias <span className="font-mono text-white/95">weewoo14</span> or some variation of that.
          </p>
          <p className="font-mplus mt-2 text-[1rem] md:text-[1.05rem] text-white/85 leading-relaxed tracking-wide max-w-[100ch]">
            I'm currently a Computer Science student at the University of Waterloo (Class of 2031).
          </p>
          <p className="font-mplus mt-2 text-[1rem] md:text-[1.05rem] text-white/85 leading-relaxed tracking-wide max-w-[100ch]">
            I love building things that pique my interest — lately it's astronomy (hence the site's theme)!
          </p>
          <a href="https://github.com/weewoo14" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
            <p className="font-mplus text-[1.2rem] md:text-[1.4rem] font-medium text-white underline decoration-white/30 underline-offset-4">
              GitHub Activity:
            </p>
          </a>
        </div>
      </div>
      
      <div className="w-[65vw] max-h-[26vh] overflow-y-scroll">
        {gitHubActivity.map((activity, idx) => {
          const activityLink = "https://github.com/" + activity.repo.name;
          const activityType = activity.type.split(/(?=[A-Z])/).join(" ");
          const activityDate = new Date(activity.created_at).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
          
          return (
            <a key = {idx} href = {activityLink} target="_blank" className="block group">
              <div
                className="mt-2 mb-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300"
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