
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[getRandomInt(3)];
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection)
{
    const win = "You Win! ";
    const lose = "You Lose! ";
    const tie = "Tie Game! ";
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return tie;
    } else if (((playerSelection === "rock") && (computerSelection === "scissors")) ||
               ((playerSelection === "scissors") && (computerSelection === "paper")) ||
               ((playerSelection === "paper") && (computerSelection === "rock"))) {
        playerScore++;
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    } else {
        computerScore++;
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    }

}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function printReasoning(winSelection, loseSelection) {
    return winSelection + " beats " + loseSelection;
}

function reportResults() {
    if (computerScore === playerScore) {
        return "It was a tie.";
    } else if (computerScore > playerScore) {
        return "You lost! Better luck next time!";
    } else {
        return "Congratulations! You beat the machine!";
    }
}

function game() {
    for(let games = 0; games < 5; games++)
    {
        let userInput = window.prompt("Play rock paper scissors! Enter what you are playing");
        console.log(`Round ${games + 1} results: ${playRound(userInput, computerPlay())}`);
    }
    console.log(`Final results: ${reportResults()}`);
}

game();