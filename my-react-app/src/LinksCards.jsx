function LinksCards(props) {
  const sociallinks = {
    "LinkedIn": "https://www.linkedin.com/in/haoshi-wu-weewoo14/",
    "DMOJ": "https://dmoj.ca/user/weewoo14"
  }

  function goToSocialLink(idname) {
    window.open(sociallinks[idname], "_blank")
  }

  return (
    <div id = {props.idname} className = "LinksPageButton" onClick = {() => goToSocialLink(props.idname)}>
      <h1 className = "LinksCardHeader"> {props.title} </h1>
      <p className = "LinksCardPara"> {props.description} </p>

    </div>
  );
}

export default LinksCards