export class CartProduct {
  constructor(
    public id: number,
    public img: string,
    public name: string,
    public price: number,
    public amount: number
  ) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}
