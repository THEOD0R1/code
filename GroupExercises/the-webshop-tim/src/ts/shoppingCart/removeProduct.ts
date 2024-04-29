import { createHtmlForShoppingCart } from "../functionsForHtml/htmlForShoppingCart";
import { CartProduct } from "../models/CartProduct";
import { cart } from "./addProductToShoppingCart";
import { countProduct } from "./countProduct";

export const removeProduct = (
  productList: CartProduct[],
  listPosition: number,
  theContainer: HTMLDivElement,
  priceTotalContainer: HTMLDivElement
) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productList[listPosition].id) {
      cart.splice(i, 1);

      countProduct(cart);
      createHtmlForShoppingCart(theContainer, priceTotalContainer);
      localStorage.setItem(`cart`, JSON.stringify(cart));
      return;
    }
  }
};
