
function pickComputerMove() {
  const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
computerMove='paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1){
computerMove='scissor';
    }
    return computerMove;
}
function playGame(playerMove){
const computerMove =pickComputerMove();
let result ='';
 if (playerMove==='rock'){
if (computerMove === 'rock') {
result = 'Tie.';
} else if (computerMove === 'paper'){
result = 'You lose.';
}else if (computerMove === 'scissor'){
result = 'You win.';
}
 }
 else if(playerMove==='paper'){
   if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper'){
    result = 'Tie.';
   }else if (computerMove === 'scissor'){
    result = 'You lose.';
   }
 }
 else if (playerMove==='scissor'){
  if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper'){
    result = 'You win.';
   }else if (computerMove === 'scissor'){
    result = 'Tie.';
   }
 }

alert(`Your move ${playerMove}. Computer move ${computerMove}. ${result} ` );
}