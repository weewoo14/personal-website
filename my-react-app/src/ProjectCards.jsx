function ProjectCards(props) {
  const idtoexternallink = {
    "message-tracker": "https://github.com/weewoo14/meeting-tracker",
    "toucan-gacha-game-simulator":"https://github.com/weewoo14/Toucan-Gacha-Simulator",
    "algorithm-visualiser":"https://github.com/weewoo14/Graph-Theory-Algorithm-Visualiser",
    "personal-website":"https://github.com/weewoo14/personal-website",
    "sudoku-solver":"https://github.com/weewoo14/Sudoku-Solver",
    "particle-simulator":"https://github.com/weewoo14/Particle-Simulator"
  };

  function goToExternalLink(idname) {
    window.open(idtoexternallink[idname], '_blank');
  }

  return (
    <div id = {props.idname} className = "ProjectsPageButton" onClick = {() => goToExternalLink(props.idname)}>
      <img className = "ProjectCardImg" src = {props.img} alt = {props.imglat} ></img>
      <h1 className = "ProjectCardHeader"> {props.title} </h1>
      <p className = "ProjectCardPara" > {props.description} </p>
      <p className = "ProjectCardPara" > Technologies: {props.skills} </p>
    </div>
  );
}

export default ProjectCards