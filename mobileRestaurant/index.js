import { menuArray } from "./data.js";

const mainSec = document.getElementById("main-sec");
const itemOrderSection = document.getElementById("itemOrder-section");
const checkOutSection = document.getElementById("checkout-section");
const totalPriceElement = document.querySelector(".total-price");
const modal = document.getElementById("modal");
const orderForm = document.getElementById("order-form");
const message = document.getElementById("message");

let totalPrice = 0;
let orderItems = {};

function renderMenu(menuArr = menuArray) {
  return menuArr
    .map(({ name, id, ingredients, price, emoji }) => {
      return `<div class="menu-section" id="${id}">
          <div class="menu-emoji">${emoji}</div>
          <div class="menu-item">
              <h2>${name}</h2>
              <p>${ingredients.join(", ")}</p> 
              <h3>$${price}</h3>
          </div>
          <div class="menu-add-btn" data-id="${id}">+</div>
      </div>`;
    })
    .join("");
}

mainSec.innerHTML = renderMenu(menuArray);

mainSec.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    handleAddMenu(e.target.dataset.id);
  }
});

function handleAddMenu(menuId) {
  const menuItem = menuArray.find((menu) => String(menu.id) === menuId);
  if (!menuItem) return;

  if (orderItems[menuId]) {
    orderItems[menuId].quantity++;
  } else {
    orderItems[menuId] = { ...menuItem, quantity: 1 };
  }

  totalPrice += menuItem.price;
  renderOrder();
}

checkOutSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    removeMenuItem(e.target.dataset.id);
  }
});

function removeMenuItem(menuId) {
  if (!orderItems[menuId]) return;

  orderItems[menuId].quantity--;
  totalPrice -= orderItems[menuId].price;

  if (orderItems[menuId].quantity <= 0) {
    delete orderItems[menuId];
  }

  renderOrder();
}

function renderOrder() {
  itemOrderSection.innerHTML = "";

  Object.values(orderItems).forEach((item) => {
    itemOrderSection.innerHTML += `
      <div class="item-order" id="order-${item.id}">
        <div class="order">
          <h3>${item.name} (${item.quantity})</h3>
          <span class="remove-btn" data-id="${item.id}">remove</span>
        </div>
        <h3>$${item.price * item.quantity}</h3>
      </div>
    `;
  });

  if (Object.keys(orderItems).length === 0) {
    checkOutSection.style.display = "none";
    totalPrice = 0;
  } else {
    checkOutSection.style.display = "flex";
  }

  updateTotalPrice();
}

function updateTotalPrice() {
  totalPriceElement.innerHTML = `<h3>Total price:</h3> <h3>$${totalPrice}</h3>`;
}

document.addEventListener("click", function (e) {
  if (e.target.id === "order-btn") {
    modal.style.display = "block";
  }
});

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formDataEl = new FormData(orderForm);
  const fullNameData = formDataEl.get("fullName").trim();
  const cardNumberData = formDataEl.get("cardNumber").trim();
  const cvvData = formDataEl.get("cvv").trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  const cardNumberRegex = /^\d{16}$/;
  const cvvRegex = /^\d{3,4}$/;

  if (!nameRegex.test(fullNameData)) {
    alert("Full name must contain only letters.");
    return;
  }
  if (!cardNumberRegex.test(cardNumberData)) {
    alert("Card number must be exactly 16 digits.");
    return;
  }
  if (!cvvRegex.test(cvvData)) {
    alert("CVV must be 3 or 4 digits.");
    return;
  }

  checkOutSection.style.display = "none";
  modal.style.display = "none";

  message.textContent = `Thanks, ${fullNameData}! Your order is on its way!`;
  message.style.display = "block";

  itemOrderSection.innerHTML = "";
  totalPrice = 0;
  updateTotalPrice();

  orderForm.reset();
});
