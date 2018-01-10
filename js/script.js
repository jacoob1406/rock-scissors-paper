window.onload = function () {

    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57)))
            return false;
        return true;
    }

    function changeDisplay(id, display) {
        document.getElementById(id).style.display = display;
    }
    ;

    function changePic(id, src) {
        document.getElementById(id).src = src;
    }
    ;

    const rockBut = document.getElementById('rock');
    const scisBut = document.getElementById('scissors');
    const paperBut = document.getElementById('paper');
    const resetBut = document.getElementById('reset');
    const playBut = document.getElementById('play');
    const choices = ['rock', 'scissors', 'paper'];
    const yesBut1 = document.getElementById('yes1');
    const yesBut2 = document.getElementById('yes2');
    const noBut1 = document.getElementById('no1');
    const noBut2 = document.getElementById('no2');

    let playerChoice = null;
    let compChoice = null;
    var playerScore = 0;
    var compScore = 0;
    var toWin;

    playBut.onclick = function () {
        toWin = Number(document.getElementById('pointsvalue').value);
        changeDisplay('intro', 'none');

        changeDisplay('container', 'grid');
        changeDisplay('container', '-ms-grid');
    };
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

    function sayYes() {
        changeDisplay('outrowin', 'none');
        changeDisplay('outrolost', 'none');
        changeDisplay('container', '-ms-grid');
        changeDisplay('container', 'grid');
        reset();
    }



    function sayNo() {
        changeDisplay('outrowin', 'none');
        changeDisplay('outrolost', 'none');
        changeDisplay('thankyou', 'block');
        let timeleft = 3;
        setInterval(function () {
            timeleft--;
            document.getElementById('count-five').innerHTML = timeleft;
            if (timeleft <= 0) {
                location.reload();
            }
        }, 1000);
    }

    yesBut1.onclick = sayYes;
    yesBut2.onclick = sayYes;
    noBut1.onclick = sayNo;
    noBut2.onclick = sayNo;

    function checkWin() {
        if (playerScore === toWin) {
            setTimeout(function () {
                changeDisplay('container', 'none');
                changeDisplay('outrowin', 'block');
            }, 500);
        } else if (compScore === toWin) {
            setTimeout(function () {
                changeDisplay('container', 'none');
                changeDisplay('outrolost', 'block');
            }, 500);
        }
    }


    function play() {
        if (playerChoice === 'rock' && compChoice === 'scissors') {
            changePic('img-player', 'media/rock.jpg');
            changePic('img-computer', 'media/scissors.jpg');
            playerScore++;
            document.getElementById('score-player').innerHTML = playerScore.toString();
            checkWin();
        } else if (playerChoice === 'rock' && compChoice === 'paper') {
            changePic('img-player', 'media/rock.jpg');
            changePic('img-computer', 'media/paper.jpg');
            compScore++;
            document.getElementById('score-computer').innerHTML = compScore.toString();
            checkWin();
        } else if (playerChoice === 'scissors' && compChoice === 'paper') {
            changePic('img-player', 'media/scissors.jpg');
            changePic('img-computer', 'media/paper.jpg');
            playerScore++;
            document.getElementById('score-player').innerHTML = playerScore.toString();
            checkWin();
        } else if (playerChoice === 'scissors' && compChoice === 'rock') {
            changePic('img-player', 'media/scissors.jpg');
            changePic('img-computer', 'media/rock.jpg');
            compScore++;
            document.getElementById('score-computer').innerHTML = compScore.toString();
            checkWin();
        } else if (playerChoice === 'paper' && compChoice === 'rock') {
            changePic('img-player', 'media/paper.jpg');
            changePic('img-computer', 'media/rock.jpg');
            playerScore++;
            document.getElementById('score-player').innerHTML = playerScore.toString();
            checkWin();
        } else if (playerChoice === 'paper' && compChoice === 'scissors') {
            changePic('img-player', 'media/paper.jpg');
            changePic('img-computer', 'media/scissors.jpg');
            compScore++;
            document.getElementById('score-computer').innerHTML = compScore.toString();
            checkWin();
        } else if (playerChoice === 'paper' && compChoice === 'paper') {
            changePic('img-player', 'media/paper.jpg');
            changePic('img-computer', 'media/paper.jpg');
        } else if (playerChoice === 'scissors' && compChoice === 'scissors') {
            changePic('img-player', 'media/scissors.jpg');
            changePic('img-computer', 'media/scissors.jpg');
        } else if (playerChoice === 'rock' && compChoice === 'rock') {
            changePic('img-player', 'media/rock.jpg');
            changePic('img-computer', 'media/rock.jpg');
        }
    }
    function reset() {
        changePic('img-player', 'media/question.jpg');
        changePic('img-computer', 'media/computer.jpg');
        playerScore = 0;
        compScore = 0;
        document.getElementById('score-computer').innerHTML = compScore.toString();
        document.getElementById('score-player').innerHTML = playerScore.toString();
    }
};