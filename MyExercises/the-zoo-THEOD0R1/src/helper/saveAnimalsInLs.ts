import { IAnimal } from "../models/IAnimal";

export const saveAnimalsInLs = (animals: IAnimal[]) => {
  localStorage.setItem("zooAnimals", JSON.stringify(animals));
};
