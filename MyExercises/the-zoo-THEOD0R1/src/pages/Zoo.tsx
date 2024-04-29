import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { AnimalsPresentation } from "../components/AnimalsPresentation";
import { saveAnimalsInLs } from "../helper/saveAnimalsInLs";
import { isTheAnimalHungry } from "../helper/isTheAnimalHungry";

export const Zoo = () => {
  const savedAnimals = localStorage.getItem("zooAnimals");
  const [animals, setAnimals] = useState<IAnimal[]>(
    savedAnimals ? JSON.parse(savedAnimals) : null
  );

  // const timeToEat = () => {
  //   setAnimals(isTheAnimalHungry(3, animals));
  // };

  saveAnimalsInLs(animals);

  return (
    <>
      {animals?.map((animal) => (
        <AnimalsPresentation key={animal.id} animal={animal} />
      ))}
    </>
  );
};
