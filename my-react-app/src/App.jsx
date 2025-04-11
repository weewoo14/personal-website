import Home from './Home.jsx'
import HomeCards from './HomeCards.jsx'

function App() {
  return (
    <>
      <Home/>
      <div className = "HomePageButtonDiv">
        <HomeCards headername = "Projects" paragraphname = "ProjectsP" title = "Projects" description = "Learn about some of the cool projects I've worked on in the past!"/>
        <HomeCards headername = "Projects" paragraphname = "ProjectsP" title = "Projects" description = "Learn about some of the cool projects I've worked on in the past!"/>
        <HomeCards headername = "Projects" paragraphname = "ProjectsP" title = "Projects" description = "Learn about some of the cool projects I've worked on in the past!"/>
        
      </div>
    </>
  );
}

export default App