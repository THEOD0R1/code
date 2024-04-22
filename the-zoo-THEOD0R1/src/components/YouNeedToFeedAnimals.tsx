import { IAnimal } from "../models/IAnimal";
import { needToFeedAnimals } from "../helper/needToFeedAnimals";
import { Link } from "react-router-dom";

interface IYouNeedToFeedAnimalsProps {
  animals: IAnimal[];
}

export const YouNeedToFeedAnimals = ({
  animals,
}: IYouNeedToFeedAnimalsProps) => {
  const needToFeedList = needToFeedAnimals(animals, 4);

  return (
    <section className="hungry__animals__container">
      <h1 className="home__hunger__status">
        {needToFeedList.length > 0
          ? "Du behöver mata:"
          : " Du har matat alla djur"}
      </h1>
      <article className="hungry_animals__container">
        <ul className="hungry_animals__ul">
          {needToFeedList.map((animal) => {
            return (
              <li className="hungry_animals__li" key={animal.id}>
                <Link to={"/animal/" + animal.id}>{animal.name}</Link>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
