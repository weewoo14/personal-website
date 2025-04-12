import { Link } from 'react-router-dom'
function BackToHome() {
  return (
    <div className = "BackToHomeComp">
      <Link to = "/" className = "BackToHomeLink"> Back To Home </Link>
    </div>
  );
}

export default BackToHome