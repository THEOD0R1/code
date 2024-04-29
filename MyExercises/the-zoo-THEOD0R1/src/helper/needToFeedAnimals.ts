import { DateTime } from "luxon";
import { IAnimal } from "../models/IAnimal";

export const needToFeedAnimals = (
  animals: IAnimal[],
  alertAfterXHours: number
) => {
  if (animals) {
    const needToFeedAnimals = animals?.filter((animal) => {
      const timeToFeed = DateTime.fromISO(animal.lastFed?.toString()).plus({
        hours: alertAfterXHours,
      });

      if (DateTime.now() > timeToFeed) {
        return animal;
      }
    });

    return needToFeedAnimals;
  } else return [];
};
