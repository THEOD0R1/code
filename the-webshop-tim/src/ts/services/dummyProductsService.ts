import { IDummyJson } from "../models/IDummyProduct";
import { IDummyProducts } from "../models/IDummyProducts";
import { get } from "./serviceBase";

export const getDummyProducts = async (): Promise<IDummyProducts[]> => {
  const response = await get<IDummyJson>("https://dummyjson.com/products/");
  return response.products;
};
