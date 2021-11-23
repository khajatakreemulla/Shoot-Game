let Player1Healt = 100;
let Player2Healt = 100;
let player1score = 0;
let player2score = 0;
let rounds = 0;

// Initial Set Player health to 100%
document.getElementById("OneScore").innerText = Player1Healt + "%";
document.getElementById("TwoScore").innerText = Player2Healt + "%";

// Dom Targeting

let gameview = document.getElementById("gameview");

// JavaScript code to Star the project

function startGame() {
  gameview.style.display = "flex";
  document.getElementById("gameStartButton").style.display = "none";
  document.getElementById("gameBtn").style.display = "none";
}

// Functional JavaScript Code For Shooting which Ultimately decresae the player healt and Give the score to the players

function shoot() {
  var audio = new Audio('1.mp3');
  audio.play()
  // Javascript code for getting some random values to use it for decresing health

  var player1fire = Math.floor(Math.random() * 5);
  var player2fire = Math.floor(Math.random() * 5);

  Player1Healt = Player1Healt - player2fire;
  Player2Healt = Player2Healt - player1fire;

  document.getElementById("OneScore").innerText = Player1Healt + "%";
  document.getElementById("TwoScore").innerText = Player2Healt + "%";

  // JavaScript Code if Player one Healt decreses to 0 before player 2

  if (Player1Healt <= 0) {
    player2score = player2score + 1;
    document.getElementById("btn").disabled = "true";
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("btn").innerHTML = "Player 2 Won";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("player2").innerText = player2score;
  }

  // JavaScript Code if Player two healt decreses to 0 before player one

  if (Player2Healt <= 0) {
    player1score = player1score + 1;
    document.getElementById("btn").disabled = "true";
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("btn").innerHTML = "Player 1 Won";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("player1").innerText = player1score;
  }

  // JavaScript Code if Both Player Simultaneously reacher health  0 or less than zero so that the score will be non added

  if (Player1Healt <= 0 && Player2Healt <= 0) {
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").innerHTML = "Game Over";
    document.getElementById("btn").style.backgroundColor = "grey";
    player1score = player1score;
    player2score = player2score;
  }

  // JavaScript Code if player one had a score of 3 from 5 to win the game

  if (player1score === 3) {
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").innerHTML = "Game Over";
    document.getElementById("whoWon").innerText =
      " Congratulations Player 1 Won the Tournament";
    document.getElementById("whoWon").style.display = "flex";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("playBtn").style.display = "none";
  }

  // JavaScript Code if player two had a score of 3 from 5 to win the game

  if (player2score === 3) {
    document.getElementById("btn").disabled = "true";
    document.getElementById("btn").innerHTML = "Game Over";
    document.getElementById("whoWon").innerText =
      "Congratulations Player 2 Won the Tournament";
    document.getElementById("whoWon").style.display = "flex";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("playBtn").style.display = "none";
  }

  // JavaScript Code if Five Rounds Get Completed and score of both player is less than 3

  if (rounds == 5) {
    if (player1score < 3 && player2score < 3) {
      document.getElementById("whoWon").innerText = "Match Draw";
      document.getElementById("btn").disabled = "true";
      document.getElementById("btn").style.backgroundColor = "grey";
    }
  }
}

// Functional Java Script Code To Play Again till the required score reaches
function playAgain() {
  document.getElementById("btn").disabled = false;
  document.getElementById("btn").innerHTML = "Shoot";
  document.getElementById("playBtn").style.display = "none";
  Player1Healt = 100;
  Player2Healt = 100;
  document.getElementById("OneScore").innerText = Player1Healt;
  document.getElementById("TwoScore").innerText = Player2Healt;
  document.getElementById("btn").style.backgroundColor = "crimson";
}




// Adding Two Numbers 
function addTwoNumber(x, y){
  return x + y;
}

console.log(addTwoNumber(-3, -6));
console.log(addTwoNumber(6, 5))


function addNumber(x){
  return x + " " + (x + 2) + " " + ( x+4)
}

console.log(addNumber(5))
