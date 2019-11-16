/* Variables */
var scores, roundScore, activePlayer, gamePlaying;

function initialization() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';

    /* Reset Scores and Player Names*/
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

initialization();

document.querySelector('.btn-new').addEventListener('click', initialization);

document.querySelector('.btn-roll').addEventListener('click', function () {

//    1. Check if the game is playing or not.
    if (gamePlaying) {

        //    2. Generate Two random numbers and store them in variables
        var dice1 = Math.floor(Math.random() * 6) + 1;
        


        //    3. Display the result on the page
        document.getElementById('dice-1').style.display = 'block';
        
        document.getElementById('dice-1').src = 'images/d-' + dice1 + '.png';
        


        //    4. Update the round score if both the dice values are not 1
        if (dice1 !== 1 ) {
            // Add Score
            roundScore += dice1 
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            // Switch Player
            
            nextPlayer();
        }

    }

});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.getElementById('dice-1').style.display = 'none';
   

}


document.querySelector('.btn-hold').addEventListener('click', function () {
   
    if(gamePlaying)
    {
        scores[activePlayer] += roundScore;
        
    //    Update the UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        if(input) {
            winningScore = input;
        }
        
        else
        {
            winningScore = 100;
        }
        
        
        
    //    Check if the player has already won the game or not.
        if(scores[activePlayer] >= winningScore)
        {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            
            
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
            
            
        }
        
        else
        {
            nextPlayer();
        }        
        
    }
    
    
    
});