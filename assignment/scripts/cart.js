console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
  //console.log('in addItem', item);
  basket.push(item);
  return true;
}

function listItems(){
  for (i=0; i<basket.length; i++){
    console.log(i);
  }
}

function empty(){
  
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log('Adding strawberries (expect true)', addItem('strawberries'));
console.log(`Basket is now ${basket}`);
