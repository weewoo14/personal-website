import {useNavigate} from 'react-router-dom'

function HomeCards(props) {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  let rootCSS = document.querySelector(":root");
  rootCSS.style.setProperty(1470, windowWidth);

  const idtolink = {
    "Projects": "/projects",
    "Experience": "/experience",
    "Links": "/links"
  };

  const navigate = useNavigate();
  const goToPage = (pagename) => {
    navigate(idtolink[pagename])
  }

  return (
    <div id = {props.idname} className = "HomePageButton" onClick={() => goToPage(props.idname)}>
      <h1 className = "HomeCardHeader"> {props.title} </h1>
      <p className = "HomeCardPara" > {props.description} </p>
    </div>
  );
}

export default HomeCards