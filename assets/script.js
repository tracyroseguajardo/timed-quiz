// Quiz questions stored as objects within an array
var questions = [
  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },
]

// Calling question objects from array
console.log(questions);
console.log(questions[3]);

// For Argument to get quiz questions to rotate through
for (var i = 0; i < questions.length; i++) {
  var activeQuestion = randomIndex(questions);
  console.log(activeQuestion);
}

// Randomly pulls a number will be used to call from the index of the questions array
function randomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

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
    quizEl.textContent = activeQuestion;
    document.body.appendChild(quizEl);
  }

  timeRemaining();
  quizSequence();

});