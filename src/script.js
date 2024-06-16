let score = 0;
let canClick = true;
let timerStarted = false;
let timeLeft = 5; // time in seconds
let clicksInOneSecond = 0; // counter for clicks in one second

const clickButton = document.getElementById("clickButton");
const clicksDisplay = document.getElementById("clicks");
const timerDisplay = document.getElementById("timer");
const clicksPerSecondDisplay = document.getElementById("clicksPerSecond");

// Initially hide the timer display and clicks per second display
timerDisplay.style.display = "none";
clicksPerSecondDisplay.style.display = "none";

clickButton.addEventListener("click", () => {
  if (canClick) {
    score++;
    clicksInOneSecond++;
    clicksDisplay.textContent = `Clicks: ${score}`;

    if (!timerStarted) {
      timerStarted = true;

      // Make the timer and clicks per second displays visible
      timerDisplay.style.display = "block";
      clicksPerSecondDisplay.style.display = "block";

      // Set up interval to update time left and disable button after 5 seconds
      const timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          canClick = false;
          timerDisplay.textContent = "Time's up!";
        }
      }, 1000);

      // Set up interval to reset clicks per second counter every second
      const clicksPerSecondInterval = setInterval(() => {
        clicksPerSecondDisplay.textContent = `CPS: ${clicksInOneSecond}`;
        clicksInOneSecond = 0; // Reset counter for the next second

        if (timeLeft <= 0) {
          clearInterval(clicksPerSecondInterval);
        }
      }, 1000);
    }
  }
});
