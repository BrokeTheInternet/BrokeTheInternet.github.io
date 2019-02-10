var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 10;
var used = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var usedText = document.getElementById("used-text");


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s") || (userGuess === "a") || (userGuess === "b") || (userGuess === "c")) {

      if ((userGuess === computerGuess)) {
        wins++;
      } else if (userGuess !== computerGuess) {
        guesses--;
      } if(guesses < 0) {
        losses++;
      } if usedText[0].innerHTML = rightWord;

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