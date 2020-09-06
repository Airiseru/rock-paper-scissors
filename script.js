// declarations
let playerScore = 0;
let computerScore = 0;
const body = document.querySelector("body");
const scoreboard = document.querySelector(".scoreboard");
const options = document.querySelector(".options");
const buttons = document.querySelectorAll(".option");
const main = document.querySelector(".main-area");
const outputPlayerScore = document.querySelector(".playerScore");
const outputComputerScore = document.querySelector(".computerScore");
const outcome = document.querySelector(".outcome");
const winner = document.createElement("h2");
const retry = document.createElement("button");retry.classList.add("retry-button");

// gives random num and diff choices for the comp 
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return  "paper";
    }
    else {
        return "scissors";
    }
}

// rock paper scissors who wins against what
function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if (computerSelection == "rock") return `Draw!`;
            else if (computerSelection == "paper") {
                computerScore++;
                return `You Lose, Paper beats Rock`;
            }
            else {
                playerScore++;
                return `You Win! Rock beats Scissors`;
            }
            break;
        case "paper":
            if (computerSelection === "paper") return `Draw!`
            else if (computerSelection === "scissors") {
                computerScore++;
                return `You Lose, Scissors beats Paper`;
            }
            else {
                playerScore++;
                return `You Win! Paper beats Rock`;
            }
            break;
        case "scissors":
            if (computerSelection === "scissors") return `Draw!`
            else if (computerSelection === "rock") {
                computerScore++;
                return `You Lose, Rock beats Scissors`;
            }
            else {
                playerScore++;
                return `You Win! Scissors beats Paper`;
            }
            break;
        default:
            return "Choose An Option";
            break;
    }
}

// determines who wins and the style depending on the winner
function whoWon(playerScore, computerScore) {
    if (playerScore == 5 && playerScore > computerScore) {
        retry.style.backgroundColor = "#f6f7d4";
        body.style.backgroundColor = "#28df99";
        return "Congrats! You are the Winner!";
    }
    else {
        retry.style.backgroundColor = "#e0ece4";
        body.style.backgroundColor = "#ff4b5c";
        return "Oops. Too Bad. You Lost.";
    }
}

// once theres a winner retry button appear
function endGame() {
    document.getElementsByClassName("options")[0].style.display = "none";
    winner.textContent = `${whoWon(playerScore, computerScore)}`;
    main.appendChild(winner);
    scoreboard.removeChild(outcome);
    retry.textContent = "PLAY AGAIN?";
    main.appendChild(retry);
}

// what happens when you click the button
function game(e) {
        const playerSelection = e.target.className;
        const computerSelection = computerPlay();
        outcome.textContent = playRound(playerSelection, computerSelection);
        outputPlayerScore.textContent = `${playerScore}`;
        outputComputerScore.textContent = `${computerScore}`;
        if (playerScore === 5 || computerScore === 5) {
            endGame();
        }
}

function playAgain() {
    location.reload(true);
}


buttons.forEach((button) => {
    button.addEventListener("click", game);
});

retry.addEventListener("click", playAgain);