var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)})
}

function viewCart() {
  var products = Object.keys();
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  } else if(cart.length === 1){
    return `In your cart, you have ${cart[0]} at ${cart[0]}.`
  }
  var items =
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
