const products = [
  // Category: Pizzas
  {
    id: 1,
    name: "Margherita",
    description: "Classic pizza with tomato sauce, mozzarella and basil.",
    price: 10,
    category: "pizza",
    image: "images/margherita.jpg",
    calories: 850
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Mozzarella cheese topped with spicy pepperoni.",
    price: 12,
    category: "pizza",
    image: "images/pepperoni.jpg",
    calories: 1050
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions and mozzarella.",
    price: 14,
    category: "pizza",
    image: "images/bbq-chicken.jpg",
    calories: 1100
  },
  {
    id: 4,
    name: "Hawaiian",
    description: "Ham, pineapple, mozzarella and tomato sauce.",
    price: 12,
    category: "pizza",
    image: "images/hawaiian.jpg",
    calories: 980
  },
  {
    id: 5,
    name: "Four Cheese",
    description: "Mozzarella, cheddar, parmesan and blue cheese.",
    price: 14,
    category: "pizza",
    image: "images/four-cheese.jpg",
    calories: 1200
  },
  {
    id: 6,
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, olives and sweetcorn.",
    price: 12,
    category: "pizza",
    image: "images/veggie-supreme.jpg",
    calories: 900
  },
  {
    id: 7,
    name: "Meat Feast",
    description: "Pepperoni, sausage, bacon and ham.",
    price: 16,
    category: "pizza",
    image: "images/meat-feast.jpg",
    calories: 1350
  },
  {
    id: 8,
    name: "Spicy Diablo",
    description: "Spicy salami, jalapeños, chilli flakes and mozzarella.",
    price: 14,
    category: "pizza",
    image: "images/spicy-diablo.jpg",
    calories: 1150
  },
  {
    id: 9,
    name: "Chicken Pesto",
    description: "Grilled chicken, basil pesto, mozzarella and tomatoes.",
    price: 14,
    category: "pizza",
    image: "images/chicken-pesto.jpg",
    calories: 1080
  },
  {
    id: 10,
    name: "Mushroom Truffle",
    description: "Mushrooms, truffle oil, mozzarella and parmesan.",
    price: 15,
    category: "pizza",
    image: "images/mushroom-truffle.jpg",
    calories: 1020
  },
  {
    id: 11,
    name: "Mediterranean",
    description: "Feta cheese, olives, spinach and sun-dried tomatoes.",
    price: 13,
    category: "pizza",
    image: "images/mediterranean.jpg",
    calories: 950
  },
  {
    id: 12,
    name: "Buffalo Chicken",
    description: "Buffalo chicken, mozzarella and ranch drizzle.",
    price: 15,
    category: "pizza",
    image: "images/buffalo-chicken.jpg",
    calories: 1180
  },
  {
    id: 13,
    name: "Classic Marinara",
    description: "Tomato sauce, garlic, oregano and olive oil.",
    price: 9,
    category: "pizza",
    image: "images/marinara.jpg",
    calories: 750
  },
  {
    id: 14,
    name: "Tuna Delight",
    description: "Tuna, red onions, sweetcorn and mozzarella.",
    price: 13,
    category: "pizza",
    image: "images/tuna-delight.jpg",
    calories: 990
  },
  {
    id: 15,
    name: "Prosciutto Rocket",
    description: "Prosciutto, fresh rocket, parmesan and mozzarella.",
    price: 16,
    category: "pizza",
    image: "images/prosciutto-rocket.jpg",
    calories: 1120
  },

 // Category: Sides

  {
    id: 16,
    name: "Garlic Bread",
    description: "Oven-baked bread with garlic butter.",
    price: 4,
    category: "side",
    image: "images/garlic-bread.jpg",
    calories: 350
  },
  {
    id: 17,
    name: "Cheesy Garlic Bread",
    description: "Garlic bread topped with melted mozzarella.",
    price: 5,
    category: "side",
    image: "images/cheesy-garlic-bread.jpg",
    calories: 480
  },
  {
    id: 18,
    name: "Chicken Wings",
    description: "Six crispy chicken wings with your choice of sauce.",
    price: 7,
    category: "side",
    image: "images/chicken-wings.jpg",
    calories: 650
  },
  {
    id: 19,
    name: "Potato Wedges",
    description: "Seasoned potato wedges served with a dipping sauce.",
    price: 5,
    category: "side",
    image: "images/potato-wedges.jpg",
    calories: 420
  },
  {
    id: 20,
    name: "Mozzarella Sticks",
    description: "Breaded mozzarella sticks served with marinara sauce.",
    price: 6,
    category: "side",
    image: "images/mozzarella-sticks.jpg",
    calories: 520
  },
  {
    id: 21,
    name: "Onion Rings",
    description: "Crispy battered onion rings.",
    price: 4,
    category: "side",
    image: "images/onion-rings.jpg",
    calories: 390
  },
  {
    id: 22,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan and Caesar dressing.",
    price: 6,
    category: "side",
    image: "images/caesar-salad.jpg",
    calories: 320
  },
  {
    id: 23,
    name: "Greek Salad",
    description: "Tomatoes, cucumbers, olives, feta and red onions.",
    price: 6,
    category: "side",
    image: "images/greek-salad.jpg",
    calories: 280
  },
  {
    id: 24,
    name: "Loaded Fries",
    description: "French fries topped with cheddar, bacon and spring onions.",
    price: 7,
    category: "side",
    image: "images/loaded-fries.jpg",
    calories: 690
  },
  {
    id: 25,
    name: "Classic Fries",
    description: "Golden crispy French fries with sea salt.",
    price: 4,
    category: "side",
    image: "images/classic-fries.jpg",
    calories: 370
  },
  {
    id: 26,
    name: "Coleslaw",
    description: "Shredded cabbage and carrots in creamy dressing.",
    price: 3,
    category: "side",
    image: "images/coleslaw.jpg",
    calories: 220
  },
  {
    id: 27,
    name: "Jalapeño Poppers",
    description: "Jalapeños stuffed with cream cheese and fried.",
    price: 6,
    category: "side",
    image: "images/jalapeno-poppers.jpg",
    calories: 460
  },
  {
    id: 28,
    name: "Chicken Nuggets",
    description: "Eight crispy chicken nuggets with dipping sauce.",
    price: 6,
    category: "side",
    image: "images/chicken-nuggets.jpg",
    calories: 540
  },
  {
    id: 29,
    name: "Mac and Cheese",
    description: "Creamy macaroni with cheddar cheese sauce.",
    price: 7,
    category: "side",
    image: "images/mac-and-cheese.jpg",
    calories: 610
  },
  {
    id: 30,
    name: "Garlic Dough Balls",
    description: "Soft pizza dough balls brushed with garlic butter.",
    price: 5,
    category: "side",
    image: "images/garlic-dough-balls.jpg",
    calories: 440
  },

 // Category: Drinks

  {
    id: 31,
    name: "Coca-Cola",
    description: "Classic Coca-Cola, 330ml can.",
    price: 2,
    category: "drink",
    image: "images/coca-cola.jpg",
    calories: 139
  },
  {
    id: 32,
    name: "Diet Coke",
    description: "Sugar-free Diet Coke, 330ml can.",
    price: 2,
    category: "drink",
    image: "images/diet-coke.jpg",
    calories: 1
  },
  {
    id: 33,
    name: "Sprite",
    description: "Refreshing lemon-lime sparkling drink, 330ml.",
    price: 2,
    category: "drink",
    image: "images/sprite.jpg",
    calories: 63
  },
  {
    id: 34,
    name: "Fanta Orange",
    description: "Sparkling orange-flavoured soft drink, 330ml.",
    price: 2,
    category: "drink",
    image: "images/fanta-orange.jpg",
    calories: 63
  },
  {
    id: 35,
    name: "Still Water",
    description: "Refreshing still mineral water, 500ml.",
    price: 2,
    category: "drink",
    image: "images/still-water.jpg",
    calories: 0
  },
  {
    id: 36,
    name: "Sparkling Water",
    description: "Carbonated mineral water, 500ml.",
    price: 2,
    category: "drink",
    image: "images/sparkling-water.jpg",
    calories: 0
  },
  {
    id: 37,
    name: "Lemon Iced Tea",
    description: "Chilled black tea with lemon flavour.",
    price: 3,
    category: "drink",
    image: "images/lemon-iced-tea.jpg",
    calories: 90
  },
  {
    id: 38,
    name: "Peach Iced Tea",
    description: "Refreshing iced tea with peach flavour.",
    price: 3,
    category: "drink",
    image: "images/peach-iced-tea.jpg",
    calories: 95
  },
  {
    id: 39,
    name: "Orange Juice",
    description: "Freshly squeezed orange juice, 250ml.",
    price: 3,
    category: "drink",
    image: "images/orange-juice.jpg",
    calories: 110
  },
  {
    id: 40,
    name: "Apple Juice",
    description: "Refreshing apple juice, 250ml.",
    price: 3,
    category: "drink",
    image: "images/apple-juice.jpg",
    calories: 115
  },
  {
    id: 41,
    name: "Strawberry Milkshake",
    description: "Creamy milkshake blended with strawberries.",
    price: 5,
    category: "drink",
    image: "images/strawberry-milkshake.jpg",
    calories: 380
  },
  {
    id: 42,
    name: "Chocolate Milkshake",
    description: "Rich chocolate ice cream blended with milk.",
    price: 5,
    category: "drink",
    image: "images/chocolate-milkshake.jpg",
    calories: 420
  },
  {
    id: 43,
    name: "Vanilla Milkshake",
    description: "Classic vanilla ice cream blended with milk.",
    price: 5,
    category: "drink",
    image: "images/vanilla-milkshake.jpg",
    calories: 390
  },
  {
    id: 44,
    name: "Lemonade",
    description: "Refreshing sparkling lemonade.",
    price: 3,
    category: "drink",
    image: "images/lemonade.jpg",
    calories: 120
  },
  {
    id: 45,
    name: "Mango Smoothie",
    description: "Smooth tropical mango blended with fruit juice.",
    price: 5,
    category: "drink",
    image: "images/mango-smoothie.jpg",
    calories: 240
  }
];