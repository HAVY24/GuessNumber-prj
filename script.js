'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number🎉';
// document.querySelector('.number').textContent= 22;
// document.querySelector('.score').textContent =67;
// console.log(document.querySelector('.guess').value=23);
// document.querySelector('.guess').value;

let secretnumber= Math.trunc(Math.random()*20)+1;
let score=20;
let highscore =0;

const displayMessage = function(message){
    document.querySelector('.message').textContent= message;
}

document.querySelector('.check').addEventListener('click', function(){
        const guess= document.querySelector('.guess').value;
        console.log(guess, typeof guess);
    if(!guess){
        // document.querySelector('.message').textContent='No number ⛔';
        displayMessage('No number ⛔');
    } else if (guess == secretnumber){
        document.querySelector('.number').textContent= secretnumber;
        // document.querySelector('.message').textContent='Correct Number 🎉';
        displayMessage('Correct Number 🎉');
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent= highscore;
        }
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
    } else if( guess != secretnumber){
        if(score>1){
                // document.querySelector('.message').textContent= guess < secretnumber ? 'Higher number↗️' : 'Lower number↘️';
                displayMessage(guess < secretnumber ? 'Higher number↗️' : 'Lower number↘️');
                score--;
                document.querySelector('.score').textContent= score;
                } else{
                    // document.querySelector('.message').textContent='You lost the game hhhh💥';
                    displayMessage('You lost the game hhhh💥');
                    document.querySelector('.score').textContent=0;
                }
    }
});
    //  else if (guess < secretnumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent='Higher number↗️';
    //     score--;
    //     document.querySelector('.score').textContent= score;
    //     } else{
    //         document.querySelector('.message').textContent='You lost the game hhhh💥';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }else if (guess > secretnumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='Lower number↘️';
    //         score--;
    //         document.querySelector('.score').textContent= score;
    //         } else{
    //             document.querySelector('.message').textContent='You lost the game hhhh💥';
    //             document.querySelector('.score').textContent=0;
    //         }
    // }


document.querySelector('.again').addEventListener('click', function(){

    secretnumber= Math.trunc(Math.random()*20)+1;
    score=20;
    // document.querySelector('.message').textContent='Start guessing...';
    displayMessage('Start guessing...🧐')
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    
})