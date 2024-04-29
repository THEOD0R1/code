import { DateTime } from "luxon";

export interface IAnimal {
  id: number;
  imageUrl: string;
  name: string;
  shortDescription: string;
  isFed: boolean;
  lastFed: DateTime;
  longDescription: string;
}
