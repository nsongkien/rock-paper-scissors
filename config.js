function getComputerChoice () {
   let randomNum = Math.floor(Math.random() * 3);
   switch (randomNum) {
      case 0: return 'rock';
      case 1: return 'paper';
      case 2: return 'scissors';
   }
}

function getPlayerChoice () {
   let success = false;
   let choice = prompt('Choose rock, paper or scissors:','');
   choice=choice.toLowerCase(choice);
   while (success===false) {
      if (choice!=='rock'&&choice!=='paper'&&choice!=='scissors') {
         alert ('Please choose again');
         choice = prompt('Choose rock, paper or scissors:','');
         choice=choice.toLowerCase(choice);
      } else success=true;
   }
   return choice;
}

function playRound(playerSelection, computerSelection) {
   let win='You\'ve got a point';
   let loose='Computer\'ve got a point';
   if (playerSelection===computerSelection) return 'It\'s a draw';
   if (playerSelection==='rock')
      if (computerSelection==='paper') return loose
   else
      if (computerSelection==='scissors') return win;
   
      if (playerSelection==='scissors')
      if (computerSelection==='rock') return loose
   else
      if (computerSelection==='paper') return win;
   
   if (playerSelection==='paper')
      if (computerSelection==='scissors') return loose
   else
      if (computerSelection==='rock') return win;
   
}

function game() {
   let playerPoints=0;
   let comPoints=0;
   for (let i=0; i<5; i++) {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      if (playRound(playerSelection,computerSelection)==='You\'ve got a point') playerPoints++
      else comPoints++;      
   }
   console.log('Computer\'s points: '+comPoints);
   console.log('Your points: '+playerPoints);
   if (comPoints>playerPoints) {console.log('you loose')} else console.log('you win');
}
game();


