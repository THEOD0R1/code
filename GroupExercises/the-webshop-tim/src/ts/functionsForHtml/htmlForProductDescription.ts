import { IDummyProducts } from "../models/IDummyProducts";
import { addProduct } from "../shoppingCart/addProductToShoppingCart";
import { clearDummyContainer } from "./htmlForCheckout";
import { totalPriceContainer } from "./htmlForShoppingCart";

export const createHtmlForProductDescription = (
  clearContainer: HTMLDivElement,
  productList: IDummyProducts[],
  listPostion: number
) => {
  clearContainer.innerHTML = "";

  const arrowBack = document.createElement("article");
  arrowBack.className = "arrowBack";
  arrowBack.innerHTML =
    '<a href="header"><i id="arrowBackIcon" class="fa-solid fa-left-long"></i><a>';
  clearDummyContainer.appendChild(arrowBack);

  const listPosX = productList[listPostion];

  const container = document.createElement("article");
  container.className = "infoProduct";
  clearContainer.appendChild(container);

  const imgsContainer = document.createElement("article");
  imgsContainer.className = "imgsContainer";
  container.appendChild(imgsContainer);

  const bigImgDiv = document.createElement("div");
  imgsContainer.appendChild(bigImgDiv).className = "bigImgDiv";

  const imgContainer = document.createElement("div");
  imgContainer.className = "imgContainer";
  imgsContainer.appendChild(imgContainer);

  for (let c = 0; c < listPosX.images.length; c++) {
    const img = document.createElement("img");
    img.className = "productImg";
    img.src = listPosX.images[c];
    imgContainer.appendChild(img);

    img.addEventListener("click", () => {
      const tempSrc = bigImg.src;
      bigImg.src = img.src;
      img.src = tempSrc;
    });
  }

  const bigImg = document.createElement("img");
  bigImg.className = "bigImg";
  bigImg.src = listPosX.images[0];
  bigImgDiv.appendChild(bigImg);

  const buyContainer = document.createElement("div");
  buyContainer.className = "buyContainer";
  const title = document.createElement("h2");
  title.innerHTML = listPosX.title;
  title.className = "productTitle";
  buyContainer.appendChild(title);

  const description = document.createElement("p");
  description.innerHTML = listPosX.description;
  buyContainer.appendChild(description);

  container.appendChild(buyContainer);

  const price = document.createElement("p");
  price.innerHTML = `${10 * listPosX.price} kr`;
  price.className = "productPrice";
  buyContainer.appendChild(price);

  const stock = document.createElement("p");
  stock.className = "productInStock";
  stock.innerHTML = `${listPosX.stock} st. i lager`;
  buyContainer.appendChild(stock);

  const buyButton = document.createElement("button");
  buyButton.innerHTML = "Lägg i kundvagn";
  buyButton.className = "buyButton";
  buyButton.addEventListener("click", () => {
    addProduct(listPosX, totalPriceContainer);
  });
  buyContainer.appendChild(buyButton);
};
