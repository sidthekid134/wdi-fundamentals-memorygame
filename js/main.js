/*
  Author: Siddhardha Moparthi
  Capital One: Memory Game
*/

// Initializing variables
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// Checks to see if the two cards flipped are the same
var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  }else{
    console.log("Sorry, try again.");
  }
}

// Does the processing when a user flips a card
var flipCard = function (cardId){
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();

  // if(cardsInPlay.length === 2){
  //   if(cardsInPlay[0] === cardsInPlay[1]){
  //     alert("You found a match!");
  //   }else{
  //     alert("Sorry, try again.");
  //   }
  // }

}


flipCard(0);
flipCard(1);
