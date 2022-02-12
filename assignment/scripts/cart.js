console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5
//console.log(basket);

function addItem(item){
  //console.log('in addItem', item);
while (basket.length < maxItems){
  basket.push(item);
  return true;
  }
}

function listItems(){
  for (i=0; i<basket.length; i++){
    console.log(i);
  }
}

function empty(item){
  basket.pop(item);
  return false;
}

console.log(`Basket is ${basket} `);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log('Adding strawberries (expect true)', addItem('strawberries'));
console.log(`Basket is now ${basket} `);
console.log('Basket is full: ', isFull());


//const maxItems = 5

function isFull(){
  for (i=0; i<maxItems; i++){
    if (i < maxItems){
      return false;
    } else if (i >= maxItems) {
      return true;
    }
  }
}
