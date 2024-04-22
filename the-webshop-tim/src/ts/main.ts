import "./../scss/style.scss";
import { createHtmlForProducts } from "./functionsForHtml/createHtmlForProducts";
import { searchForProducts } from "./searchForProducts/findeProduct";
import { getDummyProducts } from "./services/dummyProductsService";
import { openNav } from "./functionsForHtml/slideInMenu";
import { closeNav } from "./functionsForHtml/slideInMenu";
import {
  createHtmlForShoppingCart,
  shoppingCartContainer,
  totalPriceContainer,
} from "./functionsForHtml/htmlForShoppingCart";
import { closeShoppingCard, showShoppingCart } from "./shoppingCart/cart";

import { createHtmlForCheckout } from "./functionsForHtml/htmlForCheckout";
import { navigation } from "./searchForProducts/navigation";

document.getElementById("shopping-bag")?.addEventListener("click", () => {
  showShoppingCart();
});
document.getElementById("checkoutClose")?.addEventListener("click", () => {
  closeShoppingCard();
});

const productsContainer = document.getElementById(
  "dummyProductsContainer"
) as HTMLDivElement;

export const dummyProductList = await getDummyProducts();

createHtmlForProducts(productsContainer, dummyProductList);

document.getElementById("search")?.addEventListener("submit", (e) => {
  e.preventDefault();
  searchForProducts();
});

const openNavButton = document.getElementById(
  "hambButton"
) as HTMLButtonElement;
const closeNavButton = document.getElementById("closeNav") as HTMLButtonElement;
export const openNavigation = document.getElementById(
  "dropDown"
) as HTMLElement;

openNavButton.addEventListener("click", () => {
  openNav(openNavigation);
});

closeNavButton.addEventListener("click", () => {
  closeNav(openNavigation);
});

document.getElementById("shopping-bag")?.addEventListener("click", () => {
  createHtmlForShoppingCart(shoppingCartContainer, totalPriceContainer);
});

document.getElementById("checkout")?.addEventListener("click", () => {
  createHtmlForCheckout();
});

const navigationContainer = document.getElementById(
  "headerListWrapper"
) as HTMLDivElement;

navigation(navigationContainer, dummyProductList);

createHtmlForShoppingCart(shoppingCartContainer, totalPriceContainer);
