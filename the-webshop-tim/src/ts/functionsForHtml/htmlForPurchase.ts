import { cart } from "../shoppingCart/addProductToShoppingCart";
import {
  createHtmlForShoppingCart,
  shoppingCartContainer,
  totalPriceContainer,
} from "./htmlForShoppingCart";

export const clearDummyContainer = document.getElementById(
  "dummyProductsContainer"
) as HTMLDivElement;

export const createHtmlForPurchase = () => {
  clearDummyContainer.innerHTML = "";

  while (cart.length > 0) {
    cart.pop();
  }

  const thanksForPurchase = document.createElement("h2");
  thanksForPurchase.className = "thanksForPurchase";
  thanksForPurchase.innerHTML = "Tack för ditt köp!";
  clearDummyContainer.appendChild(thanksForPurchase);

  createHtmlForShoppingCart(shoppingCartContainer, totalPriceContainer);

  localStorage.setItem(`cart`, JSON.stringify(cart));
};
