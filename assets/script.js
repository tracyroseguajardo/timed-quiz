// Store Questions as Objects
var questions = [
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd'],
    Answer: "c",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd'],
    Answer: "A",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd'],
    Answer: "b",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd'],
    Answer: "d",
  },

];

var secondsLeft = 120;

// DOM ELEMENTS
var startQuiz = document.getElementById("start");
var startEl = document.getElementById("starter");
var quizEl = document.getElementById("quiz");
var timeEl = document.querySelector("#time");
var timerInterval;
//var response = 

function start() {

  timeEl.textContent = secondsLeft + " seconds remaining of quiz."
  // when the user clicks start we need to start the timer
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining of quiz.";

    //In case time runs out before quiz completed
    if (secondsLeft === 0) {
      // clearInterval(timerInterval);
      // sendMessage();
      //return quiz
    }

    // //Commented out bc not fully completed
    // //In case a question is answered wrong
    // if(response !== answer) {
    //   secondsLeft - 10;
    // }, 1000;

  }, 1000);

  // hide the starter container
  startEl.setAttribute("class", "hidden");
  // unhide the quiz container
  quizEl.removeAttribute("class");
  
  // function sendMessage() {
  //   timeEl.textContent = "TIME OUT";
  // }

  // Appends active question to HTML quiz div

// FUNCTION TO GET QUESTIONS
  quizSequence();

}

function quizSequence() {
  // quizEl.textContent = JSON.stringify(activeQuestion);
  // document.body.appendChild(quizEl);
  // quizEl.setAttribute("style", "font-size:20px;");
}
// For Argument to get quiz questions to rotate through
// alreadyAsked = []
// //works but repeats questions. I want to cycle through each just once
// for (var i = 0; i < questions.length; i++) {
//   var activeQuestion = randomIndex(questions);
//   console.log(activeQuestion);
//   alreadyAsked.push(activeQuestion);
//   console.log(alreadyAsked);
//   console.log(JSON.stringify(activeQuestion));
// }

// Randomly pulls a number to act as index call
// function randomIndex(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }


startQuiz.addEventListener("click", start);

// TOP: any global variables

// MIDDLE: any functions that are declared

// BOTTOM:  all event listeners