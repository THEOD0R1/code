import { ChangeEvent, FormEvent, createContext } from "react";
import { RESTAURANT_ID } from "../services/bookingsService";
import { IPostBooking } from "../models/IPostBooking";
import { ICheckBooking } from "../models/ICheckBooking";
import { IError } from "../models/IError";

export interface IBookingContext {
  booking: IPostBooking;
  checkbooking: ICheckBooking;
  error: IError;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCheckTime: (e: FormEvent) => void;
  reserve: (e: FormEvent) => void;
  handleSelectTime: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const BookingContext = createContext<IBookingContext>({
  booking: {
    date: "",
    numberOfGuests: 0,
    restaurantId: RESTAURANT_ID,
    time: "",
    customer: { name: "", lastname: "", email: "", phone: "" },
  },
  checkbooking: {
    availabletable18: true,
    availabletable21: true,
  },
  error: {
    title: "",
    message: "",
    modalerror: false,
  },

  handleChange: () => {},
  handleCheckTime: () => {},
  reserve: () => {},
  handleSelectTime: () => {},
});
