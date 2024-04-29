import { useEffect, useState } from "react";
import { YouNeedToFeedAnimals } from "../components/YouNeedToFeedAnimals";
import { getAnimals } from "../services/zooService";
import { IAnimal } from "../models/IAnimal";
import { saveAnimalsInLs } from "../helper/saveAnimalsInLs";

export const Home = () => {
  const savedAnimals = localStorage.getItem("zooAnimals");
  const [animals, setAnimals] = useState<IAnimal[]>(
    savedAnimals ? JSON.parse(savedAnimals) : null
  );

  useEffect(() => {
    if (animals) return;

    const getData = async () => {
      const zooAnimals = await getAnimals();

      if (shouldUpdate) {
        setAnimals(zooAnimals);
      }
    };

    let shouldUpdate = true;

    getData();
    return () => {
      shouldUpdate = false;
    };
  });

  saveAnimalsInLs(animals);

  return <>{<YouNeedToFeedAnimals animals={animals} />}</>;
};
