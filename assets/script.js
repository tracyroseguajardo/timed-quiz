// var startQuiz = document.querySelector("#start");
// startQuiz.addEventListener("click", function() {
//     function timeRemaining()
// });

var timeEl = document.querySelector(".timeLeft");

var secondsLeft = 120;
function timeRemaining() {
  var timerInterval = setInterval(function() {
  secondsLeft--;
  timeEl.textContent = secondsLeft + " seconds remaining of quiz.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "TIME OUT";
}

timeRemaining();

