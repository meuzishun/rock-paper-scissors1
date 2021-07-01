const choices = ['Rock', 'Paper', 'Scissors'];

let wins = 0;
let losses = 0;

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

function getChoicesAndPlay(e) {
    const playerSelection = format(e.target.dataset.choice);
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    processResults(result);
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
    
    resetBtn.style.display = 'none';
    choiceBtns.forEach(btn => btn.disabled = false);
}

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
        resetBtn.style.display = "inline";

        choiceBtns.forEach(btn => btn.disabled = true);
    }
}

function createInputBtns() {
    let btns = [];
    for (let i = 0; i < choices.length; i++) {
        const choice = choices[i].toLowerCase();
    
        const btn = document.createElement('button');
        btn.id = choice;
        btn.classList.add('choice');
        btn.dataset.choice = choice;
        btn.textContent = choices[i];
    
        btn.addEventListener('click', getChoicesAndPlay);
    
        document.body.appendChild(btn);
        btns.push(btn);
    }
    return btns;
}

const choiceBtns = createInputBtns();

const resultDisplay = document.createElement('div');
resultDisplay.id = 'result-display';
document.body.appendChild(resultDisplay);

const resetBtn = document.createElement('button');
resetBtn.id = 'reset-btn';
resetBtn.textContent = 'Reset';
resetBtn.addEventListener('click', clearResults);
resetBtn.style.display = 'none';
document.body.appendChild(resetBtn);
