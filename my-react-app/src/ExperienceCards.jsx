function ExperienceCards(props) {

  const jobTitleToLink = {
    "computer-science-club-president": "https://lhss.csclub.tech/dashboard",
    "hackathon-member"  : "https://www.jamhacks.ca/",
    "stemcamp-cit": "https://stemcamp.ca/summer-camp-jobs/counsellor-in-training-cit/"
  }

  function goToJobPost(idname) {
    window.open(jobTitleToLink[idname], '_blank')
  }

  return (
    <div id = {props.idname} className = "ExperiencePageButton">
      <h1 className = "ExperienceCardHeader" onClick={() => goToJobPost(props.idname)}> {props.title} </h1>
      <p className = "ExperienceCardPara"> {props.description} </p>
      <p className = "ExperienceCardPara"> Time: {props.time} </p>
    </div>
  );
}

export default ExperienceCards