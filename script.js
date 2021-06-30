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
    
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let wins = 0;
let losses = 0;

function processResults(result) {
    if (result.indexOf("Win") !== -1) {
        wins++;
    }

    if (result.indexOf("Lose") !== -1) {
        losses++;
    }

    const singleResult = document.createElement('p');
    singleResult.classList.add('single-result');
    singleResult.textContent = result;
    resultDisplay.appendChild(singleResult);

    if (wins === 5 || losses === 5) {
        const totalResult = document.createElement('p');
        totalResult.id = 'total-result';
        
        if (wins === 5) totalResult.textContent = `That's 5 wins!`;
        if (losses === 5) totalResult.textContent = `That's 5 losses...`;

        resultDisplay.appendChild(totalResult);
        const resetBtn = document.createElement('button');
        resetBtn.id = 'reset-btn';
        resetBtn.textContent = 'Reset';
        resetBtn.addEventListener('click', () => {
            clearResults();
            resetBtn.parentElement.removeChild(resetBtn);
        });
        document.body.appendChild(resetBtn);
    }
}

function clearResults() {
    wins = 0;
    losses = 0;
    const singleResults = [...document.querySelectorAll('.single-result')];
    singleResults.forEach(result => {
        result.parentElement.removeChild(result);
    });
    const totalResult = document.querySelector('#total-result');
    if (totalResult) {
        totalResult.parentElement.removeChild(totalResult);
    }
}

for (let i = 0; i < choices.length; i++) {
    const choice = choices[i].toLowerCase();

    const btn = document.createElement('button');
    btn.id = choice;
    btn.dataset.choice = choice;
    btn.textContent = choices[i];

    btn.addEventListener('click', (e) => {
        const playerSelection = format(e.target.dataset.choice);
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        processResults(result);
    });

    document.body.appendChild(btn);
}

const resultDisplay = document.createElement('div');
resultDisplay.id = 'result-display';
document.body.appendChild(resultDisplay);
    
//     function game() {
//         let wins = 0;
//         let losses = 0;
        
//         while (wins + losses < 5) {
//             let playerSelection = prompt("Choose Rock, Paper, or Scissors:");
//             playerSelection = format(playerSelection);
            
//             while (!choices.includes(playerSelection)) {
//                 playerSelection = prompt("Please choose ONLY Rock, Paper, or Scissors:");
//                 playerSection = format(playerSelection);
//             }

//             let computerSelection = computerPlay();
//             let result = playRound(playerSelection, computerSelection);
//             console.log(result);
            
//             if (result.indexOf("Win") !== -1) {
//                 wins++;
//             }

//             if (result.indexOf("Lose") !== -1) {
//                 losses++;
//             }
//         }

//     return `You ${wins > losses ? 'win' : 'lose'}, ${wins} to ${losses}.`;
// }

// let gameResults = game();
// console.log(gameResults);