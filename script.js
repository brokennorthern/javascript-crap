window.onload = function() {
    const STARTINGMONEY = 1000;
    let funds = STARTINGMONEY;
    let winnings = 0;
    let gameType = 2;

    document.getElementById('button1').onclick = function() {
        gameType = 1;
        document.getElementById('gametype').innerText = '<7';
    }
    document.getElementById('button2').onclick = function() {
        gameType = 2;
        document.getElementById('gametype').innerText = '=7';
    }
    document.getElementById('button3').onclick = function() {
        gameType = 3;
        document.getElementById('gametype').innerText = '>7';
    }


    document.getElementById('myButton').onclick = function() {
        if (funds <= 0) {
            alert('You have no funds left. Please restart the game.');
            return;
        }
        if (document.getElementById('myTextbox').value === '') {
            alert('Please enter a bet value.');
            return;
        }
        let betValue = parseFloat(document.getElementById('myTextbox').value);

        if (betValue > funds) {
            alert('You do not have enough funds to place this bet.');
            return;
        }

        let diceRoll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);

        if (gameType === 1) {
            if (diceRoll < 7) {
                winnings += betValue;
                funds += betValue;
            } else {
                winnings -= betValue;
                funds -= betValue;
            }
        }
        else if (gameType === 2) {
            if (diceRoll === 7) {
                winnings += betValue*2;
                funds += betValue*2;
            } else {
                winnings -= betValue;
                funds -= betValue;
            }
        }
        else if (gameType === 3) {
            if (diceRoll > 7) {
                winnings += betValue;
                funds += betValue;
            } else {
                winnings -= betValue;
                funds -= betValue;
            }
        }

        updateFunds();
    };

    function updateFunds() {
        document.getElementById('money').innerText = funds;
        document.getElementById('winnings').innerText = winnings;
    }
};