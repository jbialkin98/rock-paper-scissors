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
    console.log(computerChoice);
    return computerChoice;
}

let playerSelection = "ROCK";
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (
        (computerSelection === "ROCK" && playerSelection === "ROCK") ||
        (computerSelection === "PAPER" && playerSelection === "PAPER") ||
        (computerSelection === "SCISSORS" && playerSelection === "SCISSORS")
        ) {
            console.log("TIE!");
    } else if (
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
        (computerSelection === "ROCK" && playerSelection === "SCISSORS")
        ) {
            console.log(`YOU LOSE! ${computerSelection} BEATS ${playerSelection}`);
            computerScore += 1;
    } else if (
        (computerSelection === "SCISSORS" && playerSelection === "ROCK") ||
        (computerSelection === "ROCK" && playerSelection === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection === "SCISSORS")
        ) {
            console.log(`YOU WIN! ${playerSelection} BEATS ${computerSelection}`);
            playerScore += 1;
    } 
    displayScores();
    return playerScore, computerScore;
}

function displayScores() {
    console.log(`PLAYER SCORE: ${playerScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`)
}

function game() {
    for (let i = 0; i < 4; i++) {
        playRound(playerSelection, computerSelection);
        computerSelection = getComputerChoice();
        playerSelection = "ROCK"
    }
    // Final Round
    playRound(playerSelection,computerSelection);
    console.log("FINAL SCORE!");
    displayScores();
}