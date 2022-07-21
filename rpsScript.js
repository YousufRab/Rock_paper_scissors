let computerSelection = getComputerChoice();
let playerSelection;
let playerScore = 0;
let computerScore = 0;  

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissor = document.querySelector('#scissor');


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


function getPlayerChoice() {
    if (document.getElementById('rock').clicked == true) {
        return "rock";
    } else if (document.getElementById('paper').clicked == true) {
        return "paper";
    } else if (document.getElementById('scissor').clicked == true) {
        return "scissor";
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
    console.log(playerSelection)
    console.log(playerScore);
    console.log(computerScore);
}


// function game() {
//    for (let i = 0; i < 5; i++) {
//        playRound();
//     }
//     if (playerScore > computerScore) {
//         console.log("Player wins!");
//     } else if (computerScore > playerScore) {
//         console.log("Computer has won!");
//     } else {
//         console.log("Draw")
//     }
// }

//game();
