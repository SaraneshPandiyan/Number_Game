let secretNumber = Math.floor(Math.random() * 100) + 1;
let lives =10;

const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const livesText = document.getElementById('lives-text');
const message = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again-btn');

submitBtn.addEventListener('click', handleGuess);
playAgainBtn.addEventListener('click', resetGame);

function handleGuess() {
  const guess = Number(guessInput.value);
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    message.textContent = "Enter a number between 1 and 100!";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    endGame();
  } else {
    lives--;
    if (lives === 0) {
      message.textContent = `💀 Game Over! The number was ${secretNumber}.`;
      endGame();
    } else {
      const hint = guess > secretNumber ? "too high" : "too low";
      message.textContent = `Oops! Your guess is ${hint}. Lives left: ${lives}`;
      livesText.textContent = `Lives: ${lives}`;
    }
  }
  guessInput.value = "";
}
function endGame() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
  playAgainBtn.style.display = "inline-block";
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  lives = 10;
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
  playAgainBtn.style.display = "none";
  message.textContent = "";
  livesText.textContent = "Lives: 10";
}
