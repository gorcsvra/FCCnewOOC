/*Step 7
Following that same data structure, add the products from this table (in order) to your products array. Increment the id for each product, counting up.

name	price	category
French Macaroon	3.99	Macaroon
Pumpkin Cupcake	3.99	Cupcake
Chocolate Cupcake	5.99	Cupcake
Chocolate Pretzels (4 Pack)	10.99	Pretzel
Strawberry Ice Cream	2.99	Ice Cream
Chocolate Macaroons (4 Pack)	9.99	Macaroon
Strawberry Pretzel	4.99	Pretzel
Butter Pecan Ice Cream	2.99	Ice Cream
Rocky Road Ice Cream	2.99	Ice Cream
Vanilla Macaroons (5 Pack)	11.99	Macaroon
Lemon Cupcakes (4 Pack)	12.99	Cupcake*/

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
