function getComputerChoice() {
    // Generate random number between 1 and 3
    let generatedNumber = Math.round(Math.random() * 2 + 1);
    // Set variable computerChoice
    let computerChoice;
    
    // if 1, "Rock"
    if (generatedNumber === 1) {
        computerChoice = "Rock";
    // if 2, "Paper"
    } else if (generatedNumber === 2) {
        computerChoice = "Paper";
    // if 3, "Scissors"
    } else {
        computerChoice = "Scissors";
    }
    // print to the console the result
    console.log(computerChoice);
    return computerChoice;
}