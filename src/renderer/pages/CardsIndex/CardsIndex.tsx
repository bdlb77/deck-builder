import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom";
import { Card } from "~Common/interfaces"
import Nav from "../../components/Nav/Nav";
import PlayingCardList from "../../components/PlayingCards/PlayingCardList";
const CardsIndex = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const fetchCards = async (): Promise<void> => {
    try {
      const fetchedCards = await window.myAppAPI.getCards();
      setCards(fetchedCards);

    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchCards();
  }, [])

  return (
    <>
      <Nav />
      <PlayingCardList cards={cards}/>
    </>
  )
}

export default CardsIndex;
