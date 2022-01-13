
let computerScore = 0;
let playerScore = 0;

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const results = document.createElement("div");
const score = document.createElement("div");

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[getRandomInt(3)];
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection = computerPlay())
{
    const tie = "Tie Game! ";
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        results.textContent = tie;
    } else if (((playerSelection === "rock") && (computerSelection === "scissors")) ||
               ((playerSelection === "scissors") && (computerSelection === "paper")) ||
               ((playerSelection === "paper") && (computerSelection === "rock"))) {
        playerScore++;
        results.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    } else {
        computerScore++;
        results.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    }
    
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        const winner = document.createElement("div");
        winner.textContent = `Final results are in: ${reportResults()}`
        document.body.appendChild(winner);
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
    // for(let games = 0; games < 5; games++)
    // {
    //     let userInput = window.prompt("Play rock paper scissors! Enter what you are playing");
    //     console.log(`Round ${games + 1} results: ${playRound(userInput, computerPlay())}`);
    // }
    
    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";
    
    rock.addEventListener("click", function(){playRound("rock")});
    paper.addEventListener("click", function(){playRound("paper")});
    scissors.addEventListener("click", function(){playRound("scissors")});
    
    document.body.appendChild(rock);
    document.body.appendChild(paper);
    document.body.appendChild(scissors);
    document.body.appendChild(results);
    document.body.appendChild(score);
    // console.log(`Final results: ${reportResults()}`);
}

game();