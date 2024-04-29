import { dummyProductList } from "../main";
import { CartProduct } from "../models/CartProduct";

export const addOneProductInShoppingCart = (product: CartProduct) => {
  for (let i = 0; i < dummyProductList.length; i++) {
    if (dummyProductList[i].id === product.id) {
      return dummyProductList[i];
    }
  }
};
