import { createHtmlForProducts } from "../functionsForHtml/createHtmlForProducts";
import {
  checkoutTotalPrice,
  clearDummyContainer,
} from "../functionsForHtml/htmlForCheckout";
import { closeNav } from "../functionsForHtml/slideInMenu";
import { openNavigation } from "../main";
import { IDummyProducts } from "../models/IDummyProducts";

const productsContainer = document.getElementById(
  "dummyProductsContainer"
) as HTMLDivElement;

export const navigation = async (
  categoriesContainer: HTMLDivElement,
  categories: IDummyProducts[]
) => {
  categoriesContainer.innerHTML = "";

  const filterdCategories = categories.filter(
    (product, index) =>
      categories.findIndex((item) => item.category === product.category) ===
      index
  );

  for (let i = 0; i < filterdCategories.length; i++) {
    const categorieContainer = document.createElement("li");
    categoriesContainer.appendChild(categorieContainer);
    categorieContainer.className = "header__list";

    const categorie = document.createElement("a");
    categorie.innerHTML = filterdCategories[i].category;
    categorie.className = "header__link";
    categorie.addEventListener("click", () => {
      const navList = categories.filter((categorieList) =>
        categorieList.category.includes(filterdCategories[i].category)
      );
      if (clearDummyContainer.classList.contains("clicked-style")) {
        clearDummyContainer.classList.remove("clicked-style");
      }
      checkoutTotalPrice.innerHTML = "";
      createHtmlForProducts(productsContainer, navList);
      closeNav(openNavigation);
    });
    categorieContainer.appendChild(categorie);
  }
};
