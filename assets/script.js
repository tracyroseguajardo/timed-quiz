// Quiz questions stored as objects
var queshOne = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshTwo = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshThree = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshFour = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshFive = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshSix = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshSeven = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshEight = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshNine = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

var queshTen = {
  Question: "???",
  A: "answer",
  B: "answer",
  C: "answer",
  D: "answer",
};

// Calling question objects into an array
var questions = ["queshOne", "queshTwo", "queshThree", "queshFour", "queshFive", "queshSix", "queshSeven", "queshEight", "queshNine", "queshTen"];
console.log(questions);
console.log(queshTen);
console.log(questions[3]);

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
// //This one didnt work
//   var quizEl = document.getElementById("quiz");
//   var questionOne = document.createElement("ol");
//   function quizSequence() {
//     questionOne.textContent = "question one?"
//     document.body.appendChild("quizEl");
//   }

  // This one actually appended
  var quizEl = document.getElementById("quiz");
  function quizSequence() {
    quizEl.textContent = "Question 1";
    document.body.appendChild(quizEl);
  }

  timeRemaining();
  quizSequence();

});

