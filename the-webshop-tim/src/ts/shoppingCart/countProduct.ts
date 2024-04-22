import { CartProduct } from "../models/CartProduct";
import { cart } from "./addProductToShoppingCart";
import { filterCartList } from "./filterShoppingCartList";

export const countProduct = (cartList: CartProduct[]) => {
  const filterShoppingCartList = filterCartList(cart);
  for (let c = 0; c < filterShoppingCartList.length; c++) {
    let productCounter = 0;
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === filterShoppingCartList[c].id) {
        productCounter++;
      }
    }
    filterShoppingCartList[c].amount = productCounter;
  }
};
