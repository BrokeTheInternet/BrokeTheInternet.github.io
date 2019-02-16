var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var randomLetters = [Math.floor(Math.random() * letters.length)];
var computerChoices = letters[randomLetters];
var wins = 0;
var losses = 0;
var guesses = 10;
var used = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var usedText = document.getElementById("used-text");

var reset = function () {
  
}
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var randomLetters = [Math.floor(Math.random() * letters.length)];
  var computerGuess = letters[randomLetters];

  // Reworked our code from last step to use "else if" instead of lots of if statements.

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if (userGuess === "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z") {

    if (userGuess === computerGuess) {
      wins++;
      guesses = 9;
      used = [];

    } else if (userGuess !== computerGuess) {
      guesses--;
      used.push(userGuess);

    } if (guesses < 1) {
      losses++;
      
      
    } if (guesses === 0) {
      guesses = 9;
      used = [];
    }

    // Hide the directions
    directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "I am thinking of: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "Guesses remaining: " + guesses;
    usedText.textContent = "Your Guesses so far: " + used;
  }
};