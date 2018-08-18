//global variables
var words = ["dang", "darn", "yikes", "rats"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var chosenWord = '';

//if user wins
var userWins = function(wins){
    var userText = document.getElementById("docWins");
}

//if user loses 
var userLoses = function(losses){
    var userText = document.getElementById("docLosses");
}

//chooses random word
var chosenWord = words[Math.floor(Math.random () * words.length)];
console.log(chosenWord)

//start game function
//arrays to put guesses into

var underscore = [];
var rightWord = [];
var wrongWord = [];

var startGame = function () {
guessesLeft = 10;
rightWord = [0];
wrongWord = [0];
}

//DOM manipulations
var docUnderscore = document.getElementsByClassName('underscores');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
var docMovesLeft = document.getElementsByClassName('movesLeft')

//main body
//create underscores based on length of word

var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}

console.log(generateUnderscore());
//docUnderscore.textContent = generateUnderscore;
docUnderscore[0].textContent = underscore.join('');

//get users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);

if (onkeyup = true) {
    docMovesLeft--;
}
    
//if users guess is right
    if (chosenWord.indexOf(keyword) > -1) {
//add to right words array
    rightWord.push(keyword); 
    }


//replace underscore with right letter
    underscore[chosenWord.indexOf(keyword)] = keyword;

    docUnderscore[0].textContent = underscore.join('');
    docRightGuess[0].textContent = rightWord;
    docWrongGuess[0].textContent = wrongWord;

//checks to see if user word matches guesses
    if (underscore.join('') == chosenWord) {
        alert(chosenWord + ", you win!");
        guessesLeft = 10;
        userWins(wins);
        userText.textContent = document.wins;
        startGame();
    }
    else if (guessesLeft !== 0) {
        wrongWord.push(keyword);
        console.log(wrongWord);
        guessesLeft--;
        startGame();
    }
    else {
        losses = losses + 1;
        userLoses(losses);
    }

});

//if right, push to right array
//if wrong, push to wrong array

//program doesn't care about letter order

//add scorekeepers?


