import { CartProduct } from "../models/CartProduct";

export const calculateTotalCost = (productList: CartProduct[]) => {
  let totalPrice = 0;
  for (let i = 0; i < productList.length; i++) {
    totalPrice = totalPrice + productList[i].amount * productList[i].price;
  }
  return totalPrice;
};
