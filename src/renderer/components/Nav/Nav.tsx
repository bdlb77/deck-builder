import { Link } from "react-router-dom"

const Nav: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp;|&nbsp;
      <Link to="/cards">All Cards</Link>
      &nbsp;|&nbsp;
    </nav>
  )
}

export default Nav;
