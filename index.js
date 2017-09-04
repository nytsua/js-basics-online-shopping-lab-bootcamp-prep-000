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
    return `In your cart, you have ${products[0]} at ${cart[0]}.`
  } else if(cart.length === 2){
    return `In your cart, you have ${products[0]} at ${cart[0]} and ${products[1]} at ${cart[1]}.`
  } else {
    var count = 1;
    var toReturn = `In your cart, you have ${products[0]} at ${cart[0]}`
    do {
      toReturn += `, ${products[count]} at ${cart[count]}`
      count++;
    } while(count < cart.length-2);
    toReturn += ` and ${products[count]} at ${cart[count]}`
  }
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
