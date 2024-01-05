/*Step 14
You are already familiar with an HTML class, but JavaScript also has a class. In JavaScript, a class is like a blueprint for creating objects. It allows you to define a set of properties and methods, and instantiate (or create) new objects with those properties and methods.

The class keyword is used to declare a class. Here is an example of declaring a Computer class:

class Computer {};
Declare a ShoppingCart class.*/
//1step
const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
//2step
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
//3step
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
//4step
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;
/*5step
const products =[]    */
/*6step
const products = [
  {
    id: "1",
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  }] */
//7step
const products = [
  {
    id: "1",
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: "2",
    name: "French Macaroon",
    price: 3.99,
    category: "Macaroon",
  },
  {
    id: "3",
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: "4",
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: "5",
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: "6",
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },

  {
    id: "7",
    name: "Chocolate Macaroons (4 Pack)",
    price: 9.99,
    category: "Macaroon",
  },
  {
    id: "8",
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: "9",
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: "10",
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: "11",
    name: "Vanilla Macaroons (5 Pack)",
    price: 11.99,
    category: "Macaroon",
  },
  {
    id: "12",
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];
/*8step
products.forEach(() => {});*/
/*9step
products.forEach(({ id, name, price, category }) => {});*/
/*10step
products.forEach(({ name, id, price, category }) => {
  // Használd a hozzáadás értékadó operátort, hogy hozzáadd a HTML kódot minden termékhez
  dessertCards.innerHTML += ``;
});*/
/*11step
products.forEach(({ name, id, price, category }) => {
  // Használd a hozzáadás értékadó operátort, hogy hozzáadd a HTML kódot minden termékhez
  dessertCards.innerHTML += `
    <div class="dessert-card">
      <h2>${name}</h2>
      <!-- Add további részleteket vagy stílust igény szerint -->
    </div>
  `;
});*/
/*12step
products.forEach(({ name, id, price, category }) => {
  dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
      </div>
    `;
});*/
//13step
products.forEach(({ name, id, price, category }) => {
  dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
  <button class="btn add-to-cart-btn" id=${id}><p>Add to cart</p> </button>
      </div>
    `;
});
//14step
class ShoppingCart {}