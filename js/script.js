window.onload = function () {
    const rockBut = document.getElementById('rock');
    const scisBut = document.getElementById('scissors');
    const paperBut = document.getElementById('paper');
    const resetBut = document.getElementById('reset');
    const choices = ['rock', 'scissors', 'paper'];
    let playerChoice = null;
    let compChoice = null;
    let playerScore = 0;
    let compScore = 0;

    rockBut.onclick = function () {
        playerChoice = 'rock';
        const x = Math.floor((Math.random() * 3));
        compChoice = choices[x];
        play();
    };
    scisBut.onclick = function () {
        playerChoice = 'scissors';
        const x = Math.floor((Math.random() * 3));
        compChoice = choices[x];
        play();
    };

    paperBut.onclick = function () {
        playerChoice = 'paper';
        const x = Math.floor((Math.random() * 3));
        compChoice = choices[x];
        play();
    };

    resetBut.onclick = reset;

    function play() {
        if (playerChoice === 'rock' && compChoice === 'scissors') {
            document.getElementById('img-player').src = 'media/rock.jpg';
            document.getElementById('img-computer').src = 'media/scissors.jpg';
            playerScore++;
            document.getElementById('score-player').innerHTML = playerScore.toString();
        } else if (playerChoice === 'rock' && compChoice === 'paper') {
            document.getElementById('img-player').src = 'media/rock.jpg';
            document.getElementById('img-computer').src = 'media/paper.jpg';
            compScore++;
            document.getElementById('score-computer').innerHTML = compScore.toString();
        } else if (playerChoice === 'scissors' && compChoice === 'paper') {
            document.getElementById('img-player').src = 'media/scissors.jpg';
            document.getElementById('img-computer').src = 'media/paper.jpg';
            playerScore++;
            document.getElementById('score-player').innerHTML = playerScore.toString();
        } else if (playerChoice === 'scissors' && compChoice === 'rock') {
            document.getElementById('img-player').src = 'media/scissors.jpg';
            document.getElementById('img-computer').src = 'media/rock.jpg';
            compScore++;
            document.getElementById('score-computer').innerHTML = compScore.toString();
        } else if (playerChoice === 'paper' && compChoice === 'rock') {
            document.getElementById('img-player').src = 'media/paper.jpg';
            document.getElementById('img-computer').src = 'media/rock.jpg';
            playerScore++;
            document.getElementById('score-player').innerHTML = playerScore.toString();
        } else if (playerChoice === 'paper' && compChoice === 'scissors') {
            document.getElementById('img-player').src = 'media/paper.jpg';
            document.getElementById('img-computer').src = 'media/scissors.jpg';
            compScore++;
            document.getElementById('score-computer').innerHTML = compScore.toString();
        } else if (playerChoice === 'paper' && compChoice === 'paper') {
            document.getElementById('img-player').src = 'media/paper.jpg';
            document.getElementById('img-computer').src = 'media/paper.jpg';
        } else if (playerChoice === 'scissors' && compChoice === 'scissors') {
            document.getElementById('img-player').src = 'media/scissors.jpg';
            document.getElementById('img-computer').src = 'media/scissors.jpg';
        } else if (playerChoice === 'rock' && compChoice === 'rock') {
            document.getElementById('img-player').src = 'media/rock.jpg';
            document.getElementById('img-computer').src = 'media/rock.jpg';
        }
    }
    function reset() {
        document.getElementById('img-player').src = 'media/question.png';
        document.getElementById('img-computer').src = 'media/question.png';
        playerScore = 0;
        compScore = 0;
        document.getElementById('score-computer').innerHTML = compScore.toString();
        document.getElementById('score-player').innerHTML = playerScore.toString();
    }
};