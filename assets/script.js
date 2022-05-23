/* GLOBAL VARIABLES */
// Store Questions as Objects
var questions = [
  {
    Question: "Java is the same as JavaScript",
    choices: ["true", "false"],
    Answer: "false",
  },
  {
    Question: "What does CSS stand for?",
    choices: ["Corrupt System Standard", "Cascading Style Sheets", "Corporate Style System", "Cryptic Style Currency"],
    Answer: "Cascading Style Sheets",
  },
  {
    Question: "What is used to structure a webpage?",
    choices: ["The Browser", "CSS", "HTML", "Console Log"],
    Answer: "HTML",
  },
  {
    Question: "What syntax is used to store an array?",
    choices: ["[ ]", "{ }", "( )", "< >", "$ $"],
    Answer: "[ ]",
  },
  {
    Question: "HTML stands for HyperText Mockup Language",
    choices: ["True", "False"],
    Answer: "False",
  },
  {
    Question: "What function merges two arrays into a new array?",
    choices: [".push()", ".splice()", ".slice()", ".join()", ".concat()"],
    Answer: ".concat()",
  },
  {
    Question: "Which of the following is a complex data type?",
    choices: ["String", "Boolean", "Object", "Number"],
    Answer: "Object",
  },
  {
    Question: "What is the DOM",
    choices: ["Data Object Monument", "Doomed Operating Mission", "Data Object Model", "Document Object Model", "Data Operating Mission"],
    Answer: "Document Object Model",
  },
  {
    Question: "Use append to dynamically add elements from JS to the HTML",
    choices: ["True", "False"],
    Answer: "True",
  },
  {
    Question: "JQuery will soon replace JavaScript completely",
    choices: ["True", "False"],
    Answer: "False",
  },
];
var index = 0
var secondsLeft = 120;
var score = 0

// DOM ELEMENTS
var startQuiz = document.getElementById("start");
var startEl = document.getElementById("starter");
var quizEl = document.getElementById("quiz");
var timeEl = document.querySelector("#time");
var gameOverEl = document.getElementById("gameOver");
var timerInterval;
//var currentQuestionObj = questions[index];
//shows nothing in timer until quiz starts
timeEl.textContent = ""

/* DECLARED FUNCTIONS */
function start() {
  //immediately shows time remaining upon start with no delay
  timeEl.textContent = "Time: " + secondsLeft + " seconds remaining of quiz."
  // when the user clicks start we need to start the timer
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft + " seconds remaining of quiz.";
    //Stop timer at zero if time runs out before quiz completed
    //It still goes - if question wrong with less than 10 sec remaining but it does stop
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  // hide the starter container
  startEl.setAttribute("class", "hidden");
  // unhide the quiz container
  quizEl.removeAttribute("class");

  // FUNCTION TO GET QUESTIONS
  quizSequence();
}

function quizSequence() {
  // get the current question object from the array
  var currentQuestionObj = questions[index];
  //Question Title
  //  create elment to display our question title
  var questionTitle = document.createElement("h3");
  questionTitle.textContent = currentQuestionObj.Question;

  //Answer Buttons
  // create element to house the buttons
  var buttonDiv = document.createElement("div");
  // create button dynamically based off of choice array in question variable
  for (var i = 0; i < currentQuestionObj.choices.length; i++) {
    // create buttons
    var btn = document.createElement("button");
    btn.textContent = currentQuestionObj.choices[i];
    btn.setAttribute('value', currentQuestionObj.choices[i])
    btn.onclick = checkAnswer;

    // add buttons to container that house buttons
    buttonDiv.append(btn);
  }

  // add Title and Button elements to quizEl
  quizEl.append(questionTitle, buttonDiv);

  function checkAnswer() {
    console.log(this.value);
    console.log(currentQuestionObj.Answer);
    if (this.value != currentQuestionObj.Answer) {
      // deduct 11 sec from the time
      secondsLeft = (secondsLeft - 11);
      timeEl.textContent = "Time: " + secondsLeft + " seconds remaining of quiz.";
      index = (index + 1);
    } else {
      //increase score +1  
      score = (score + 1);
      //increase index +1
      index = (index + 1);
    }
  // if there are no more questions in the array end the game else ask the next question
  console.log(index);
  console.log(questions.length);
  if (index === questions.length) {
    endGame();
    } else {
    quizEl.textContent = "";
    quizSequence();
    }
  }   
}

// create function that ends the game and stops your timer, hides the question container and displays the game over container
function endGame() {
  //if all questions are answered
  console.log("no more questions");
  //if time runs out
  clearInterval(timerInterval);
  timeEl.textContent = ""
  //hides question container
  quizEl.setAttribute("class", "hidden");
  // show the gameOver container
  gameOverEl.removeAttribute("class");
  gameOverEl.textContent = "G A M E O V E R"

  //create element to show final score
  var finalScore = document.createElement("h3");
  if (score <= 5) {
    finalScore.textContent = "better luck next time. your final score is: " + score;
  } else {
  finalScore.textContent = "congrats! your final score is: " + score;
  }

  gameOverEl.appendChild(finalScore);

  //create box to enter initials
  var scoreBoard = document.createElement("input");


  //create button to submit initials
  var submit = document.createElement("input");

  //gameOverEl.appendChild(finalScore, scoreBoard, submit);
}

/* EVENT LISTENERS */
startQuiz.addEventListener("click", start);