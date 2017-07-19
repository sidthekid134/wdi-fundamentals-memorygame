/*
  Author: Siddhardha Moparthi
  Capital One: Memory Game
*/

// Initializing variables
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

// Checks to see if the two cards flipped are the same
var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }else{
    alert("Sorry, try again.");
  }
}

// Does the processing when a user flips a card
var flipCard = function (){
  var cardId = this.getAttribute("data-id")
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[cardId].cardImage);
  
  // If two cards have been flipped
  if(cardsInPlay.length === 2){
    checkForMatch();
  }

}

// Creates the board when loading the website the first time
var createBoard = function (){

  // Iterates through each card in the deck and adds it to webiste
  for(var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("img")
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}



createBoard();
