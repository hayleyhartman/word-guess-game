let words = ['dang', 'darn', 'yikes', 'rats', 'shoot'];
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let chosenWord = '';
let wordLength;

let underscores = [];
let wrongWord = [];

startGame = () => {
    guessesLeft = 10
    underscores = []
    wrongWord = []
    updatePage('wrongGuess', wrongWord)

    chosenWord = words[Math.floor(Math.random () * words.length)];

    findLength(chosenWord)

    updatePage('underscores', underscores.join(' '))

    document.onkeyup = (event) => {
        let letterGuessed = event.which;
        if(event.which >= 65 && event.which <= 90){
            letterGuessed = event.key;
            check(letterGuessed);
            console.log(letterGuessed)
        }
        else{
            console.log('Not a letter.  Guess again')
        }}; 
}

updatePage = (getId, toWhat) => {
    document.getElementById(getId).textContent = toWhat
}

check = (letter) => {
    let correctLetter = false;

    console.log(chosenWord)

    for (let i = 0; i < wordLength; i++) {
        if (chosenWord[i] === letter) {
            correctLetter = true;
        }
    }

    if (correctLetter) {
        for (let i = 0; i < underscores.length; i++) {
            if (chosenWord[i] === letter) {
                underscores[i] = letter
                guessesLeft--
                updatePage('underscores', underscores.join(' '))
            }
            didYouWin()
        }
    } else {
        wrongWord.push(letter)
        wrongWord.toString()
        updatePage('wrongGuess', wrongWord.join(' '))
        guessesLeft--
        updatePage('movesLeft', guessesLeft)
        console.log(guessesLeft)
}
if (guessesLeft === 0) {
    losses++
    updatePage('docLosses', losses)
    startGame()
}}

didYouWin = () => {

    if (underscores.join('') === chosenWord) {
        console.log('you win!')
        win()
    }
}

win = () => {
    wins++
    updatePage('docWins', wins)
    console.log('wins' + wins)
    startGame()
}

findLength = (word) => {
    let lettersInWord = word.split('')
    wordLength = lettersInWord.length

    console.log(wordLength)

    for(let i = 0; i < wordLength; i++) {
        underscores.push('_ ');
    }
}

document.getElementById('submit').onclick = function() {
    event.preventDefault()
    let input = document.getElementById('input')
    words.push(input.value)
    console.log(words)
    document.getElementById('form').reset()
}

startGame()
