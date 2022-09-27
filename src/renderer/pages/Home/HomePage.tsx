import { Link } from "react-router-dom"
import Nav from "../../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <h1>Home Page</h1>
    </>
  )
}

export default HomePage;
