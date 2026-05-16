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
        <p className="font-mplus text-[1.7rem] md:text-[2vw] text-bold text-white">
          Hello! My name is Haoshi (Owen).
        </p>
        <p className="font-mplus text-[1.2rem] md:text-[1.3vw] text-bold text-white">
          You might know me by my online alias "weewoo14", or some variation of that. <br/>
          I'm currently a CS student at UWaterloo (Class of 2031). <br/>
          I love building things that pique my interest! Right now, it's astronomy (hence the very obvious theme of the website)! <br/>
        </p>
        <a href="https://github.com/weewoo14" target="_blank">
          <p className="font-mplus text-[1.7rem] md:text-[2vw] text-bold text-white mt-2 mb-2">
            GitHub Activity:
          </p>
        </a>
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