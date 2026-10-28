// Array to store the products
// Get reference to the product list container. In a real project this information must be provided by a database or an API. For this example, we will contained in an array of product information.

let products =
[
  // Category: Pizzas
  {
    id: 1,
    name: "Margherita",
    description: "Classic pizza with tomato sauce, mozzarella and basil.",
    price: 10,
    category: "pizza",
    image: "assets/images/margherita.jpg",
    calories: 850
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Mozzarella cheese topped with spicy pepperoni.",
    price: 12,
    category: "pizza",
    image: "assets/images/pepperoni.jpg",
    calories: 1050
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions and mozzarella.",
    price: 14,
    category: "pizza",
    image: "assets/images/bbq-chicken.jpg",
    calories: 1100
  },
  {
    id: 4,
    name: "Hawaiian",
    description: "Ham, pineapple, mozzarella and tomato sauce.",
    price: 12,
    category: "pizza",
    image: "assets/images/hawaiian.jpg",
    calories: 980
  },
  {
    id: 5,
    name: "Four Cheese",
    description: "Mozzarella, cheddar, parmesan and blue cheese.",
    price: 14,
    category: "pizza",
    image: "assets/images/four-cheese.jpg",
    calories: 1200
  },
  {
    id: 6,
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, olives and sweetcorn.",
    price: 12,
    category: "pizza",
    image: "assets/images/veggie-supreme.jpg",
    calories: 900
  },
  {
    id: 7,
    name: "Meat Feast",
    description: "Pepperoni, sausage, bacon and ham.",
    price: 16,
    category: "pizza",
    image: "assets/images/meat-feast.jpg",
    calories: 1350
  },
  {
    id: 8,
    name: "Spicy Diablo",
    description: "Spicy salami, jalapeños, chilli flakes and mozzarella.",
    price: 14,
    category: "pizza",
    image: "assets/images/spicy-diablo.jpg",
    calories: 1150
  },
  {
    id: 9,
    name: "Chicken Pesto",
    description: "Grilled chicken, basil pesto, mozzarella and tomatoes.",
    price: 14,
    category: "pizza",
    image: "assets/images/chicken-pesto.jpg",
    calories: 1080
  },
  {
    id: 10,
    name: "Mushroom Truffle",
    description: "Mushrooms, truffle oil, mozzarella and parmesan.",
    price: 15,
    category: "pizza",
    image: "assets/images/mushroom-truffle.jpg",
    calories: 1020
  },
  {
    id: 11,
    name: "Mediterranean",
    description: "Feta cheese, olives, spinach and sun-dried tomatoes.",
    price: 13,
    category: "pizza",
    image: "assets/images/mediterranean.jpg",
    calories: 950
  },
  {
    id: 12,
    name: "Buffalo Chicken",
    description: "Buffalo chicken, mozzarella and ranch drizzle.",
    price: 15,
    category: "pizza",
    image: "assets/images/buffalo-chicken.jpg",
    calories: 1180
  },
  {
    id: 13,
    name: "Classic Marinara",
    description: "Tomato sauce, garlic, oregano and olive oil.",
    price: 9,
    category: "pizza",
    image: "assets/images/marinara.jpg",
    calories: 750
  },
  {
    id: 14,
    name: "Tuna Delight",
    description: "Tuna, red onions, sweetcorn and mozzarella.",
    price: 13,
    category: "pizza",
    image: "assets/images/tuna-delight.jpg",
    calories: 990
  },
  {
    id: 15,
    name: "Prosciutto Rocket",
    description: "Prosciutto, fresh rocket, parmesan and mozzarella.",
    price: 16,
    category: "pizza",
    image: "assets/images/prosciutto-rocket.jpg",
    calories: 1120
  },

 // Category: Sides

  {
    id: 16,
    name: "Garlic Bread",
    description: "Oven-baked bread with garlic butter.",
    price: 4,
    category: "side",
    image: "assets/images/garlic-bread.jpg",
    calories: 350
  },
  {
    id: 17,
    name: "Cheesy Garlic Bread",
    description: "Garlic bread topped with melted mozzarella.",
    price: 5,
    category: "side",
    image: "assets/images/cheesy-garlic-bread.jpg",
    calories: 480
  },
  {
    id: 18,
    name: "Chicken Wings",
    description: "Six crispy chicken wings with your choice of sauce.",
    price: 7,
    category: "side",
    image: "assets/images/chicken-wings.jpg",
    calories: 650
  },
  {
    id: 19,
    name: "Potato Wedges",
    description: "Seasoned potato wedges served with a dipping sauce.",
    price: 5,
    category: "side",
    image: "assets/images/potato-wedges.jpg",
    calories: 420
  },
  {
    id: 20,
    name: "Mozzarella Sticks",
    description: "Breaded mozzarella sticks served with marinara sauce.",
    price: 6,
    category: "side",
    image: "assets/images/mozzarella-sticks.jpg",
    calories: 520
  },
  {
    id: 21,
    name: "Onion Rings",
    description: "Crispy battered onion rings.",
    price: 4,
    category: "side",
    image: "assets/images/onion-rings.jpg",
    calories: 390
  },
  {
    id: 22,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan and Caesar dressing.",
    price: 6,
    category: "side",
    image: "assets/images/caesar-salad.jpg",
    calories: 320
  },
  {
    id: 23,
    name: "Greek Salad",
    description: "Tomatoes, cucumbers, olives, feta and red onions.",
    price: 6,
    category: "side",
    image: "assets/images/greek-salad.jpg",
    calories: 280
  },
  {
    id: 24,
    name: "Loaded Fries",
    description: "French fries topped with cheddar, bacon and spring onions.",
    price: 7,
    category: "side",
    image: "assets/images/loaded-fries.jpg",
    calories: 690
  },
  {
    id: 25,
    name: "Classic Fries",
    description: "Golden crispy French fries with sea salt.",
    price: 4,
    category: "side",
    image: "assets/images/classic-fries.jpg",
    calories: 370
  },
  {
    id: 26,
    name: "Coleslaw",
    description: "Shredded cabbage and carrots in creamy dressing.",
    price: 3,
    category: "side",
    image: "assets/images/coleslaw.jpg",
    calories: 220
  },
  {
    id: 27,
    name: "Jalapeño Poppers",
    description: "Jalapeños stuffed with cream cheese and fried.",
    price: 6,
    category: "side",
    image: "assets/images/jalapeno-poppers.jpg",
    calories: 460
  },
  {
    id: 28,
    name: "Chicken Nuggets",
    description: "Eight crispy chicken nuggets with dipping sauce.",
    price: 6,
    category: "side",
    image: "assets/images/chicken-nuggets.jpg",
    calories: 540
  },
  {
    id: 29,
    name: "Mac and Cheese",
    description: "Creamy macaroni with cheddar cheese sauce.",
    price: 7,
    category: "side",
    image: "assets/images/mac-and-cheese.jpg",
    calories: 610
  },
  {
    id: 30,
    name: "Garlic Dough Balls",
    description: "Soft pizza dough balls brushed with garlic butter.",
    price: 5,
    category: "side",
    image: "assets/images/garlic-dough-balls.jpg",
    calories: 440
  },

 // Category: Drinks

  {
    id: 31,
    name: "Coca-Cola",
    description: "Classic Coca-Cola, 330ml can.",
    price: 2,
    category: "drink",
    image: "assets/images/coca-cola.jpg",
    calories: 139
  },
  {
    id: 32,
    name: "Diet Coke",
    description: "Sugar-free Diet Coke, 330ml can.",
    price: 2,
    category: "drink",
    image: "assets/images/diet-coke.jpg",
    calories: 1
  },
  {
    id: 33,
    name: "Sprite",
    description: "Refreshing lemon-lime sparkling drink, 330ml.",
    price: 2,
    category: "drink",
    image: "assets/images/sprite.jpg",
    calories: 63
  },
  {
    id: 34,
    name: "Fanta Orange",
    description: "Sparkling orange-flavoured soft drink, 330ml.",
    price: 2,
    category: "drink",
    image: "assets/images/fanta-orange.jpg",
    calories: 63
  },
  {
    id: 35,
    name: "Still Water",
    description: "Refreshing still mineral water, 500ml.",
    price: 2,
    category: "drink",
    image: "assets/images/still-water.jpg",
    calories: 0
  },
  {
    id: 36,
    name: "Sparkling Water",
    description: "Carbonated mineral water, 500ml.",
    price: 2,
    category: "drink",
    image: "assets/images/sparkling-water.jpg",
    calories: 0
  },
  {
    id: 37,
    name: "Lemon Iced Tea",
    description: "Chilled black tea with lemon flavour.",
    price: 3,
    category: "drink",
    image: "assets/images/lemon-iced-tea.jpg",
    calories: 90
  },
  {
    id: 38,
    name: "Peach Iced Tea",
    description: "Refreshing iced tea with peach flavour.",
    price: 3,
    category: "drink",
    image: "assets/images/peach-iced-tea.jpg",
    calories: 95
  },
  {
    id: 39,
    name: "Orange Juice",
    description: "Freshly squeezed orange juice, 250ml.",
    price: 3,
    category: "drink",
    image: "assets/images/orange-juice.jpg",
    calories: 110
  },
  {
    id: 40,
    name: "Apple Juice",
    description: "Refreshing apple juice, 250ml.",
    price: 3,
    category: "drink",
    image: "assets/images/apple-juice.jpg",
    calories: 115
  },
  {
    id: 41,
    name: "Strawberry Milkshake",
    description: "Creamy milkshake blended with strawberries.",
    price: 5,
    category: "drink",
    image: "assets/images/strawberry-milkshake.jpg",
    calories: 380
  },
  {
    id: 42,
    name: "Chocolate Milkshake",
    description: "Rich chocolate ice cream blended with milk.",
    price: 5,
    category: "drink",
    image: "assets/images/chocolate-milkshake.jpg",
    calories: 420
  },
  {
    id: 43,
    name: "Vanilla Milkshake",
    description: "Classic vanilla ice cream blended with milk.",
    price: 5,
    category: "drink",
    image: "assets/images/vanilla-milkshake.jpg",
    calories: 390
  },
  {
    id: 44,
    name: "Lemonade",
    description: "Refreshing sparkling lemonade.",
    price: 3,
    category: "drink",
    image: "assets/images/lemonade.jpg",
    calories: 120
  },
  {
    id: 45,
    name: "Mango Smoothie",
    description: "Smooth tropical mango blended with fruit juice.",
    price: 5,
    category: "drink",
    image: "assets/images/mango-smoothie.jpg",
    calories: 240
  }
];

const productList = document.getElementById("product-list");
// Get references to the category and sort dropdowns
const categorySelect = document.getElementById("category-select");
const sortSelect = document.getElementById("sort-select");
// Get references to the cart elements and the total
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
// Get references to the modal form elements
const checkoutButton = document.getElementById("checkout-button");
const checkoutModal = document.getElementById("checkout-modal");
const modalTotal = document.getElementById("modal-total");
const cancelButton = document.getElementById("cancel-button");
// Checkout form and its fields
const checkoutForm = document.getElementById("checkout-form");
const fullNameInput = document.getElementById("full-name");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
// Get references to the modal confirmation elements
const confirmation = document.getElementById("confirmation");
const confirmName = document.getElementById("confirm-name");
const confirmPhone = document.getElementById("confirm-phone");
const confirmAddress = document.getElementById("confirm-address");
const confirmItems = document.getElementById("confirm-items");
const confirmTotal = document.getElementById("confirm-total");
const closeButton = document.getElementById("close-button");
const backButton = document.getElementById("back-button");
const confirmButton = document.getElementById("confirm-button");
const thankYou = document.getElementById("thank-you");
const thankYouName = document.getElementById("thank-you-name");

// Array to store the products added to the cart
let cart = [];

function displayProducts(category, sortBy) {
  productList.innerHTML = ""; // Clear previous list

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

  for (let index = 0; index < sortedProducts.length; index++) {

    let product = sortedProducts[index];

    // Skip products from other categories (unless "all" is selected)
    if (category !== "all" && product.category !== category) {
      continue;
    }

    const li = document.createElement("li");
    li.classList.add("product-card");
    // Since there are different elements to be displayed for each product, we use a template literal
    // to build the HTML structure of each card: image, name, description, price and calories.
    li.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="description">${product.description}</p>
      <p class="price">£${product.price.toFixed(2)}</p>
      <p class="calories">${product.calories} kcal</p>
    `;
// Create the "Add to cart" button for this product
    const button = document.createElement("button");
    button.classList.add("add-to-cart");
    button.textContent = "Add to cart";

    button.addEventListener("click", () => {
      addToCart(product);
    });

    li.appendChild(button);
    productList.appendChild(li);
  }

  console.log("Category:", category, "| Sort:", sortBy, "| Cards:", productList.children.length);
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

// Remove one unit of a product from the cart
function removeFromCart(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }

  renderCart();
}

//Compute the total price of all elements in the cart
//input: cart (array of objects with price and quantity)
//output: the total price of the cart (number)
function sumCart(cart) {
  let sum = 0;
  for (let item of cart) {
    sum += item.price * item.quantity;
  }
  return sum;
}
// Display the cart items and the total
function renderCart() {
  cartItems.innerHTML = ""; // Clear previous list

  for (let index = 0; index < cart.length; index++) {
    let item = cart[index];
    let subtotal = item.price * item.quantity;

    const li = document.createElement("li");
    li.textContent = `${item.quantity} × ${item.name} – £${subtotal.toFixed(2)} `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "−";
    removeButton.addEventListener("click", () => {
      removeFromCart(index);
    });

    li.appendChild(removeButton);
    cartItems.appendChild(li);
  }

  cartTotal.textContent = `£${sumCart(cart).toFixed(2)}`;
}

//Open the checkout form showing the cart total
//input: none (uses the cart array)
//output: none (shows the modal on the page)
function openCheckout() {
  // Don't open the form if there is nothing to buy
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  modalTotal.textContent = `£${sumCart(cart).toFixed(2)}`;
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
  confirmItems.innerHTML = ""; // Clear previous list
  for (let item of cart) {
    const li = document.createElement("li");

    const name = document.createElement("span");
    name.textContent = `${item.quantity} × ${item.name}`;

    const price = document.createElement("strong");
    price.textContent = `£${(item.price * item.quantity).toFixed(2)}`;

    li.appendChild(name);
    li.appendChild(price);
    confirmItems.appendChild(li);
  }
  confirmTotal.textContent = `£${sumCart(cart).toFixed(2)}`;

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
  cart = []; // empty the cart array
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
