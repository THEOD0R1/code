export const showShoppingCart = () => {
  const cart = document.getElementById("cartContainer") as HTMLDivElement;
  cart.classList.add("show");
};

export const closeShoppingCard = () => {
  const removeCart = document.getElementById("cartContainer") as HTMLElement;
  removeCart.classList.remove("show");
};
