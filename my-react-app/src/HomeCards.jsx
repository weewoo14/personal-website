function logWorks(name) {
  console.log(name);
}

function HomeCards(props) {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  let rootCSS = document.querySelector(":root");
  rootCSS.style.setProperty(1470, windowWidth);

  return (
    <div id = {props.idname} className = "HomePageButton" onClick={() => logWorks(props.idname)}>
      <h1 className = {props.headername}> {props.title} </h1>
      <p className = {props.paragraphname} > {props.description} </p>
    </div>
  );
}

export default HomeCards