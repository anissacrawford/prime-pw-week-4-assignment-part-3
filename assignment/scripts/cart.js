console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5
//console.log(basket);

function addItem(item){
  //console.log('in addItem', item);
if (isFull() === true){
  return false;
} else {
  basket.push(item);
  return true;
  }
}

function listItems(){
  for (let i=0; i<basket.length; i++){
    console.log(basket[i]);
  }
}



function empty(){
basket = [];
}

//console.log(basket); logs an empty basket 


//console.log(`Basket is ${basket} `);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log('Adding strawberries (expect true)', addItem('strawberries'));
console.log('Adding kiwi (expect true)', addItem('kiwi'));
//console.log('Adding pomegranate (expect true)', addItem('pomegranate'));//returns true bc more than maxItems
listItems(basket); //how to log this without undefined
console.log('Basket is full: ', isFull());


function isFull(){
    if (basket.length < maxItems){
      return false;
    } else {
      return true;
    }
  }
