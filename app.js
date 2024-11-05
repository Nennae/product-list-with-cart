import { fetchData } from "./data.js";

async function init() {
  const products = await fetchData();
  displayProducts(products);
}

function displayProducts(products) {
  const container = document.body;

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <img src="${product.image.desktop}" alt="${product.name} thumbnail" />
      <h2>${product.name}</h2>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button class="add-to-cart-btn" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
      <div class="quantity-controls" style="display: none;">
        <button class="decrease-btn">-</button>
        <span class="quantity" data-name="${product.name}">1</span>
        <button class="increase-btn">+</button>
      </div>
    `;
    container.appendChild(productDiv);
  });


  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', toggleQuantityControls);
  });

  function toggleQuantityControls(event) {
    const addButton = event.target;
    const quantityControls = addButton.nextElementSibling;
    const quantityDisplay = quantityControls.querySelector('.quantity');

    quantityControls.style.display = 'flex';
    addButton.style.display = 'none';

    quantityDisplay.textContent = 1;
  }

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('increase-btn')) {
      adjustQuantity(event, 1);
    } else if (event.target.classList.contains('decrease-btn')) {
      adjustQuantity(event, -1);
    }
  });

  function adjustQuantity(event, change) {
    const quantityDisplay = event.target.parentElement.querySelector('.quantity');
    const addButton = event.target.parentElement.previousElementSibling;

    let quantity = parseInt(quantityDisplay.textContent) + change;

    if (quantity <= 0) {
      quantityDisplay.parentElement.style.display = 'none';
      addButton.style.display = 'inline';
    } else {
      quantityDisplay.textContent = quantity;
    }
  }
}

init();
