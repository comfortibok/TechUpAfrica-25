let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Comfort",
  points: 500,
};

playerEl.textContent = player.name + ": " + player.points + " Points";

let cards = [];
let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false;

function getRandomCard() {
  let randomcard = Math.floor(Math.random() * 13) + 1;
  if (randomcard > 10) {
    return 10;
  } else if (randomcard === 1) {
    return 11;
  } else {
    return randomcard;
  }
}

startBtn.addEventListener("click", function () {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  playGame();
});

function playGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

newCardBtn.addEventListener("click", function () {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    playGame();
  }
});

