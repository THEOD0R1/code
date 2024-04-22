import { closeShoppingCard } from "../shoppingCart/cart";

import { createHtmlForPurchase } from "./htmlForPurchase";
import { createHtmlForShoppingCart } from "./htmlForShoppingCart";

export const clearDummyContainer = document.getElementById(
  "dummyProductsContainer"
) as HTMLDivElement;

export const checkoutTotalPrice = document.getElementById(
  "checkout__total__price"
) as HTMLDivElement;

export const checkoutTotal = document.createElement("div");

export const createHtmlForCheckout = () => {
  clearDummyContainer.classList.add("clicked-style");
  checkoutTotalPrice.classList.add("clicked-style");

  checkoutTotalPrice.innerHTML = "";
  closeShoppingCard();

  const checkoutContainer = document.createElement("article");
  checkoutContainer.className = "checkoutContainer";
  checkoutTotalPrice.appendChild(checkoutContainer);

  const checkoutText = document.createElement("p");
  checkoutText.id = "totalPriceTitel";
  checkoutText.innerHTML = "Total";
  checkoutContainer.appendChild(checkoutText);

  const checkoutTotal = document.createElement("p");
  createHtmlForShoppingCart(clearDummyContainer, checkoutTotal);
  checkoutContainer.appendChild(checkoutTotal);

  const checkoutBuyButton = document.createElement("button");
  checkoutBuyButton.innerHTML = "Slutför köp";
  checkoutBuyButton.id = "checkoutBuyButton";
  checkoutTotalPrice.appendChild(checkoutBuyButton);

  checkoutBuyButton.addEventListener("click", () => {
    checkoutTotalPrice.innerHTML = "";
    createHtmlForPurchase();
  });
};
