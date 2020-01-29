let gameDisplay = {
  rock: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NKeM2fb08G0STbY2a6s85u5izJD3W8l8pSrz2wuz5nsyWGWH3gy76KPM&s",
  paper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjNJfAlSAN7EUKyuqRyZe9hgK91ETfdX70g3V9gb0rUqMmAVxCRnUz6k&s",
  scissors: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhbQ_c1Xuor23mD6hIB5NsipAOOFafZ4R0Kxqt685xaHv1zUrqgBg5sYB&s"
}

let gameStatusElem = document.getElementById("game-status")
let gameImgElem = document.getElementById("game-img")
let playerStatusElem = document.getElementById("player-status")
let playerImgElem = document.getElementById("player-img")
let gameOutcomeElem = document.getElementById("outcome-status")

let game = {
  name: "RockPaperScissors",
  choice: [
    "Rock", "Paper", "Scissors"
  ]
}

let compOption = ["Rock", "Paper", "Scissors"]
let answer = compOption[0]
let playerAnswer = game.choice[0]
let outcome = ["You Win!", "You Lose!", "Tie Game"]

function pickRock() {
  playerAnswer = game.choice[0]
  console.log("Rock")
  playerImgElem.src = gameDisplay.rock
}

function pickPaper() {
  playerAnswer = game.choice[1]
  console.log("Paper")
  playerImgElem.src = gameDisplay.paper
}

function pickScissors() {
  playerAnswer = game.choice[2]
  console.log("Scissors")
  playerImgElem.src = gameDisplay.scissors
}


function playGame() {
  let compChoice = Math.floor(Math.random() * game.choice.length + 1)
  if (compChoice === 1) {
    answer = compOption[0];
  } else if (compChoice === 2) {
    answer = compOption[1]
  } else if (compChoice === 3) {
    answer = compOption[2]
  }
  console.log(answer)
}

function drawPic() {
  if (answer === compOption[0]) {
    gameImgElem.src = gameDisplay.rock
  } else if (answer === compOption[1]) {
    gameImgElem.src = gameDisplay.paper
  } else if (answer === compOption[2]) {
    gameImgElem.src = gameDisplay.scissors
  }
}

function determineWinner() {
  let final = outcome[0]
  if (answer === "Rock" && playerAnswer === "Rock") {
    final = outcome[2]
    console.log("Tie Game")
  } else if (answer === "Paper" && playerAnswer === "Paper") {
    final = outcome[2]
    console.log("Tie Game")
  } else if (answer === "Scissors" && playerAnswer === "Scissors") {
    final = outcome[2]
    console.log("Tie Game")
  } else if (answer === "Rock" && playerAnswer === "Paper") {
    final = outcome[0]
    console.log("You Win!")
  } else if (answer === "Paper" && playerAnswer === "Scissors") {
    final = outcome[0]
    console.log("You Win!")
  } else if (answer === "Scissors" && playerAnswer === "Rock") {
    final = outcome[0]
    console.log("You Win!")
  } else if (answer === "Rock" && playerAnswer === "Scissors") {
    final = outcome[1]
    console.log("You Lose!")
  } else if (answer === "Paper" && playerAnswer === "Rock") {
    final = outcome[1]
    console.log("You Lose!")
  } else if (answer === "Scissors" && playerAnswer === "Paper") {
    final = outcome[1]
    console.log("You Lose!")
  }
  gameOutcomeElem.textContent = final
}

function drawGame() {
  gameStatusElem.textContent = answer
  playerStatusElem.textContent = playerAnswer
}

drawPic()
drawGame()
determineWinner()
playGame()
pickRock()
pickPaper()
pickScissors()
//test