import { DateTime } from "luxon";

import { IAnimal } from "../models/IAnimal";

export const isTheAnimalHungry = (
  hungryAfterXHours: number,
  animal: IAnimal
) => {
  const needToFeedAnimals = DateTime.fromISO(animal.lastFed.toString()).plus({
    hours: hungryAfterXHours,
  });

  if (DateTime.now() > needToFeedAnimals) {
    return true;
  } else {
    return false;
  }
};
