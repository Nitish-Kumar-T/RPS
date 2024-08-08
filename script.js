const choices = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let ties = 0;

function toggleMode() {
    const mode = document.getElementById('game-mode').value;
    const player2Label = document.getElementById('player2-label');

    if (mode === 'player-vs-player') {
        player2Label.style.display = 'inline';
    } else {
        player2Label.style.display = 'none';
    }
}

function playGame() {
    const mode = document.getElementById('game-mode').value;
    const player1Choice = document.getElementById('player1-choice').value;
    let player2Choice;
    
    if (mode === 'player-vs-player') {
        player2Choice = document.getElementById('player2-choice').value;
    } else {
        player2Choice = choices[Math.floor(Math.random() * choices.length)];
    }

    const result = getResult(player1Choice, player2Choice);
    updateScore(result);
    displayResult(player1Choice, player2Choice, result);
    playSound(result);
}

function getResult(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) return 'tie';
    if ((player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')) return 'win';
    return 'lose';
}

function updateScore(result) {
    if (result === 'win') wins++;
    else if (result === 'lose') losses++;
    else ties++;
    
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
}

function displayResult(player1Choice, player2Choice, result) {
    let resultText = `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. `;
    resultText += result === 'win' ? 'Player 1 wins!' : result === 'lose' ? 'Player 2 wins!' : 'It\'s a tie!';
    document.getElementById('result').innerText = resultText;
}

function playSound(result) {
    let sound;
    if (result === 'win') sound = document.getElementById('win-sound');
    else if (result === 'lose') sound = document.getElementById('lose-sound');
    else sound = document.getElementById('tie-sound');
    sound.play();
}

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
    document.getElementById('result').innerText = '';
}

// Initialize the game mode
toggleMode();
