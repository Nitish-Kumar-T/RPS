const choices = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let ties = 0;
let timer;

function toggleMode() {
    const mode = document.getElementById('game-mode').value;
    const player2Label = document.getElementById('player2-label');
    const difficultyForm = document.getElementById('difficulty-form');

    if (mode === 'player-vs-player') {
        player2Label.style.display = 'inline';
        difficultyForm.style.display = 'none';
    } else {
        player2Label.style.display = 'none';
        difficultyForm.style.display = 'inline';
    }
}

function playGame() {
    const mode = document.getElementById('game-mode').value;
    const player1Choice = document.getElementById('player1-choice').value;
    let player2Choice;
    
    if (mode === 'player-vs-player') {
        player2Choice = document.getElementById('player2-choice').value;
    } else {
        player2Choice = getComputerChoice(player1Choice);
    }

    const result = getResult(player1Choice, player2Choice);
    updateScore(result);
    displayResult(player1Choice, player2Choice, result);
    playSound(result);
}

function getComputerChoice(player1Choice) {
    const difficulty = document.getElementById('difficulty-level').value;
    let choice;

    if (difficulty === 'easy') {
        // Random choice
        choice = choices[Math.floor(Math.random() * choices.length)];
    } else if (difficulty === 'medium') {
        // 60% chance to choose randomly, 40% chance to choose winning move
        if (Math.random() < 0.6) {
            choice = choices[Math.floor(Math.random() * choices.length)];
        } else {
            choice = getWinningMove(player1Choice);
        }
    } else if (difficulty === 'hard') {
        // 80% chance to choose winning move, 20% chance to choose randomly
        if (Math.random() < 0.8) {
            choice = getWinningMove(player1Choice);
        } else {
            choice = choices[Math.floor(Math.random() * choices.length)];
        }
    }

    return choice;
}

function getWinningMove(player1Choice) {
    if (player1Choice === 'rock') return 'paper';
    if (player1Choice === 'paper') return 'scissors';
    if (player1Choice === 'scissors') return 'rock';
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
    clearTimeout(timer);
    startTimer();
}

function resetScoreboard() {
    wins = 0;
    losses = 0;
    ties = 0;
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
}

function startTimer() {
    timer = setTimeout(resetGame, 30000);
}

// Initialize the game mode and start the timer
toggleMode();
startTimer();
