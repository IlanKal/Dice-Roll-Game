var randomNumber1 = Math.floor(Math.random() * 6 + 1); 
var randomNumber2 = Math.floor(Math.random() * 6 + 1); 

var imageElement1 = document.querySelector('.img1');
var imageElement2 = document.querySelector('.img2');

var imageFilenames = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'
];

imageElement1.src = imageFilenames[randomNumber1 - 1];
imageElement2.src = imageFilenames[randomNumber2 - 1];

var text = document.querySelector("h1");
var h1Array = ["Player 1 wins!", "Player 2 wins!", "Draw!"];

if (randomNumber1 > randomNumber2) {
    text.textContent = h1Array[0];
}
else if(randomNumber1 < randomNumber2){
    text.textContent = h1Array[1];
}
else{
    text.textContent = h1Array[2];
}


var refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", function() {
    location.reload();
});

