
let playerScore = 0;
let computerScore = 0;  

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');

const scoreDisplay = document.querySelector('#results');
const winnerDisplay = document.createElement('div');


rockButton.addEventListener('click', () => playRound("rock"));
paperButton.addEventListener('click', () => playRound("paper"));
scissorButton.addEventListener('click', () => playRound("scissor"));

let computerSelection = getComputerChoice();
let playerSelection;


function getComputerChoice () {
    randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}



function playRound(playerSelection) {;
    let computerSelection = getComputerChoice();
        
    if (playerSelection == "rock" && computerSelection == "Scissor") {
        playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore += 1;
    } else if (playerSelection == "scissor" && computerSelection == "Paper") {
        playerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "Scissor") {
        computerScore += 1;
    } else if (playerSelection == "scissor" && computerSelection == "Rock") {
        computerScore += 1;
    } else if ((playerSelection == "rock" && computerSelection == "Rock") || (playerSelection == "paper" && computerSelection == "Paper") || (playerSelection == "scissor" && computerSelection == "Scissor")) {
        return "Draw!";
    }
    scoreDisplay.textContent = `The computer chose ${computerSelection} and you chose ${playerSelection}. \n
                                The scores are computer: ${computerScore} and player: ${playerScore}`
    if (playerScore == 5) {
        scoreDisplay.appendChild(winnerDisplay);
        winnerDisplay.textContent = 'Congratulations, you win!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        scoreDisplay.appendChild(winnerDisplay);
        winnerDisplay.textContent == 'The computer wins!';
        playerScore = 0;
        computerScore = 0;

    }
}



while (playerScore == 5 || computerScore == 5) {
    
    
    playerScore = 0
    computerScore = 0
    break
}


