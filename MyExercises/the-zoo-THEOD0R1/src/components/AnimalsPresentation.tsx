import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { SyntheticEvent } from "react";
import noImage from "./../assets/gray_picture.png";
import { isTheAnimalHungry } from "../helper/isTheAnimalHungry";

interface IAnimalsPresentationProps {
  animal: IAnimal;
}

export const AnimalsPresentation = ({ animal }: IAnimalsPresentationProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/animal/" + animal.id);
  };

  return (
    <>
      <section className="animal__card">
        <div className="animal__card__image_container">
          <img
            src={animal?.imageUrl}
            alt="An animal"
            onError={(event: SyntheticEvent<HTMLImageElement, Event>) => {
              event.currentTarget.src = noImage;
            }}
          />
        </div>
        <h2>{animal?.name}</h2>
        <p
          className={
            isTheAnimalHungry(4, animal) ? "hungryAnimal" : "notHungryAnimal"
          }
        >
          Status: {isTheAnimalHungry(4, animal) ? "Hungrig" : "Inte hungrig"}
        </p>
        <p>{animal?.shortDescription}</p>
        <button onClick={handleClick}>Vissa mer</button>
      </section>
    </>
  );
};
