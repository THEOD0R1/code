import { SyntheticEvent } from "react";
import { IAnimal } from "../models/IAnimal";
import { isTheAnimalHungry } from "../helper/isTheAnimalHungry";
import noImage from "./../assets/gray_picture.png";

interface IPresentAnimalProps {
  animal: IAnimal;
  feedAnimal: () => void;
}

export const PresentAnimal = ({ animal, feedAnimal }: IPresentAnimalProps) => {
  const handleFeeding = () => {
    feedAnimal();
  };
  return (
    <>
      <article className="animal__information">
        <div className="animal__information__img_container">
          <img
            src={animal.imageUrl}
            alt="An animal"
            onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = noImage;
            }}
          />
        </div>
        <h2 className="animal__information__name">{animal.name}</h2>
        <p className="animal__information__last_fed">
          Senast matad {animal.lastFed?.toString()}
        </p>
        <button onClick={handleFeeding}>
          {isTheAnimalHungry(3, animal!) ? "Mata Djur" : "Inte Hungrig"}
        </button>
        <p className="animal__information__description">
          {animal.longDescription}
        </p>
      </article>
    </>
  );
};
