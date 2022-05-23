/* GLOBAL VARIABLES */
// Store Questions as Objects
var questions = [
  {
    Question: "Java is the same as JavaScript",
    choices: ["true", "false"],
    Answer: "false",
  },
  {
    Question: "B???",
    choices: ['A', 'b', 'c', 'd'],
    Answer: "A",
  },
  {
    Question: "C???",
    choices: ['A', 'b', 'c', 'd'],
    Answer: "b",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd', 'e'],
    Answer: "d",
  },
  {
    Question: "E???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "F???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "G???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "H???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "I???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "J???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
];
var index = 0;
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

/* DECLARED FUNCTIONS */
function start() {
  //immediately shows time remaining upon start with no delay
  timeEl.textContent = secondsLeft + " seconds remaining of quiz."
  // when the user clicks start we need to start the timer
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining of quiz.";
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
      timeEl.textContent = secondsLeft + " seconds remaining of quiz.";
      index = (index + 1);
    } else {
      //increase score +1  
      score = (score + 1);
      console.log(score);
      index = (index + 1);
    }
    if (index > questions.length) {
      console.log("RED");
      endGame();
    } else {
      console.log("GREEN");
      quizEl.textContent = "";
      //quizEl.removeChild(questionTitle, buttonDiv);
      quizSequence();
    }
  }   
  // increase the index by 1

  // if there are no more questions in the array end the game else ask the next question
}





// create function that ends the game and stops your timer, hides the question container and displays the game over container

function endGame() {
  //if all questions are answered

  //if time runs out
  if (clearInterval) {

    //hides question container
    quizEl.setAttribute("class", "hidden");

    // show the quiz container
    gameOverEl.removeAttribute("class");

    //create element to show final score
    var finalScore = document.createElement("h3");
    finalScore.textContent = "congrats! your final score is:" + score;

    //create box to enter initials

    //create button to submit initials
  }

}

/* EVENT LISTENERS */
startQuiz.addEventListener("click", start);