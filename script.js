let choices = ['rock', 'paper', 'scissors'];

function computerPlay(choices) {
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

let computerChoice = computerPlay(choices);

let userChoice = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();

function validateUserChoice(userChoice, choices) {
    return choices.includes(userChoice);
}

function compare(userChoice, compChoice) {
    if (userChoice === 'Rock') {
        if (compChoice === 'Rock') {
            return 'draw';
        }
        if (compChoice === 'Paper') {
            return 'win';
        }
        if (compChoice === 'Scissors') {
            return 'lose';
        }
    }
    if (userChoice === 'Paper') {
        if (compChoice === 'Rock') {
            return 'win';
        }
        if (compChoice === 'Paper') {
            return 'draw';
        }
        if (compChoice === 'Scissors') {
            return 'lose';
        }
    }
    if (userChoice === 'Scissors') {
        if (compChoice === 'Rock') {
            return 'lose';
        }
        if (compChoice === 'Paper') {
            return 'win';
        }
        if (compChoice === 'Scissors') {
            return 'draw';
        }
    }
}