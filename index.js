// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

function writeCards (nameArray, event) {
    let cardArray = [];
    for (let i = 0; i < nameArray.length; i++){
        let message = `Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`;
        cardArray.push(message);
        console.log(cardArray[i]);
        debugger;
    }
    return cardArray;
}

function countDown(number){
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

wrapGifts(gifts);
writeCards(['Jonah', 'Johanna', 'Banana'], 'birthday');
countDown(10);