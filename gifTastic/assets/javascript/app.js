var topics = ["Halo", "CoD", "Pokemon", "Runescape", "World of Warcraft",
"CS Go", "Rocket League", "League of Legends", "Fortnite", "PUBG",
"Battlefield", "Rainbow Six Siege", "Destiny", "Fallout", "Zelda",
"Super Mario", "Tomb Raider", "Grand Theft Auto"];
<<<<<<< HEAD
var numberOfGIFs = 10;
var cutOffRating = "";

=======
var limit = 10;
var rating = "";
>>>>>>> e787c12f93eeec672422c94a9da35de60795a775

function renderButtons(){
	for(var i = 0; i < topics.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("btn");
<<<<<<< HEAD
		newButton.addClass("video-button");
		newButton.text(topics[i]);
		$("#button-container").append(newButton);
	}
	$(".video-button").unbind("click");

	$(".video-button").on("click", function(){
		$(".gif-image").unbind("click");
		$("#gif-container").empty();
		$("#gif-container").removeClass("dotted-border");
		populateGIFContainer($(this).text());
=======
		newButton.addClass("game-button");
		newButton.text(topics[i]);
		$("#button-container").append(newButton);
	}
	$(".game-button").unbind("click");

	$(".game-button").on("click", function(){
		$(".gif-image").unbind("click");
		$("#gif-container").empty();
		$("#gif-container").removeClass("border");
		generateGIF($(this).text());
>>>>>>> e787c12f93eeec672422c94a9da35de60795a775
	});

}

function addButton(game){
	if(topics.indexOf(game) === -1) {
		topics.push(game);
		$("#button-container").empty();
		renderButtons();
	}
}

<<<<<<< HEAD
function populateGIFContainer(game){
	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search?q=" + game + 
		"&api_key=61TKqzUDPHfv40Bqr6iEsqqBCfa360mt&rating=" + cutOffRating + "&limit=" + numberOfGIFs,
=======
function generateGIF(game){
	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search?q=" + game + 
		"&api_key=6dIJwSDW192UvdU09wiWnGsYeSaGFF4S&rating=" + rating + "&limit=" + limit,
>>>>>>> e787c12f93eeec672422c94a9da35de60795a775
		method: "GET"
	}).then(function(response){
		response.data.forEach(function(element){
			newDiv = $("<div>");
			newDiv.addClass("individual-gif-container");
			newDiv.append("<p>Rating: " + element.rating.toUpperCase() + "</p>");
			var newImage = $("<img src = '" + element.images.fixed_height_still.url + "'>");
			newImage.addClass("gif-image");
			newImage.attr("state", "still");
			newImage.attr("still-data", element.images.fixed_height_still.url);
			newImage.attr("animated-data", element.images.fixed_height.url);
			newDiv.append(newImage);
			$("#gif-container").append(newDiv);
		});
		
<<<<<<< HEAD
		$("#gif-container").addClass("dotted-border");
=======
		$("#gif-container").addClass("border");
>>>>>>> e787c12f93eeec672422c94a9da35de60795a775
		$(".gif-image").unbind("click");
		$(".gif-image").on("click", function(){
			if($(this).attr("state") === "still") {
				$(this).attr("state", "animated");
				$(this).attr("src", $(this).attr("animated-data"));
			}
			else {
				$(this).attr("state", "still");
				$(this).attr("src", $(this).attr("still-data"));
			}
		});
	});
}

$(document).ready(function(){
	renderButtons();
	$("#submit").on("click", function(){
		event.preventDefault();
		addButton($("#video-game").val().trim());
		$("#video-game").val("");
	});
});