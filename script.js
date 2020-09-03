let playerScore = 0;
let computerScore = 0;
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

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "rock") return `Draw! | Player Score: ${playerScore} | Computer Score: ${computerScore}`
            else if (computerSelection === "paper") {
                computerScore++;
                return `You Lose, Paper beats Rock | Player Score: ${playerScore} | Computer Score: ${computerScore}`;
            }
            else {
                playerScore++;
                return `You Win! Rock beats Scissors | Player Score: ${playerScore} | Computer Score: ${computerScore}`;
            }
            break;
        case "paper":
            if (computerSelection === "paper") return `Draw! | Player Score: ${playerScore} | Computer Score: ${computerScore}`
            else if (computerSelection === "scissors") {
                computerScore++;
                return `You Lose, Scissors beats Paper | Player Score: ${playerScore} | Computer Score: ${computerScore}`;
            }
            else {
                playerScore++;
                return `You Win! Paper beats Rock | Player Score: ${playerScore} | Computer Score: ${computerScore}`;
            }
            break;
        case "scissors":
            if (computerSelection === "scissors") return `Draw! | Player Score: ${playerScore} | Computer Score: ${computerScore}`
            else if (computerSelection === "rock") {
                computerScore++;
                return `You Lose, Rock beats Scissors | Player Score: ${playerScore} | Computer Score: ${computerScore}`;
            }
            else {
                playerScore++;
                return `You Win! Scissors beats Paper | Player Score: ${playerScore} | Computer Score: ${computerScore}`;
            }
            break;
        default:
            alert("Please enter Rock, Paper or Scissors or Please Enter Correct Spelling");
    }
}

function game() {
        let playerSelection;
        for (let i = 0; i < 5; i++) {
            playerSelection = prompt("Rock, Paper Scissors");
            playerSelection = playerSelection.toLowerCase();
            let computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
        }

        console.log(`Final Scores: Player: ${playerScore} | Computer: ${computerScore}`);

        if (playerScore > computerScore) {
            console.log("You Win!");
        }
        else if (computerScore > playerScore) {
            console.log("Too bad, the computer beat you! Try again next time!");
        }
        else {
            console.log("It's a Tie!");
        }
}

// game();