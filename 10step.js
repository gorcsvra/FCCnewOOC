/*Step 10
You need to display the available products in your HTML. Start by using the addition assignment operator to add an empty template literal string to the innerHTML property of the dessertCards variable.*/
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
