import { menuArray } from "./data.js";

const mainSec = document.getElementById("main-sec");
const itemOrderSection = document.getElementById("itemOrder-section");
const checkOutSection = document.getElementById("checkout-section");
const totalPriceElement = document.querySelector(".total-price");
const modal = document.getElementById("modal");
const orderForm = document.getElementById("order-form");
const message = document.getElementById("message");

let totalPrice = 0;

function renderMenu(menuArr = menuArray) {
  return menuArr
    .map((menu) => {
      const { name, id, ingredients, price, emoji } = menu;
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

// Add menu item to ordered menu list
mainSec.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    handleAddMenu(e.target.dataset.id);
  }
});

function handleAddMenu(menuId) {
  const menuItem = menuArray.find((menu) => String(menu.id) === menuId);
  if (!document.getElementById(`order-${menuItem.id}`)) {
    itemOrderSection.innerHTML += `<div class="item-order" id="order-${menuItem.id}">
               <div class="order">
                  <h3>${menuItem.name}</h3>
                  <span class="remove-btn" data-id="${menuItem.id}">remove</span>
              </div>
              <h3>$${menuItem.price}</h3>
          </div>`;
    checkOutSection.style.display = "flex";
    totalPrice += menuItem.price;
    updateTotalPrice();
  }
}

// Remove menu item from menu list
checkOutSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    removeMenuItem(e.target.dataset.id);
  }
});

function removeMenuItem(menuId) {
  const menuItem = menuArray.find((menu) => String(menu.id) === menuId);
  if (!menuItem) return;

  const orderItem = document.getElementById(`order-${menuId}`);
  if (orderItem) {
    orderItem.remove();
    totalPrice -= menuItem.price;
    updateTotalPrice();
  }

  if (itemOrderSection.children.length === 0) {
    totalPrice = 0;
    updateTotalPrice();
  }
}

function updateTotalPrice() {
  totalPriceElement.innerHTML = `<h3>Total:</h3> <h3>$${totalPrice}</h3>`;
}

// Display the modal
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

  // Hide checkout section and modal
  checkOutSection.style.display = "none";
  modal.style.display = "none";

  // Show success message
  message.textContent = `Thanks, ${fullNameData}! Your order is on its way!`;
  message.style.display = "block";

  // Clear order items
  itemOrderSection.innerHTML = "";
  totalPrice = 0;
  updateTotalPrice();

  // Reset form fields
  orderForm.reset();
});
