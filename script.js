const choices = ['rock', 'paper', 'scissors'];
    let wins = 0;
    let losses = 0;
    let ties = 0;

    function playGame() {
        const userChoice = document.getElementById('user-choice').value;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(userChoice, computerChoice);
        
        updateScore(result);
        displayResult(userChoice, computerChoice, result);
    }

    /**
     * Determine the result of the game
     * @param {string} userChoice 
     * @param {string} computerChoice 
     * @returns {string} Result of the game ('win', 'lose', 'tie')
     */
    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) return 'tie';
        if ((userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')) return 'win';
        return 'lose';
    }

    /**
     * Update the score based on the result
     * @param {string} result 
     */
    function updateScore(result) {
        if (result === 'win') wins++;
        else if (result === 'lose') losses++;
        else ties++;
        
        document.getElementById('wins').innerText = wins;
        document.getElementById('losses').innerText = losses;
        document.getElementById('ties').innerText = ties;
    }

    /**
     * Display the result of the game
     * @param {string} userChoice 
     * @param {string} computerChoice 
     * @param {string} result 
     */
    function displayResult(userChoice, computerChoice, result) {
        let resultText = `You chose ${userChoice}, computer chose ${computerChoice}. `;
        resultText += result === 'win' ? 'You win!' : result === 'lose' ? 'You lose!' : 'It\'s a tie!';
        document.getElementById('result').innerText = resultText;
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