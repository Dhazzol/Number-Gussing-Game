var rightGuess = Math.floor(Math.random() * 100 + 1);
var guess = document.querySelector("input");
var submitGuess = document.querySelector(".btn");
var result = document.querySelector(".result");
var newGame = document.querySelector(".new-game");
var attempts = 10;
var guessesRemaining = document.getElementById("guesses-remaining");
var previousGuesses = document.getElementById("previous-guesses");
var guessSlot = [];
let validGuess;


submitGuess.addEventListener("click", function () {
    //make sure right input is entered
    if (
        guess.value === "" ||
        parseInt(guess.value) > 100 ||
        parseInt(guess.value) < 1 ||
        isNaN(parseInt(guess.value))
    ) {
        alert("Enter a number between 1 and 100");
        guess.value = "";
    } else {
        if (guessSlot.indexOf(parseInt(guess.value)) !== -1) {
            alert("Guess another number");
            guess.value = "";
            // return;
        } else {
            attempts--;
            guessesRemaining.textContent = "Guesses Remaining: " + attempts;
            previousGuesses.innerText =
                previousGuesses.innerText + " " + guess.value;
            guessSlot.push(parseInt(guess.value));
            console.log(guessSlot);

            if (attempts > 0 && attempts <= 10) {
                if (parseInt(guess.value) < rightGuess) {
                    result.textContent = "Too Low! Try again!";
                } else if (parseInt(guess.value) > rightGuess) {
                    result.textContent = "To0 High! Try again!";
                } else if (parseInt(guess.value) == rightGuess) {
                    guess.disabled = true;
                    result.textContent = "You Won!!";
                    newGame.textContent = "Start New Game!";
                }
            } else if (attempts === 0 && parseInt(guess.value) != rightGuess) {
                guess.disabled = true;
                result.textContent = `Game Over!. Correct answer is ${rightGuess}`;
                newGame.textContent = "Start New Game!";
            }
        }
    }

    guess.value = "";
});

newGame.addEventListener("click", function (e) {
    attempts = 10;
    result.textContent = "";
    guess.disabled = false;
    guessSlot = [];
    previousGuesses.innerText = "previous Guesses:";
    e.target.innerText = "";
    guessesRemaining.innerText = "Guesses Remaining: " + attempts;
});
