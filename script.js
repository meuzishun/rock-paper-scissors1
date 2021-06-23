let choices = ['rock', 'paper', 'scissors'];

function computerPlay(choices) {
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

function validateUserChoice(userChoice, choices) {
    return choices.includes(userChoice);
}

function compare(userChoice, compChoice) {
    if (userChoice === 'rock') {
        if (compChoice === 'rock') {
            return 'draw';
        }
        if (compChoice === 'paper') {
            return 'win';
        }
        if (compChoice === 'scissors') {
            return 'lose';
        }
    }
    if (userChoice === 'paper') {
        if (compChoice === 'rock') {
            return 'win';
        }
        if (compChoice === 'paper') {
            return 'draw';
        }
        if (compChoice === 'scissors') {
            return 'lose';
        }
    }
    if (userChoice === 'scissors') {
        if (compChoice === 'rock') {
            return 'lose';
        }
        if (compChoice === 'paper') {
            return 'win';
        }
        if (compChoice === 'scissors') {
            return 'draw';
        }
    }
}

let computerChoice = computerPlay(choices);

let userChoice = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();