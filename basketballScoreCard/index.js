let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");
let resetEl = document.getElementById("reset-btn");
let winnerEl = document.querySelector("#winner");
let homeScore = 0;
let guestScore = 0;

function add1PointToHome() {
  homeScore += 1;
  homeEl.textContent = homeScore;
  winner();
}

function add2PointToHome() {
  homeScore += 2;
  homeEl.textContent = homeScore;
  winner();
}

function add3PointToHome() {
  homeScore += 3;
  homeEl.textContent = homeScore;
  winner();
}

function add1PointToGuest() {
  guestScore += 1;
  guestEl.textContent = guestScore;
  winner();
}

function add2PointToGuest() {
  guestScore += 2;
  guestEl.textContent = guestScore;
  winner();
}

function add3PointToGuest() {
  guestScore += 3;
  guestEl.textContent = guestScore;
  winner();
}

function resetScore() {
  homeScore = 0;
  guestScore = 0;
  homeEl.textContent = homeScore;
  guestEl.textContent = guestScore;
  winnerEl.textContent = "";
}

function winner() {
  if (homeScore > guestScore) {
    winnerEl.textContent = "Winner: Home";
  } else if (homeScore < guestScore) {
    winnerEl.textContent = "Winner: Guest";
  } else {
    winnerEl.textContent = "Tie";
  }
}
