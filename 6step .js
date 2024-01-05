/*Step 6
You now need to start adding products. Before you do that, you need to consider the structure of your product data. A product will need a unique identifier to distinguish it from other products, a price so people know how much it costs, and a name so people know what they are buying. You should also add a category to each product.
Add an object to your products array.
Give this object an id property set to the number 1,
 a name property set to Vanilla Cupcakes (6 Pack),
  a price property set to the number 12.99, 
  and a category property set to Cupcake.*/
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
const product = [];*/
//6step
const products = [
  {
    id: "1",
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];
