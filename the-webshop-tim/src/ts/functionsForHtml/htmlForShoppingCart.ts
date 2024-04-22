import { IDummyProducts } from "../models/IDummyProducts";
import { addOneProductInShoppingCart } from "../shoppingCart/addOneProductInShoppingCart";
import { addProduct, cart } from "../shoppingCart/addProductToShoppingCart";
import { filterCartList } from "../shoppingCart/filterShoppingCartList";
import { removeProduct } from "../shoppingCart/removeProduct";
import { calculateTotalCost } from "../shoppingCart/totalCost";

export const shoppingCartContainer = document.getElementById(
  "cart-body-"
) as HTMLDivElement;

const totaleProducts = document.getElementById(
  "header__bottom-icon--amount"
) as HTMLDivElement;

export const totalPriceContainer = document.getElementById(
  "cart__footer__total"
) as HTMLDivElement;

export const createHtmlForShoppingCart = (
  theContainer: HTMLDivElement,
  priceTotalContainer: HTMLDivElement
) => {
  const productList = filterCartList(cart);

  if (productList.length === 0) {
    totaleProducts.innerHTML = "";
  }

  theContainer.innerHTML = "";

  const totalPrice: number = calculateTotalCost(productList);

  priceTotalContainer.innerHTML = `${totalPrice} kr`;

  const productContainer = document.createElement("article");
  productContainer.className = "productsContainer";

  for (let i = 0; i < productList.length; i++) {
    const productContainer = document.createElement("article");
    productContainer.className = "productsContainer";

    theContainer.appendChild(productContainer);

    const amountContainer = document.createElement("article");
    amountContainer.className = "amountContainer";

    const imgContainer = document.createElement("div");
    imgContainer.className = "cart-item";
    productContainer.appendChild(imgContainer);

    const img = document.createElement("img");
    img.src = productList[i].img;
    imgContainer.appendChild(img);

    const productInfoContainer = document.createElement("article");
    productInfoContainer.className = "productInfoContainer";
    productContainer.appendChild(productInfoContainer);
    productContainer.appendChild(amountContainer);

    const title = document.createElement("p");
    title.className = "product-name";
    title.innerHTML = productList[i].name;
    productInfoContainer.appendChild(title);

    const removeProductButton = document.createElement("button");
    amountContainer.appendChild(removeProductButton);
    removeProductButton.className = "fa-solid fa-minus";
    removeProductButton.id = "remove";
    removeProductButton.addEventListener("click", () => {
      removeProduct(productList, i, theContainer, priceTotalContainer);
    });

    const xProducts = document.createElement("p") as HTMLDivElement;
    xProducts.innerHTML = `${productList[i].amount}`;
    xProducts.className = "shopping-cart-xProducts";
    amountContainer.appendChild(xProducts);

    const addProductButton = document.createElement("button");
    addProductButton.className = "fa-solid fa-plus";
    addProductButton.id = "add";
    amountContainer.appendChild(addProductButton);
    addProductButton.addEventListener("click", () => {
      const product = addOneProductInShoppingCart(
        productList[i]
      ) as IDummyProducts;
      addProduct(product, priceTotalContainer);
      createHtmlForShoppingCart(theContainer, priceTotalContainer);
    });

    const totalPriceForXProducts = document.createElement("p");
    totalPriceForXProducts.className = "totalPriceForXProducts";
    totalPriceForXProducts.innerHTML = `${
      productList[i].price * productList[i].amount
    } kr`;
    productInfoContainer.appendChild(totalPriceForXProducts);

    totaleProducts.innerHTML = cart.length.toString();
  }
};
