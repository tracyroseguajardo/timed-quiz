var startQuiz = document.querySelector("#start");
startQuiz.addEventListener("click", function() {
  var secondsLeft = 120;
    function setTime()
});


var timeEl = document.querySelector(".timeLeft");
var mainEl = document.getElementById("main");


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining of quiz.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "TIME OUT";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

}

setTime();