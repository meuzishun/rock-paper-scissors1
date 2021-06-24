// Write a function called computerPlay that randomly chooses and returns 'rock', 'paper', or 'scissors' for the computer's play

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


// Write a function called playRound that plays a single round of the game, taking two parameters (playerSelection and computerSelection) and returns a string declaring the winner. Make sure that the player's selection is case insensitive.

function playRound(playerSelection, computerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    let arr = lowerCase.split('');
    arr[0] = arr[0].toUpperCase();
    playerSelection = arr.join('');
    
    if (playerSelection === computerSelection) {
        return `It's a draw... ${playerSelection} vs ${computerSelection}`;
    }

    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Write a function called game that uses the playRound function to play a 5-round game that keeps score and reports a winner or loser of the 5-rounds. Log the result of each game as well as the overall outcome.

function game() {
    // Establish counts for player wins and loses
    let wins = 0;
    let losses = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors:");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.indexOf("draw") !== -1) {
            console.log('???');
        }

        if (result.indexOf("Win") !== -1) {
            wins++;
        }

        if (result.indexOf("Lose") !== -1) {
            losses++;
        }
    }

    if (wins > losses) {
        return `You won ${wins} to ${losses}!`;
    }

    if (wins < losses) {
        return `You lose ${wins} to ${losses}!`;
    }

    if (wins === losses) {
        return `It's a tie... ${wins} to ${losses}`;
    }
    // Loop 5 times...
    // Get the users play
    // Get the computer's play
    // Compare the result
    // Log the result
    // If it is a draw, go again
    // If it is a win, increment wins
    // If it is a loss, increment loses

    // Once loop is finished, report overall score

    
}

let gameResults = game();
console.log(gameResults);