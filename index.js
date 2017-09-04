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
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  } else if(cart.length === 1){
    var product = Object.keys(cart[0])[0];
    return `In your cart, you have ${product} at ${cart[product]}.`
  } else if(cart.length === 2){
    var product1 = Object.keys(cart[0])[0];
    var product2 = Object.keys(cart[1])[0];
    return `In your cart, you have ${product1} at ${cart[product]} and ${product2} at ${cart[product2]}.`
  } else {
    var count = 1;
    var product = Object.keys(cart[0])[0];
    var toReturn = `In your cart, you have ${product} at ${cart[product]}`
    do {
      for(let int i=1;i<cart.length-2;i++){
        var product = Object.keys(cart[i])[0];
        toReturn += `, ${product} at ${cart[product]}`
      }
      count++;
    } while(count < cart.length-2);
    var product = Object.keys(cart[count])[0];
    toReturn += ` and ${product} at ${cart[product]}.`
  }
}

function total() {
  var total = 0;
  for(let i=0;i<cart.length;i++){
    var product = Object.keys(cart[i])[0];
    var price = cart[product];
    total += Number(price);
  }
  return total;
}

function removeFromCart(item) {
  for(let i=0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      return [...cart.splice(0,i),...cart.splice(1,cart.length)]
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}
