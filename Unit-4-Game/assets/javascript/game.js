// Global Variables *
// ******************
var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;

var resetAndStart = function () {

    $(".planets").empty();

    var images = [
        'assets/images/earth.jpg',
        'assets/images/jupiter.jpg', 
        'assets/images/saturn.jpg', 
        'assets/images/neptune.jpg'];

    randomResult = Math.floor(Math.random() * 119) + 1;

    $("#result").html('Random Result: ' + randomResult);

    for (var i =0; i < 4; i++) {

        var randomNumber = Math.floor(Math.random() * 11) + 1;

        var planet = $("<div>");
            planet.attr({ 
                "class": 'planet',
                "data-random": randomNumber
            });
            planet.css({
                "background-image": "url(" + images[i] + ")",
                "background-size":"cover"
            });
            // To display numbers in box Use this:
            // planet.html(randomNumber);

        $(".planets").append(planet);
    }

    $("#previous").html("Your total score: " + previous);

}

resetAndStart();

$(document).on('click', ".planet", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;
    $("#previous").html("Your total score: " + previous);

    console.log(previous);

    if (previous > randomResult) {
        losses++;

        $("#losses").html("Losses: " + losses);

        previous = 0;

        resetAndStart();
    }
    else if (previous === randomResult) {
        wins++;

        $("#wins").html("Wins: " + wins);

        previous = 0;

        resetAndStart();
    }

});

// Game Breakdown:
// A game with 4 planets (Earth, Jupiter, Saturn, & Neptune) with random results
// Each planet has a random value that ranges from 1-12
// Each planet will be assigned a new value every time the user wins or loses
// When you click on a certain planet, it will continue adding its assigned value until the user has reached/ or surpassed the -
// random targeted score
// There will be a for loop that will determine:
// If our score is equal to the targeted score, then the game resets adding a win to the counter
// If our score is greater than the targeted score, then the game resets with a loss to the counter


