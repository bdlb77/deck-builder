import React from 'react'
import styled from 'styled-components';
import { Card } from '~Common/interfaces'
import PlayingCardImg from './PlayingCardImg';

type PlayingCardListProps =  {
  cards: Card[];
}

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

`
const PlayingCardList: React.FC<PlayingCardListProps> = ({cards}) => {
  return (
    <StyledList>
      {cards.map((card: Card) => (
          <PlayingCardImg key={card.id} card={card} />
      ))}
    </StyledList>
  )
}

export default PlayingCardList;
