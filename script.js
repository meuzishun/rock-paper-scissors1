function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
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