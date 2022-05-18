var startQuiz = document.getElementById("start");
startQuiz.addEventListener("click", function() {
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

});


