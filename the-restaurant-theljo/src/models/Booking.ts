export class Booking {
  constructor(
    public _id: string,
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customerId: string
  ) {}
}

export interface IBookingPut {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;
}
