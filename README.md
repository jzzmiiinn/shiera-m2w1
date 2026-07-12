# 🛒 Shopping Cart Total

A simple JavaScript project that demonstrates the use of modern JavaScript features such as arrays, objects, functions, arrow functions, destructuring, spread operator, and array methods (`map`, `filter`, and `reduce`) to calculate and display shopping cart information.

## 📌 Features

- Store shopping cart items as objects in an array
- Calculate the total price for each item
- Format and display cart items
- Filter expensive items (price greater than 20 birr)
- Calculate the grand total of the cart
- Check if the cart qualifies for free delivery
- Add a new item using the spread operator

## 🛠 Technologies Used

- JavaScript (ES6+)

## 📂 Project Structure

```
shopping-cart/
│── index.js
│── README.md
```

## 📖 Concepts Practiced

- Arrays
- Objects
- Functions
- Arrow Functions
- Template Literals
- Object Destructuring
- `map()`
- `filter()`
- `reduce()`
- Spread Operator
- Conditional Statements
- Loops (`for...of`)

## 💻 Sample Code

```javascript
const cart = [
  { name: "apple", price: 10, quantity: 3 },
  { name: "bread", price: 25, quantity: 1 },
  { name: "milk", price: 18, quantity: 2 },
  { name: "chocolate", price: 55, quantity: 1 },
];
```

## ▶️ Sample Output

```
APPLE x3 = 30 birr
BREAD x1 = 25 birr
MILK x2 = 36 birr
CHOCOLATE x1 = 55 birr

Expensive items (over 20 birr): 2
Grand total: 146 birr
Free delivery unlocked!
Cart now has 5 items
```

## 🚀 How to Run

1. Save the code as `index.js`.
2. Open a terminal in the project folder.
3. Run the following command:

```bash
node index.js
```

## 📚 Learning Objectives

This project helps practice:

- Working with arrays of objects
- Creating reusable functions
- Transforming data with `map()`
- Filtering data with `filter()`
- Aggregating values using `reduce()`
- Using template literals for formatted output
- Applying modern JavaScript (ES6+) syntax

## 👩‍💻 Author

**Yasmin Ali**

Software Engineering Student | Frontend Developer
