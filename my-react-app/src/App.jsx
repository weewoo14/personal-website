import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import HomeCards from './HomeCards.jsx'
import HomeFooter from './HomeFooter.jsx';

function App() {
  return (
    <Router>
      <Routes>

        <Route path = "/home" element = {
          <>
            <Home/>

            <h1 className = "learnmore">
              Learn More About Me!
            </h1>

            <div className = "HomePageButtonDiv">
              <HomeCards idname = "Projects" headername = "ProjectsN" paragraphname = "ProjectsP" title = "Projects" description = "Learn about some of the cool projects I've worked on in the past!"/>
              <HomeCards idname = "Experience" headername = "ExperienceN" paragraphname = "ExperienceP" title = "Experience" description = "Learn about my professional experiences with others."/>
              <HomeCards idname = "Links" headername = "LinksN" paragraphname = "LinksP" title = "Links" description = "Other places you can find me!"/>
            </div>

            <HomeFooter/>
          </>
        }/>

        <Route path = "/projects" element = {<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App