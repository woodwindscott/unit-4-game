//Declaring global variables
var crystals = ["diamond", "emerald", "ruby", "sapphire"];
var crystalSource = ["assets/images/diamond.png", "assets/images/emerald.jpg", "assets/images/ruby.jpg", "assets/images/sapphire.jpeg"];
var crystalDestination = ["#crystal-1", "#crystal-2", "#crystal-3", "#crystal-4"];
var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = 0;

$("#total-score").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);

function startGame() {

    //Reset variables
    counter = 0;
    targetNumber = 0;
    $("#total-score").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);

    // Generate the random target number between 19 & 120
    targetNumber = (Math.floor(Math.random() * 102) + 19);
    $("#target-score").text(targetNumber);

    // For loop to generate crystal images and values
    for (var i = 0; i < crystals.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");
    
        // First each crystal will be given the class ".crystal-image card-img-top".
        imageCrystal.addClass("crystal-image card-img-top");
    
        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", crystalSource[i]);
    
        // Generate a random number from 1 to 12 to be assigned to each crystal
        var value = (Math.floor(Math.random() * 12) + 1);
        imageCrystal.attr("data-crystalvalue", value);
    
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $(crystalDestination[i]).html(imageCrystal);
    }

}

function roundComplete() {

    //Adds value of crystal to total score and displays it
    counter += crystalValue;
    $("#total-score").text(counter);

    // You win
    if (counter === targetNumber) {
        wins++;
        alert("You win!");
        startGame();
    }

    // You lose
    if (counter > targetNumber) {
        losses++
        alert("You lose!");
        startGame();
    }
}

// Actual run of game
//===================

startGame();

$(document).on("click", ".crystal-image", function() {
    // Grab the value of each crystal when clicked
    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);

    roundComplete();
});