import Nav from "../../components/Nav/Nav";
import { useLocation } from 'react-router-dom';
import { Card } from "~Common/interfaces";

const CardPage: React.FC = () => {
  const { state }: { state: Card} = useLocation();
  const { name, image_uris, oracle_text } = state || {};
  return (
    <>
      <Nav />
      <h1>Card Page. Name: {name}</h1>
      <img src={image_uris?.normal} alt={name} />
      <p>{oracle_text}</p>
    </>
  )
}

export default CardPage;
