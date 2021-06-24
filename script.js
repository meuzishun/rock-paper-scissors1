const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function format(str) {
    let lowerCase = str.toLowerCase();
    let arr = lowerCase.split('');
    arr[0] = arr[0].toUpperCase();
    str = arr.join(''); 
    return str;
}

function playRound(playerSelection, computerSelection) {
    
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
    
    function game() {
        let wins = 0;
        let losses = 0;
        
        while (wins + losses < 5) {
            let playerSelection = prompt("Choose Rock, Paper, or Scissors:");
            playerSelection = format(playerSelection);
            
            while (!choices.includes(playerSelection)) {
                playerSelection = prompt("Please choose ONLY Rock, Paper, or Scissors:");
                playerSection = format(playerSelection);
            }

            let computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            console.log(result);
            
            if (result.indexOf("Win") !== -1) {
                wins++;
            }

            if (result.indexOf("Lose") !== -1) {
                losses++;
            }
        }

    return `You ${wins > losses ? 'win' : 'lose'}, ${wins} to ${losses}.`;
}

let gameResults = game();
console.log(gameResults);