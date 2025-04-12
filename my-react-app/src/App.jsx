import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Home.jsx'
import HomeCards from './HomeCards.jsx'
import HomeFooter from './HomeFooter.jsx';
import ProjectCards from './ProjectCards.jsx'
import BackToHome from './BackToHome.jsx'
import PageTitle from './PageTitle.jsx'

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
              <ProjectCards idname = "message-tracker" img = "https://cdn.discordapp.com/embed/avatars/1.png" imgalt = "Discord Default Pfp" title = "Message Tracker" description = "Made to efficiently track meetings, and look at upcoming meetings." skills = "discord.js, Discord API, JavaScript"/>
              <ProjectCards idname = "toucan-gacha-game-simulator" img = {toucanimg} title = "Toucan Gacha Game Simulator"  imgalt = "Toucan Card" description = "Made to track user psychology under the effects of gambling using gacha games." skills = "PyGame, Human Psychology, Game Theory"/>
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
          </>
        }></Route>
        <Route path = "/links" element = {<Home/> }></Route>

      </Routes>
    </Router>
  );
}

export default App