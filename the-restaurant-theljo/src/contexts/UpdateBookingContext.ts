import { ChangeEvent, createContext } from "react";
import { ICustomerPut } from "../models/Customer";
import { IBookingPut } from "../models/Booking";

export interface IUpdateBookingContext {
  bookingPut: IBookingPut;
  customerPut: ICustomerPut;
  handleBookingChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCustomerChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const UpdateBookingContext = createContext<IUpdateBookingContext>({
  bookingPut: {
    id: "",
    time: "",
    numberOfGuests: 0,
    date: "",
    customerId: "",
    restaurantId: "",
  },
  customerPut: {
    id: "",
    name: "",
    lastname: "",
    phone: "",
    email: "",
  },
  handleBookingChange: () => {},
  handleCustomerChange: () => {},
  handleSelectChange: () => {},
});
