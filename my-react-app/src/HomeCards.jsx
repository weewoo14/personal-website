function HomeCards(props) {
  return (
    <div className = "HomePageButton">
      <h1 className = {props.headername}> {props.title} </h1>
      <p className = {props.paragraphname} > {props.description} </p>
    </div>
  );
}

export default HomeCards