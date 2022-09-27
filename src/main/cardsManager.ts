import { Card } from "~Common/interfaces";
import * as Scry from "scryfall-sdk";




export const getCards = async (): Promise<Scry.Card[]> => {

  const commanderBaldurGateSet = await Scry.Sets.byCode("CLB");
  const cards = await commanderBaldurGateSet.getCards();

  // const card: Scry.Card = cards[0]
  return cards;

}

