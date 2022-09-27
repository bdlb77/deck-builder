import * as Scry from "scryfall-sdk";

export interface Card  extends Scry.Card {
}
export interface Set {
  code: string;
  name: string;
  type: string;
  mkm_id: string
  releaseDate: string;
}


export const IpcChannels: { [key: string]: string } = {
  getCards: "getCards",
  getSets: "getSets",
}


export interface AppAPI {
  getCards: () => Promise<Card[]>;
  ping: () => void;
}
