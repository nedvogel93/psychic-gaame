var compChoice = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z","z",
];
var win = 0;
var loss = 0;
var guess = 9;

var winSpan = document.getElementById("winner");
  var lossSpan = document.getElementById("loser");
  var guessSpan = document.getElementById("guesser");

document.onkeyup = function(event)
{
    var userChoice = event.key;
    var computerGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
if(userChoice === computerGuess){
    win++;
    winSpan.textContent = "Wins" + win;}

else{ 
    loss++;
    guess--;
    lossSpan.textContent = "Losses" + loss;
    guessSpan.textContent = "Guesses Left: " + guess;}
if( guess < 1)
    { 
    lossSpan.textContent = "You Lose";
    winSpan.textContent = "You Lose";
    guessSpan.textContent = "You Lose";}   
        
  

 
}   
