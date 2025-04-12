import Home from './Home.jsx'
import HomeCards from './HomeCards.jsx'
import HomeFooter from './HomeFooter.jsx';

function App() {
  return (
    <>
      <Home/>

      <h1 className = "learnmore">
        Learn More About Me!
      </h1>

      <div className = "HomePageButtonDiv">
        <HomeCards headername = "Projects" paragraphname = "ProjectsP" title = "Projects" description = "Learn about some of the cool projects I've worked on in the past!"/>
        <HomeCards headername = "Projects" paragraphname = "ProjectsP" title = "Experience" description = "Learn about my professional experiences with others."/>
        <HomeCards headername = "Projects" paragraphname = "ProjectsP" title = "Links" description = "Other places you can find me!"/>
      </div>

      
      <HomeFooter/>
    </>
  );
}

export default App