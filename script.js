// Script for the whole site, loaded by every page.
// Part 1 builds the header and footer that all pages share.
// Part 2 runs only on the Order page.

// =========================================================
// Part 1: shared header and footer (every page)
// In a page, write <site-header></site-header> and <site-footer></site-footer>.
// These are "custom elements": tags we define ourselves. Each one replaces
// itself with the real <header> or <footer>, styled by base.css.
// =========================================================

// The links in the navigation. To add a page, add one line here.
const navigationLinks = [
  { text: "Home", href: "index.html" },
  { text: "Order", href: "order.html" },
  { text: "Contact", href: "contact.html" }
];

//Find the file name of the page you are on
//input: none (reads the current address)
//output: text, e.g. "order.html" (the homepage can also be just "/")
function getCurrentPage() {
  return location.pathname.split("/").pop() || "index.html";
}

//Create an element with a class and some text
//input: tag (e.g. "a"), className (text, can be empty), text (text, can be empty)
//output: the new element
function createElementWith(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

// <site-header>: logo and navigation
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const header = createElementWith("header", "site-header");

    const logo = createElementWith("a", "logo", "PizzaDelivery");
    logo.href = "index.html";

    const nav = document.createElement("nav");
    const list = createElementWith("ul", "nav-list");

    for (let link of navigationLinks) {
      const item = document.createElement("li");
      const anchor = createElementWith("a", "", link.text);
      anchor.href = link.href;

      // Mark the page you are on, so it shows as the white pill
      if (link.href === getCurrentPage()) {
        anchor.setAttribute("aria-current", "page");
      }

      item.appendChild(anchor);
      list.appendChild(item);
    }

    nav.appendChild(list);
    header.append(logo, nav);
    this.replaceWith(header);
  }
}

// <site-footer>: copyright line
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const footer = createElementWith("footer", "site-footer");
    const year = new Date().getFullYear(); // updates itself every new year
    footer.appendChild(createElementWith("p", "", `© ${year} PizzaDelivery. All rights reserved.`));
    this.replaceWith(footer);
  }
}

// Register the new tags (custom element names must contain a hyphen)
customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

// =========================================================
// Part 2: Order page
// The list of products ("products") comes from database.js, which order.html loads before this file.
// On the other pages these elements don't exist, so the variables are simply null.
// =========================================================

// Get references to the product list and the dropdowns
const productList = document.getElementById("product-list");
const categorySelect = document.getElementById("category-select");
const sortSelect = document.getElementById("sort-select");
// Get references to the cart elements and the total
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
// Get references to the modal elements
const checkoutButton = document.getElementById("checkout-button");
const checkoutModal = document.getElementById("checkout-modal");
const cancelButton = document.getElementById("cancel-button");
// Checkout form and its fields
const checkoutForm = document.getElementById("checkout-form");
const fullNameInput = document.getElementById("full-name");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
// Get references to the review and thank-you screens
const confirmation = document.getElementById("confirmation");
const confirmName = document.getElementById("confirm-name");
const confirmPhone = document.getElementById("confirm-phone");
const confirmAddress = document.getElementById("confirm-address");
const confirmItems = document.getElementById("confirm-items");
const confirmTotal = document.getElementById("confirm-total");
const backButton = document.getElementById("back-button");
const confirmButton = document.getElementById("confirm-button");
const closeButton = document.getElementById("close-button");
const thankYou = document.getElementById("thank-you");
const thankYouName = document.getElementById("thank-you-name");
// Templates in order.html for the repeated items
const productCardTemplate = document.getElementById("product-card-template");
const cartItemTemplate = document.getElementById("cart-item-template");
const summaryItemTemplate = document.getElementById("summary-item-template");

// Array to store the products added to the cart
let cart = [];

//Format a number as a price in pounds
//input: amount (number), e.g. 12
//output: text, e.g. "£12.00"
function formatPrice(amount) {
  return `£${amount.toFixed(2)}`;
}

//Find how many units of a product are in the cart
//input: productId (number)
//output: the quantity (number), 0 if the product is not in the cart
function getQuantity(productId) {
  const cartItem = cart.find(item => item.id === productId);
  return cartItem ? cartItem.quantity : 0;
}

//Make a copy of a <template> from order.html
//input: template (a <template> element)
//output: the copied element, ready to fill in and add to the page
function copyTemplate(template) {
  return template.content.firstElementChild.cloneNode(true);
}

//Build one product card from the template
//input: product (object from database.js)
//output: the finished <li class="product-card"> element
function createProductCard(product) {
  const card = copyTemplate(productCardTemplate);
  // Remember which product this card shows, so updateSteppers() can find it
  card.dataset.productId = product.id;

  // Fill in the text and the photo
  card.querySelector(".product-name").textContent = product.name;
  card.querySelector(".product-description").textContent = product.description;
  card.querySelector(".product-calories").textContent = `Calories: ${product.calories}`;
  card.querySelector(".product-price").textContent = formatPrice(product.price);

  const image = card.querySelector(".product-image");
  image.src = product.image;
  image.alt = product.name;

  // Connect the stepper buttons and name them for screen readers
  const minusButton = card.querySelector(".stepper-minus");
  const plusButton = card.querySelector(".stepper-plus");
  minusButton.setAttribute("aria-label", `Remove one ${product.name}`);
  plusButton.setAttribute("aria-label", `Add one ${product.name}`);
  minusButton.addEventListener("click", () => removeOneFromCart(product.id));
  plusButton.addEventListener("click", () => addToCart(product));

  return card;
}

//Show the products of one category, sorted
//input: category (text, e.g. "pizza"), sortBy (text, e.g. "price-asc")
//output: none (fills the product list on the page)
function displayProducts(category, sortBy) {
  productList.replaceChildren(); // Clear previous list

  // Make a copy so the original products array keeps its order
  let sortedProducts = [...products];

  // Sort the copy depending on the selected option
  if (sortBy === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "calories-asc") {
    sortedProducts.sort((a, b) => a.calories - b.calories);
  } else if (sortBy === "calories-desc") {
    sortedProducts.sort((a, b) => b.calories - a.calories);
  } else if (sortBy === "name") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  for (let product of sortedProducts) {
    // Skip products from other categories (unless "all" is selected)
    if (category !== "all" && product.category !== category) {
      continue;
    }

    productList.appendChild(createProductCard(product));
  }

  updateSteppers(); // show the quantities already in the cart
}

function updateProducts() {
  displayProducts(categorySelect.value, sortSelect.value);
}

// Add a product to the cart (or increase its quantity if it's already there)
function addToCart(product) {
  let existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  renderCart();
}

// Remove one unit of a product from the cart (used by the − button on the cards)
function removeOneFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) {
    return;
  }

  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }

  renderCart();
}

// Remove a product completely from the cart (used by the × button in the cart)
function removeAllFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

//Compute the total price of all elements in the cart
//input: items (array of objects with price and quantity)
//output: the total price (number)
function sumCart(items) {
  let sum = 0;
  for (let item of items) {
    sum += item.price * item.quantity;
  }
  return sum;
}

// Display the cart items and the total
function renderCart() {
  cartItems.replaceChildren(); // Clear previous list

  for (let item of cart) {
    const row = copyTemplate(cartItemTemplate);
    row.querySelector(".cart-item-text").textContent =
      `${item.quantity} × ${item.name} – ${formatPrice(item.price * item.quantity)}`;

    const removeButton = row.querySelector(".cart-item-remove");
    removeButton.setAttribute("aria-label", `Remove ${item.name} from the basket`);
    removeButton.addEventListener("click", () => removeAllFromCart(item.id));

    cartItems.appendChild(row);
  }

  cartTotal.textContent = formatPrice(sumCart(cart));
  updateSteppers();
}

// Update the quantity shown on every product card to match the cart
function updateSteppers() {
  const cards = document.querySelectorAll(".product-card");

  for (let card of cards) {
    const quantity = getQuantity(Number(card.dataset.productId));

    card.querySelector(".stepper-value").textContent = quantity;
    // The − button can't go below zero
    card.querySelector(".stepper-minus").disabled = quantity === 0;
  }
}

//Open the checkout form
//input: none (uses the cart array)
//output: none (shows the modal on the page)
function openCheckout() {
  // Don't open the form if there is nothing to buy
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  checkoutModal.showModal();
}

//Read the form data and show the review screen with the products and the customer's details
//input: event (the submit event of the form)
//output: none (shows the review screen)
function showReview(event) {
  event.preventDefault(); // Stop the form from reloading the page

  // Read what the user typed (trim removes spaces at the start and end)
  let fullName = fullNameInput.value.trim();
  let phone = phoneInput.value.trim();
  let address = addressInput.value.trim();

  // "required" doesn't stop fields that only contain spaces, so check again
  if (fullName === "" || phone === "" || address === "") {
    alert("Please fill in all the fields.");
    return;
  }

  // List of products: one row per item, name on the left and price on the right
  confirmItems.replaceChildren(); // Clear previous list
  for (let item of cart) {
    const row = copyTemplate(summaryItemTemplate);
    row.querySelector(".summary-item-name").textContent = `${item.quantity} × ${item.name}`;
    row.querySelector(".summary-item-price").textContent = formatPrice(item.price * item.quantity);
    confirmItems.appendChild(row);
  }
  confirmTotal.textContent = formatPrice(sumCart(cart));

  // List of customer details
  confirmName.textContent = fullName;
  confirmAddress.textContent = address;
  confirmPhone.textContent = phone;

  // Switch screens: hide the form, show the review
  checkoutForm.hidden = true;
  confirmation.hidden = false;
}

//Go back from the review to the form, keeping what the user typed
//input: none
//output: none
function backToForm() {
  confirmation.hidden = true;
  checkoutForm.hidden = false;
}

//Place the order: empty the cart and show the thank-you screen
//input: none
//output: none
function placeOrder() {
  thankYouName.textContent = confirmName.textContent;

  // The order is placed, so empty the cart
  cart = [];
  renderCart(); // redraws the cart on the page

  // Switch screens: hide the review, show the thank-you message
  confirmation.hidden = true;
  thankYou.hidden = false;
}

//Put the modal back to its starting state (empty form visible, other screens hidden)
//input: none
//output: none
function resetCheckout() {
  checkoutForm.reset();
  checkoutForm.hidden = false;
  confirmation.hidden = true;
  thankYou.hidden = true;
}

// Only the Order page has a product list, so only there do we connect the buttons
if (productList) {
  categorySelect.addEventListener("change", updateProducts);
  sortSelect.addEventListener("change", updateProducts);
  checkoutButton.addEventListener("click", openCheckout);
  cancelButton.addEventListener("click", () => checkoutModal.close());
  checkoutForm.addEventListener("submit", showReview);
  backButton.addEventListener("click", backToForm);
  confirmButton.addEventListener("click", placeOrder);
  closeButton.addEventListener("click", () => checkoutModal.close());
  checkoutModal.addEventListener("close", resetCheckout);

  updateProducts(); // show products on page load
}