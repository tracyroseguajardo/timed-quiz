// Quiz questions stored as objects within an array
var questions = [
  {
    Question: "A???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "B???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "C???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "D???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "E???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "F???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "G???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "H???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "I???",
    A: "answer",
    B: "answer",
    C: "answer",
    D: "answer",
  },

  {
    Question: "J???",
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
alreadyAsked = []
//works but repeats questions. I want to cycle through each just once
for (var i = 0; i < questions.length; i++) {
  var activeQuestion = randomIndex(questions);
  console.log(activeQuestion);
  alreadyAsked.push(activeQuestion);
  console.log(alreadyAsked);
  console.log(JSON.stringify(activeQuestion));
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
        //return quiz
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

  // Appends active question to HTML quiz div
  var quizEl = document.getElementById("quiz");
  function quizSequence() {
    quizEl.textContent = JSON.stringify(activeQuestion);
    document.body.appendChild(quizEl);
  }

  timeRemaining();
  quizSequence();

});