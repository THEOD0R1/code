import { Customer } from "../models/Customer";
import { get } from "./serviceBase";

export const getCustomerBooking = async (customerID: string) => {
  const response: Customer[] = await get(
    "https://school-restaurant-api.azurewebsites.net/customer/" + customerID
  );

  return response;
};
