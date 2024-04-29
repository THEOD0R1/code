import {
  createHtmlForShoppingCart,
  shoppingCartContainer,
} from "../functionsForHtml/htmlForShoppingCart";
import { lsListObj } from "../localStorage/localStorage";
import { CartProduct } from "../models/CartProduct";
import { IDummyProducts } from "../models/IDummyProducts";
import { countProduct } from "./countProduct";

export const cart: CartProduct[] = lsListObj || [];

export const addProduct = (
  productInfo: IDummyProducts,
  priceTotalContainer: HTMLDivElement
) => {
  const cartProduct = new CartProduct(
    productInfo.id,
    productInfo.thumbnail,
    productInfo.title,
    productInfo.price * 10,
    1
  );
  cart.push(cartProduct);
  countProduct(cart);
  createHtmlForShoppingCart(shoppingCartContainer, priceTotalContainer);
  localStorage.setItem(`cart`, JSON.stringify(cart));
};
