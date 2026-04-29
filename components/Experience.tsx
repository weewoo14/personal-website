'use client';
import { useState, useEffect } from "react";
import StarField from "./StarField";
import { generateStars } from "@/utils";
import { starProperties } from "@/types";
import Link from "next/link";

type experienceProps = {
  title: String
  company: String
  startDate: String
  endDate: String
  location: String
  description: String[]
}

const experiences: experienceProps[] = [
  {
    title: 'Full-stack Developer',
    company: 'JAMHacks',
    startDate: 'Aug 2025',
    endDate: 'Present',
    location: 'Waterloo, Ontario',
    description: [
      `Using Next.js and Tailwind CSS to develop the 'Sponsors' and 'Meet the Team' section of jamhacks.ca.`,
      `Using RESTful API design to efficiently filter and automate the process of participants who were accepted, rejected, and waitlisted.`,
      `Using Google Cloud Platform to integrate and host API's and bots on their Virtual Machine architecture.`]
  },
  {
    title: 'Co-President',
    company: 'Laurel Heights Computer Science Club',
    startDate: 'Sep 2024',
    endDate: 'Present',
    location: 'Waterloo, Ontario',
    description: [
      `Leading and teaching weekly lectures on computer science topics to over 100 club members, strengthening and broadening their skill sets in a variety of topics.`,
      `Boosting club attendance by 200% by communicating with six other executive members to host events such as project showcases, guest speakers, and AI competitions.`,
    ]
  },
  {
    title: 'Full-stack Developer',
    company: 'DuploHacks',
    startDate: 'Apr 2025',
    endDate: 'Feb 2026',
    location: 'Waterloo, Ontario',
    description: [
      `Designed and contributed to the Figma design for the frontend of the website with 3 other team members.`,
      `Developed the 'About Me' and 'Sponsors' section of the website with CSS.`
    ]
  },
  {
    title: 'Software Engineer (Future Tech)',
    company: 'Nokia',
    startDate: 'Jul 2025',
    endDate: 'Aug 2025',
    location: 'Remote',
    description: [
      `Developed a catalogue application that centralized over 600 items used by the Data Analyst team, improving the overall documentation efficiency by 200%`,
      `Utilized multiple Power Automate API flows to automatically update data in the Excel files and send emails to the stakeholders of the reports.`,
      `Collaborated with 10 team members on the Data Analysis team, communicating and suggesting ideas to improve performance of the catalogue application.`
    ]
  }
]

function ExperienceCard({ title, company, startDate, endDate, location, description } : experienceProps ) {
  return (
    <div className="h-auto min-h-[25vh] w-full max-w-[60vw] mt-6 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 z-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div className="flex-1">
          <h1 className="font-mplus text-white text-2xl md:text-3xl font-bold mb-2">
            {title}
          </h1>
          <h2 className="font-mplus text-white text-xl md:text-2xl font-semibold mb-1">
            {company}
          </h2>
        </div>
        <div className="text-right text-white/80 mt-2 md:mt-0">
          <p className="font-mplus text-sm md:text-base">
            {startDate} - {endDate}
          </p>
          <p className="font-mplus text-sm md:text-base">
            {location}
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
  );
}

export default function Experience() {
  const [stars, setStars] = useState<starProperties[]>([]);

  useEffect(() => {
    setStars(generateStars());
  }, [])

  return (
    <div id="Experience" className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b from-midnightBlue to-tropicalBlue py-12 px-4">
      <h1 className="font-caveat text-white text-6xl md:text-8xl mb-8 z-10 text-center">
        Experiences
      </h1>
      <StarField starList={stars} reflect={false}/>
      <div className="w-full max-w-4xl space-y-6 overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {experiences.map((experience, idx) => {
          return (
            <ExperienceCard
              key={idx}
              title={experience.title}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              location={experience.location}
              description={experience.description}
            />
          );
        })}
      </div>
      <Link href = "/" className="font-caveat text-[5vw] md:text-[3vw] z-10 m-2 underline text-white">
        [back]
      </Link>
    </div>
  );
}