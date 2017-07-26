let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
let targetPara = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach(() => {
	targetPara.innerHTML = planets.join(" ");
});

// Use the map method to create a new array where the first letter of each planet is capitalized


function capitalizeFirstChar(element) {
	return element.charAt(0).toUpperCase() + element.slice(1 ,8); 
}

// Use the filter method to create a new array that contains planets with the letter 'e'

function filterIt(element) {
  if (element.indexOf("e") === -1) {
    return element;
  }
}

let filteredPlanets = planets.filter(filterIt);
console.log(filteredPlanets);

// Use the reduce method to create a sentence from the words in the following array

let words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentence = words.reduce(function(previousValue, currentValue) {

  return previousValue + " " + currentValue;

});

console.log(sentence);