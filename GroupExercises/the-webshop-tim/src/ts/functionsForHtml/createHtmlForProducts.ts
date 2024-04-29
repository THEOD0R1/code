import { IDummyProducts } from "../models/IDummyProducts";
import { createHtmlForProductDescription } from "./htmlForProductDescription";

export const createHtmlForProducts = (
  productsContainer: HTMLDivElement,
  productList: IDummyProducts[]
) => {
  productsContainer.innerHTML = "";

  for (let i = 0; i < productList.length; i++) {
    const productContainer = document.createElement("article");
    productContainer.className = "productContainer";
    productsContainer.appendChild(productContainer);
    productContainer.addEventListener("click", () => {
      createHtmlForProductDescription(productsContainer, productList, i);
    });

    const imgContainer = document.createElement("div");
    imgContainer.className = "product__container__img";
    productContainer.appendChild(imgContainer);

    const thumbnail = document.createElement("img");
    thumbnail.src = productList[i].thumbnail;
    imgContainer.appendChild(thumbnail);

    const infoContainer = document.createElement("div");
    infoContainer.className = "product__container__info";
    productContainer.appendChild(infoContainer);

    const title = document.createElement("h4");
    title.innerHTML = productList[i].title;
    infoContainer.appendChild(title);

    const price = document.createElement("p");
    price.innerHTML = `${(10 * productList[i].price).toString()} kr`;
    infoContainer.appendChild(price);
  }
};
