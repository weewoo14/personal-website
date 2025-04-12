function ExperienceCards(props) {
  return (
    <div className = "ExperiencePageButton">
      <h1 className = "ExperienceCardHeader"> {props.title} </h1>
      <p className = "ExperienceCardPara"> {props.description} </p>
      <p className = "ExperienceCardPara"> Time: {props.time} </p>
    </div>
  );
}

export default ExperienceCards