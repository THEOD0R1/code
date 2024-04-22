import axios from "axios";
import { Booking, IBookingPut } from "../models/Booking";
import { get } from "./serviceBase";
import { IPostBooking } from "../models/IPostBooking";

import { ICustomerPut } from "../models/Customer";

export const RESTAURANT_ID = import.meta.env.VITE_RESTAURANTID;

export const getBookings = async () => {
  const response: Booking[] = await get(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/" +
      RESTAURANT_ID
  );

  return response;
};

export const postBooking = (obj: IPostBooking) => {
  axios.post(
    "https://school-restaurant-api.azurewebsites.net/booking/create",
    obj
  );
};
export const deleteBooking = (bookingId: string) => {
  axios.delete(
    "https://school-restaurant-api.azurewebsites.net/booking/delete/" +
      bookingId
  );
};

export const putBooking = (bookingId: string, updatedBooking: IBookingPut) => {
  axios.put(
    "https://school-restaurant-api.azurewebsites.net/booking/update/" +
      bookingId,
    updatedBooking
  );
};

export const putCostumer = (
  customerId: string,
  updatedCustomer: ICustomerPut
) => {
  axios.put(
    "https://school-restaurant-api.azurewebsites.net/customer/update/" +
      customerId,
    updatedCustomer
  );
};
