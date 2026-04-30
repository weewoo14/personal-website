'use client';
import Link from "next/link";
import StarField from "./StarField";
import { useState, useEffect } from "react";
import { generateStars } from "@/utils";
import { starProperties } from "@/types";

type projectsProps = {
  title: String,
  startDate: String,
  endDate: String,
  link: string,
  description: String[],
};

const projects: projectsProps[] = [
  {
    title: 'Graph Theory Visualizer',
    startDate: 'Dec 2025',
    endDate: 'Jan 2026',
    link: 'https://github.com/weewoo14/ICS4UI-FInal-Project',
    description: [
      `Gave users an interactive display to create their own graphs to represent data.`,
      `Implemented both Breadth-First Search and Depth-First Search with detailed descriptions on what is occurring at each step.`,
      `Technologies: Data Structures & Algorithms, Java, Processing`
    ]
  },
  {
    title: 'Pattordle',
    startDate: 'Apr 2025',
    endDate: 'Aug 2025',
    link: 'https://github.com/weewoo14/wordle-pattern-generator',
    description: [
      `Imported the entire Wordle word library to evaluate possible words to create patterns.`,
      `Mimiced the Wordle evaluation to ensure accuracy in user-generated patterns.`,
      `Technologies: React.js, CSS, JavaScript, API's.`
    ]
  },
  {
    title: 'AnyJAMS!',
    startDate: 'Jun 2024',
    endDate: 'Jun 2024',
    link: 'https://github.com/anandtandon8/Any-Jam',
    description: [
      `Used a MATLABS backend to perform real-time audio analysis with amplitude scaling formulae.`,
      `Connected the backend to a Python Flask frontend with web sockets and API's.`,
      `Technologies: MATLAB, Flask, API's.`
    ]
  },
];

function ProjectCard( {title, startDate, endDate, link, description} : projectsProps ) {
  return (
    <a href={link} target="_blank">
      <div className="h-auto min-h-[25vh] w-full max-w-[60vw] mt-6 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div className="flex-1">
            <h1 className="font-mplus text-white text-2xl md:text-3xl font-bold mb-2">
              {title}
            </h1>
          </div>
          <div className="text-right text-white/80 mt-2 md:mt-0">
            <p className="font-mplus text-sm md:text-base">
              {startDate} - {endDate}
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4">
          <ul className="space-y-2">
            {description.map((item, idx) => (
              <li key={idx} className="text-white/90 font-mplus text-sm md:text-base leading-relaxed flex items-start">
                <span className="text-white mr-2 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

function Projects() {
  const [stars, setStars] = useState<starProperties[]>([]);

  useEffect(() => {
    setStars( generateStars() )
  }, [])

  return (
    <div id="Projects" className="flex flex-col justify-center items-center h-screen overflow-hidden bg-linear-to-b from-midnightBlue to-tropicalBlue py-12 px-4">
      <StarField starList={stars} reflect={false}/>

      <h1 className="font-caveat text-white text-6xl md:text-8xl mb-8 z-10 text-center">
        Projects
      </h1>

      <div className="w-full max-w-4xl flex-1 overflow-y-auto space-y-6 pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {projects.map((project, idx) => {
          return (
            <ProjectCard
              key={idx}
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>

      <Link href='/' className="font-caveat text-[5vw] md:text-[3vw] z-10 m-2 underline text-white">
        [back]
      </Link>
    </div>
  );
}

export default Projects;