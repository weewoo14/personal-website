'use client';
import StarField from "./StarField";
import PlanetField from "./PlanetField";
import LoadingScreen from "./LoadingScreen";
import { useAppState } from "./AppStateProvider";
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
    title: 'Open-Source Contributor',
    company: 'DMOJ',
    startDate: 'May 2026',
    endDate: 'Present',
    location: 'Remote',
    description: [
      `Contributed to a large-scale open source project with 1K+ GitHub stars by resolving frontend UI issues within the platform's user search functionality.`,
      `Implemented dynamic username styling logic to ensure user search results accurately reflected rank-based color assignments, improving visual consistency and user experience.`,
      `Collaborated within an open source development workflow using pull requests, issue tracking, and real-world best coding practices to deliver maintainable frontend improvements.`
    ]
  },
  {
    title: 'Full-stack Developer',
    company: 'JAMHacks',
    startDate: 'Aug 2025',
    endDate: 'Present',
    location: 'Waterloo, Ontario',
    description: [
      `Developed and optimized the 'Sponsors' and 'Meet the Team' sections of jamhacks.ca using Next.js and Tailwind CSS, contributing to a platform that generated 10K+ website impressions.`,
      `Engineered scalable RESTful APIs using Next.js API routes and Mongoose queries to automate applicant acceptance, rejection, and waitlist workflows, improving operational efficiency by over 400%.`,
      `Designed backend data-filtering systems leveraging Mongoose and efficient API querying to streamline participant management and reduce manual review overhead.`,
      `Built and deployed Discord bot infrastructure on Google Cloud Platform Virtual Machines, supporting 250+ hackers through automated community assistance and data collection.`,
      `Implemented RESTful API integrations within the Discord bot, combining MongoDB/Mongoose data retrieval with Google Vertex AI APIs to aggregate and structure participant response data for a 19-member organizing team.`
    ]
  },
  {
    title: 'Co-President',
    company: 'Laurel Heights Computer Science Club',
    startDate: 'Sep 2024',
    endDate: 'Present',
    location: 'Waterloo, Ontario',
    description: [
      `Lead and deliver weekly computer science lectures to 100+ club members, covering programming, software development, and emerging technology topics to strengthen technical proficiency across the club.`,
      `Increased club attendance by 200% through strategic collaboration with a 6-member executive team to organize project showcases, guest speaker events, and AI-focused competitions.`,
      `Coordinate and mentor student-led initiatives while fostering an engaging and collaborative learning environment for aspiring developers and technology enthusiasts.`
    ]
  },
  {
    title: 'Full-stack Developer',
    company: 'DuploHacks',
    startDate: 'Apr 2025',
    endDate: 'Feb 2026',
    location: 'Waterloo, Ontario',
    description: [
      `Collaborated with 3 cross-functional team members to design and prototype the frontend user experience in Figma, contributing to a modern and accessible event platform.`,
      `Developed and styled the 'About Me' and 'Sponsors' sections of the website using CSS, improving visual consistency and user engagement across the platform.`,
      `Contributed to frontend development workflows and UI implementation within a fast-paced hackathon organizing environment.`
    ]
  },
  {
    title: 'Software Engineer (Future Tech)',
    company: 'Nokia',
    startDate: 'Jul 2025',
    endDate: 'Aug 2025',
    location: 'Remote',
    description: [
      `Developed a centralized catalogue application managing 600+ assets for the Data Analyst team, improving documentation efficiency and accessibility by 200%.`,
      `Engineered automated Power Automate workflows and API integrations to synchronize Excel-based reporting data and distribute stakeholder notifications, reducing manual operational overhead.`,
      `Collaborated with a 10-member Data Analysis team to propose and implement performance improvements for the catalogue platform through iterative feedback and technical problem-solving.`,
      `Contributed to process optimization initiatives by streamlining internal data management and reporting operations within a large-scale enterprise environment.`
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
  const {dataLoaded, stars} = useAppState();

  if (!dataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <div id="Experience" className="flex flex-col justify-center items-center h-screen bg-linear-to-b from-midnightBlue to-tropicalBlue py-12 px-4">
      <h1 className="font-caveat text-white text-6xl md:text-8xl mb-8 z-10 text-center">
        Experiences
      </h1>
      <StarField starList={stars} reflect={false}/>
      <PlanetField/>
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