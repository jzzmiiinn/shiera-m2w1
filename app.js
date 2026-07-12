// Question 2 — Shopping Cart Total (Person 2)
// Scenario: You are building the checkout summary of a tiny online shop.

// Step-by-step requirements:

// Create a const array called cart. Each item is an object with name (string), price (number), and quantity (number). Add exactly these 4 items:
// "apple", price 10, quantity 3
// "bread", price 25, quantity 1
// "milk", price 18, quantity 2
// "chocolate", price 55, quantity 1
// Write a regular function itemTotal(item) that returns price * quantity for one item.
// Write an arrow function formatItem that uses object destructuring to pull out name, price, and quantity, and returns a template literal like: `APPLE x3 = 30 birr` — the item name must be .toUpperCase().
// Use .map() to format every cart item, then print each line with a for...of loop.
// Use .filter() to find items that cost more than 20 birr per unit and print how many there are.
// Use .reduce() to compute the grand total of the whole cart and store it with let.
// Use if / else: if the grand total is above 100, print "Free delivery unlocked!"; otherwise print "Add more items for free delivery."
// Use the spread operator to create a new array updatedCart that adds one more item: { name: "water", price: 8, quantity: 6 }. Print the new number of items in the cart.
// Expected Output:

// APPLE x3 = 30 birr
// BREAD x1 = 25 birr
// MILK x2 = 36 birr
// CHOCOLATE x1 = 55 birr
// Expensive items (over 20 birr): 2
// Grand total: 146 birr
// Free delivery unlocked!
// Cart now has 5 items

const cart = [
  { name: "apple", price: 10, quantity: 3 },
  { name: "bread", price: 25, quantity: 1 },
  { name: "milk", price: 18, quantity: 2 },
  { name: "chocolate", price: 55, quantity: 1 },
];

function itemTotal(item) {
  return item.price * item.quantity;
}

const formatItem = (item) => {
  let { name, price, quantity } = item;
  return `${name.toUpperCase()} x${quantity} = ${itemTotal(item)} birr`;
};

let formattedItems = cart.map(formatItem);

for (let item of formattedItems) {
  console.log(item);
}

let filtered = cart.filter((price) => price.price > 20);
console.log(`Expensive items (over 20 birr): ${filtered.length}`);

let grandTotal = cart.reduce((total, item) => total + itemTotal(item), 0);
console.log(`Grand total: ${grandTotal} birr`);

if (grandTotal > 100) {
  console.log("Free delivery unlocked!");
} else {
  console.log("Add more items for free delivery.");
}

let updatedCart = [...cart, { name: "water", price: 8, quantity: 6 }];
console.log(`Cart now has ${updatedCart.length} items`);
