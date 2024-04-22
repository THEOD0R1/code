import { createHtmlForProducts } from "../functionsForHtml/createHtmlForProducts";
import {
  checkoutTotalPrice,
  clearDummyContainer,
} from "../functionsForHtml/htmlForCheckout";
import { IDummyProducts } from "../models/IDummyProducts";
import { getDummyProducts } from "../services/dummyProductsService";

const productList: IDummyProducts[] = await getDummyProducts();

const productsContainer = document.getElementById(
  "dummyProductsContainer"
) as HTMLDivElement;

export const searchForProducts = () => {
  const userInput = (document.getElementById("userInput") as HTMLInputElement)
    .value;

  if (userInput.length === 0) {
    return;
  }

  const searchList = productList.filter((productList) =>
    productList.title.toLowerCase().includes(userInput.toLowerCase())
  );

  (document.getElementById("userInput") as HTMLInputElement).value = "";

  if (clearDummyContainer.classList.contains("clicked-style")) {
    clearDummyContainer.classList.remove("clicked-style");
  }

  checkoutTotalPrice.innerHTML = "";
  createHtmlForProducts(productsContainer, searchList);
};
