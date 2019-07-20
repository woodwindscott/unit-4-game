var crystals = ["diamond", "emerald", "ruby", "sapphire"];
var crystalSource = ["assets/images/diamond.png", "assets/images/emerald.jpg", "assets/images/ruby.jpg", "assets/images/sapphire.jpeg"];
var crystalDestination = ["#crystal-1", "#crystal-2", "#crystal-3", "#crystal-4"];
console.log(crystalSource);


for (var i = 0; i < crystals.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image card-img-top");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", crystalSource[i]);

    var value = (Math.floor(Math.random() * 12) + 1);
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", value);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $(crystalDestination[i]).append(imageCrystal);

}

$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
});