import { useState } from "react";
import { PresentAnimal } from "../components/PresentAnimal";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import { IAnimal } from "../models/IAnimal";
import { saveAnimalsInLs } from "../helper/saveAnimalsInLs";
import { isTheAnimalHungry } from "../helper/isTheAnimalHungry";

export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal>();

  const { animalId } = useParams();

  const savedAnimals = localStorage.getItem("zooAnimals");
  const animals: IAnimal[] = savedAnimals ? JSON.parse(savedAnimals) : null;

  const filterdAnimal = animals.filter((animal) => {
    return animal.id.toString() === animalId;
  });

  if (!animal) {
    setAnimal(filterdAnimal[0]);
  }

  const feedAnimal = () => {
    if (isTheAnimalHungry(3, animal!) === true) {
      setAnimal({ ...filterdAnimal[0], isFed: true, lastFed: DateTime.now() });

      const updatedList = animals.map((animal) => {
        if (animal.id.toString() === animalId) {
          return { ...animal, isFed: true, lastFed: DateTime.now() };
        } else {
          return animal;
        }
      });
      saveAnimalsInLs(updatedList);
    }
  };

  return (
    <>
      {animal ? (
        <PresentAnimal feedAnimal={feedAnimal} animal={animal} />
      ) : (
        "No animal found"
      )}
    </>
  );
};
