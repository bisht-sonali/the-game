let playerScore = 0;
let computerScore = 0;

const statusDiv = document.getElementById('status');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.choice-btn');

buttons.forEach (button => {
    button.addEventListener('click',() => {
        const playerChoice = button.getAttribute('data-choice');
        playRound(playerChoice);
    });
});

function playRound(playerChoice){
    const choices = ['rock','paper','scissors'];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];

    let result = "";

  if(playerChoice === computerChoice){
    result = `both chose ${playerChoice}. it's a draw!`;
  }
  else if(
    (playerChoice === 'rock' && computerChoice === 'scissors')||
    (playerChoice === 'paper' && computerChoice === 'rock')||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ){
     result = `you chose ${playerChoice}, computer chose ${computerChoice}. you win!`;
      playerScore++;
  }
    else{
      result = `you chose ${playerChoice}, computer chose ${computerChoice}. computer win!`;
      computerScore++;
    }

    statusDiv.textContent = result;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}