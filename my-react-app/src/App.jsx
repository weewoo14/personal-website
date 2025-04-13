import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './Home.jsx'
import HomeCards from './HomeCards.jsx'
import HomeFooter from './HomeFooter.jsx';
import ProjectCards from './ProjectCards.jsx'
import BackToHome from './BackToHome.jsx'
import PageTitle from './PageTitle.jsx'
import ExperienceCards from './ExperienceCards.jsx'
import LinksCards from './LinksCards.jsx';

import toucanimg from './assets/toucan.png'
import treeimg from './assets/tree.png'
import personalwebsiteimg from './assets/personalwebsite.png'
import sudokusolverimg from './assets/sudokusolver.png'
import particlesimulatorimg from './assets/particlesimulator.png'

function App() {
  return (
    <Router>
      <Routes>

        <Route path = "/" element = {
          <>
            <Home/>

            <h1 className = "learnmore">
              Learn More About Me!
            </h1>

            <div className = "HomePageButtonDiv">
              <HomeCards idname = "Projects" title = "Projects" description = "Learn about some of the cool projects I've worked on in the past!"/>
              <HomeCards idname = "Experience" title = "Experience" description = "Learn about my professional experiences with others."/>
              <HomeCards idname = "Links" title = "Links" description = "Other places you can find me!"/>
            </div>

            <HomeFooter/>
          </>
        }/>

        <Route path = "/projects" element = {
          <>
            <PageTitle title = "Projects" />
            <BackToHome/>

            <div className = "ProjectsPageButtonDiv">
              <ProjectCards idname = "meeting-tracker" img = "https://cdn.discordapp.com/embed/avatars/1.png" imgalt = "Discord Default Pfp" title = "Meeting Tracker" description = "Made to efficiently track meetings, and look at upcoming meetings." skills = "discord.js, Discord API, JavaScript"/>
              <ProjectCards idname = "toucan-gacha-game-simulator" img = {toucanimg} imgalt = "Toucan Card"  title = "Toucan Gacha Game Simulator" description = "Made to track user psychology under the effects of gambling using gacha games." skills = "PyGame, Human Psychology, Game Theory"/>
              <ProjectCards idname = "algorithm-visualiser" img = {treeimg} title = "Algorithm Visualiser" imgalt = "A CS tree" description = "Made to help CS Club members visualise difficult graph theory algorithms, and how they work." skills = "Data Structures and Algorithms, PyGame"/>
            </div>

            <div className = "ProjectsPageButtonDiv">
              <ProjectCards idname = "personal-website" img = {personalwebsiteimg} imgalt = "Personal Website Image" title = "Personal Website" description = "Made to showcase my personal projects, experiences, and other social links to the world." skills = "React.js, HTML, CSS"/>
              <ProjectCards idname = "sudoku-solver" img = {sudokusolverimg} imgalt = "Sudoku Solver Image" title = "Sudoku Solver" description = "Made to be able to solve sudokus very efficiently, with a friendly UI." skills = "PyGame, Data Structures and Algorithms, Math"/>
              <ProjectCards idname = "particle-simulator" img = {particlesimulatorimg} imgalt = "Particle Simulator Img" title = "Particle Simulator" description = "Made as an entry for CS Club's Nuit Blanche art showcase." skills = "PyGame"/>
            </div>

            <HomeFooter/>
          </>
        }></Route>
        <Route path = "/experience" element = {
          <>
            <PageTitle title = "Experience"/>
            <BackToHome/>

            <div className = "ExperiencePageButtonDiv">
              <ExperienceCards idname = "computer-science-club-president" title = "Computer Science Club President" description = "Leading and teaching weekly lectures on computer science topics to 100+ club members, strengthening and improving their skillsets towards real-world technology." time = "June 2024 - Present"/>
              <ExperienceCards idname = "hackathon-member" title = "Hackathon Member" description = "Avid member of hackathons, having attended HawkHacks and JamHacks 8. Built apps such as my Toucan Gacha Game Simulator, improving and bettering the lives of gambling addicts." time = "May 2024 - Present"/>
              <ExperienceCards idname = "stemcamp-cit" title = "STEMCamp Counsellor-In-Training" description = "Engaged with 60+ campers to experience STEM-related hands-on and digital activities including modeeling Earth's core with clay, and simulating the solar system with block-based programming." time = "June 2024 - August 2024"/>
            </div>

          </>
        }></Route>
        <Route path = "/links" element = {
          <>
            <PageTitle title = "Links"/>
            <BackToHome/>

            <div className = "LinksPageButtonDiv">
              <LinksCards idname = "LinkedIn" title = "LinkedIn" description = "Over 200+ connections on LinkedIn. Come connect with me if you haven't!"/>
              <LinksCards idname = "DMOJ" title = "DMOJ" description = "Over 800+ problems solved with topics ranging from simple math to binary-indexed trees."/>
            </div>

          </>
        }></Route>

      </Routes>
    </Router>
  );
}

export default App