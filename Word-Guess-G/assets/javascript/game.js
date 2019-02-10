// var wins = 0;
// var guessesRemaining = 0;


// GLOBAL VARIABLES
// ============================================================================================
// Create an array of words
 var artists = ["drake", "ti", "nickyjam", "malu", "logic", "rehab"];
 // Choose words randomly
 var randomArtist = [Math.floor(Math.random() * artists.length)];
 var playerGuess = artists[randomArtist];
 var rightWord = [];
 var wrongWord = [];
 var underScore = [];
 var guesses = 10;

 // DOM manipulation
 var docUnderScore = document.getElementsByClassName('underscore');
 var docRightGuess = document.getElementsByClassName('rightGuess');
 var docWrongGuess = document.getElementsByClassName('wrongGuess');
 var guessesText = document.getElementById("guesses-text");


// GLOBAL VARIABLES
// ============================================================================================
console.log(playerGuess);
// Create underscores based on length of word
var generateUnderscore = () => {
    for (var i = 0; i < playerGuess.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

 // Get user guess
document.addEventListener("keypress", (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
 // if player guess is right
    if (playerGuess.indexOf(keyWord) > -1) {
    // add to right word array
        rightWord.push(keyWord);
        // replace underscore with letter
        underScore[playerGuess.indexOf(keyWord)] = keyWord;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        // Checks to see if user word matches guesses
        if (underScore.join('') == playerGuess) {
        }
    }
    else {
        wrongWord.push(keyWord);
        docWrongGuess[0].innerHTML = wrongWord;
    }
    if (rightWord !== wrongWord) {
        guesses--;
    }
});


docUnderScore[0].innerHTML = generateUnderscore().join(' ');
guessesText.textContent = "Guesses remaining: " + guesses;
 // Check if guess is right 
 // if right push to right array
 // if worng push to wrong array

 //