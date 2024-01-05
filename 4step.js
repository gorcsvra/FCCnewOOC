/*Step 4
The last element to get is the 
#show-hide-cart element. 
Store it in a variable named 
showHideCartSpan.

Then, use let to declare a variable named 
isCartShowing and set it to false.*/

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
