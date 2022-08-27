function getComputerChoice() {
    // Generate random number between 1 and 3
    let generatedNumber = Math.round(Math.random() * 2 + 1);
    // Set variable computerChoice
    let computerChoice;
    
    // if 1, "Rock"
    if (generatedNumber === 1) {
        computerChoice = "ROCK";
    // if 2, "Paper"
    } else if (generatedNumber === 2) {
        computerChoice = "PAPER";
    // if 3, "Scissors"
    } else {
        computerChoice = "SCISSORS";
    }
    // print to the console the result
    return computerChoice;
}
const matchResults = document.querySelector('.results');
const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.computerScore');
const gameOver = document.querySelector('.gameOver');
const btn = document.querySelectorAll('button');

btn.forEach(btn => btn.addEventListener('click', function (e) {
    // e.target.style.background = 'blue';
    if (playerScore === 5 || computerScore === 5) {
        return;
    } else {
        playRound(this.className, computerSelection); 
    }
  }));

let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (
        (computerSelection === playerSelection) ||
        (computerSelection === playerSelection) ||
        (computerSelection === playerSelection)
        ) {
            matchResults.textContent = "TIE!";
    } else if (
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
        (computerSelection === "ROCK" && playerSelection === "SCISSORS")
        ) {
            matchResults.textContent = `YOU LOSE! ${computerSelection} BEATS ${playerSelection}`;
            computerScore += 1;
    } else if ( 
        (computerSelection === "SCISSORS" && playerSelection === "ROCK") ||
        (computerSelection === "ROCK" && playerSelection === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection === "SCISSORS")
        ) {
            matchResults.textContent = `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
            playerScore += 1;
    }
    displayScores();
    return playerScore, computerScore;
}

function displayScores() {
    if (playerScore > computerScore) {
        playerScoreDisplay.style.color = 'green';
        computerScoreDisplay.style.color = 'red';
    } else if (computerScore > playerScore) {
        computerScoreDisplay.style.color = 'green';
        playerScoreDisplay.style.color = 'red';
    } else {
        computerScoreDisplay.style.color = 'green';
        playerScoreDisplay.style.color = 'green';
    }
    playerScoreDisplay.textContent = `PLAYER SCORE: ${playerScore}`;
    computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) { getWinner(); }
    computerSelection = getComputerChoice();
}

function getWinner() {
    if (playerScore > computerScore) {
        gameOver.style.color = 'green';
        gameOver.textContent = "YOU WON!";
    } else if (computerScore > playerScore) {
        gameOver.style.color = 'red';
        gameOver.textContent = "YOU LOST!";
    }
}