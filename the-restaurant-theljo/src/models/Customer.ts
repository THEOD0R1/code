export class Customer {
  constructor(
    public _id: string,
    public name: string,
    public lastname: string,
    public email: string,
    public phone: string
  ) {}
}

export interface ICustomerPut {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
}
