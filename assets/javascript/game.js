//global variables
var words = ["dang", "darn", "shoot", "yikes", "jeez"];

//choose word randomly
var chosenWord = words[Math.floor(Math.random () * words.length)];
console.log(chosenWord)

//arrays to put guesses into
var underscore = [];
var rightWord = [];
var wrongWord = [];

//DOM manipulations
var docUnderscore = document.getElementsByClassName('underscores');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

//main body
//create underscores based on length of word
var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}

console.log(generateUnderscore());
docUnderscore[0].innerHtml = underscore.join(' ');

//get users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
//if users guess is right
    if (chosenWord.indexOf(keyword) > -1) {
//add to right words array
    rightWord.push(keyword);

//replace underscore with right letter
    underscore[chosenWord.indexOf(keyword)] = keyword;

    docUnderscore[0].innerHtml = underscore.join(' ');
    docRightGuess[0].innerHTML = rightWord;
    docWrongGuess[0].innerHTML = wrongWord;

//checks to see if user word matches guesses
        if (underscore.join(' ') == chosenWord) {
            alert(chosenWord + ", you win!");
        }
    }


    else {
        wrongWord.push(keyword);
        console.log(wrongWord);
    }

});

docUnderscore[0].innerHtml = generateUnderscore().join(' ');
//if right, push to right array
//if wrong, push to wrong array

//program doesn't care about letter order

//add scorekeepers?


