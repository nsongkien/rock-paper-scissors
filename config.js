//load html before javascript
window.onload=function(){
   
var playerPoints = 0;
var comPoints=0;
var p='';
var c='';
var kq;
let playerPointsBox= document.querySelector('.player')
let comPointsBox = document.querySelector('.computer');
   

function getComputerChoice () {
   let randomNum = Math.floor(Math.random() * 3);
   switch (randomNum) {
      case 0: return 'rock';
      case 1: return 'paper';
      case 2: return 'scissors';
   }
}
//old way of getting player's choice manually
/*
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
*/
function playRound(playerSelection, computerSelection) {
   p=playerSelection;
   c=computerSelection;
//when draw
   if (playerSelection===computerSelection) {
      kq='draw';
      return kq; 
   } 
//when player chooses rock
   if (playerSelection==='rock')
      if (computerSelection==='paper') {
         comPoints++;
         kq='loose'
         return kq;
      }
      else if (computerSelection==='scissors') {
         playerPoints++;
         kq='win'
         return kq;  
      }
//when player chooses scissors    
   if (playerSelection==='scissors')
      if (computerSelection==='rock') {
         comPoints++;
         kq='loose'
         return kq;
      }
   else
      if (computerSelection==='paper') {
         playerPoints++;
         kq='win'
         return kq;  
      }
//when player chooses paper  
   if (playerSelection==='paper')
      if (computerSelection==='scissors') {
         comPoints++;
         kq='loose'
         return kq;
      }
   else
      if (computerSelection==='rock') {
         playerPoints++;
         kq='win'
         return kq;  
      }
   
   
}

//already combined into the DOM method so don't need this function anymore
/*
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
}*/



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      playRound(button.id,getComputerChoice());
      playerPointsBox.textContent=playerPoints;
      comPointsBox.textContent=comPoints;
      console.log(p);
      console.log(c);
      console.log(kq);
      console.log(playerPoints);
   console.log(comPoints);
   })
})



}