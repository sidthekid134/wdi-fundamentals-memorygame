/*
  Author: Siddhardha Moparthi
  Capital One: Memory Game
*/

// Hold all the information to each card
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

// Holds the rank of all the cards flipped around
var cardsInPlay = [];

// Resets the game back to the back of the card
var resetCards = function (){
  var gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";
  cardsInPlay = [];
  createBoard();
}

// Checks to see if the two cards flipped are the same
var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }else{
    alert("Sorry, try again.");
  }
resetCards();
}

// Does the processing when a user flips a card
var flipCard = function (){
  var cardId = this.getAttribute("data-id")
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[cardId].cardImage);

  // If two cards have been flipped
  if(cardsInPlay.length === 2){
    setTimeout(checkForMatch, 200)
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
