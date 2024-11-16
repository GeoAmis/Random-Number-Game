const guess = document.getElementById("guess-box");
const check = document.getElementById("check");
const result = document.getElementById("result");
const guessedNumbers = document.getElementById("guessed-numbers");

const min=1;
const max=100;
const guessArray = [];

const randomNumber = Math.floor(Math.random()*(max-min+1));
console.log(randomNumber);

guess.addEventListener("keyup", function(event) {
    if (event.code === "Enter")
        checkGuess();
  })

check.addEventListener("click", checkGuess);

function checkGuess() {
    const userValue = Number(guess.value);

    if (guessArray.length<10) {
        if (userValue === '') {
            result.textContent="You must write something!";
        }
        else if (userValue<min || userValue>max) {
            result.textContent="Please enter a valid number!";
        }
        else {
            guessArray.push(userValue);
            let tries = guessArray.join(' ,');
            guessedNumbers.textContent= "Tries: " + tries;

            if (userValue < randomNumber) {
                result.textContent="Too low!";
                result.style.color= "red";
            }
            else if (userValue > randomNumber) {
                result.textContent="Too high!";
                result.style.color= "red";
            }
            else if (userValue === randomNumber) {
                result.textContent="Congratulations!";
                result.style.color= "green";
            }
        }
    }
    else {
        result.textContent="Game Over!";
        result.style.color= "red";
    }
    guess.value="";
}