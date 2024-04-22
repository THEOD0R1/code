import { Booking } from "../models/Booking";
import { get } from "./serviceBase";

export const getOneBooking = async (bookingId: string) => {
  const response: Booking[] = await get(
    "https://school-restaurant-api.azurewebsites.net/booking/" + bookingId
  );

  return response;
};
