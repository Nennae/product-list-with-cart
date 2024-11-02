import { fetchData } from "./data.js";

async function init() {
  const products = await fetchData();
  console.log("Fetched products:", products);
  displayProducts(products);
}

function displayProducts(products) {
  console.log("Products in displayProducts:", products);
  const container = document.body;

  products.forEach((product) => {
    console.log("Current product:", product);
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
    <img src="${product.image.desktop}" alt="${product.name} thumbnail" />
      <h2>${product.name}</h2>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    container.appendChild(productDiv);
  });
}

init();
