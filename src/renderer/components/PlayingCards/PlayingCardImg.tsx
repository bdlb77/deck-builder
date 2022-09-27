

import {
  Link
} from 'react-router-dom';
import { Card } from '~Common/interfaces';


interface Props {

  card: Card;
}
const PlayingCardImg: React.FC<Props> = ({ card }) => {
  return (
    <Link to={`/cards/${card.id}`} state={{...card}}>
      <img src={card.image_uris?.small} alt={card.name} />
    </Link>
  )
}


export default PlayingCardImg;
