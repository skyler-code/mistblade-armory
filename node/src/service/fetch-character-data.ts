import fetchFromTauri from "./base-api";
import { Endpoints } from "../../enums";
import { CharacterSheet } from "character-sheet";

export interface Params {
  cn: string;
}

const getCharSheet = (name: string) => {
  return fetchFromTauri<Params, CharacterSheet>(Endpoints.CharSheet, {
    cn: name
  });
};

export default getCharSheet;
