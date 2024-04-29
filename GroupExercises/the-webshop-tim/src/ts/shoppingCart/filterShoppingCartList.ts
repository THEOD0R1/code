import { CartProduct } from "../models/CartProduct";

export const filterCartList = (theList: CartProduct[]) => {
  const filterd = theList.filter(
    (product, index) =>
      theList.findIndex((item) => item.id === product.id) === index
  );
  const filterdList = filterd.sort((a, b) => a.id - b.id);

  return filterdList;
};
