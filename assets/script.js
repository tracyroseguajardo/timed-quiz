/* GLOBAL VARIABLES */
// Store Questions as Objects
var questions = [
  {
    Question: "A???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
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

// DOM ELEMENTS
var startQuiz = document.getElementById("start");
var startEl = document.getElementById("starter");
var quizEl = document.getElementById("quiz");
var timeEl = document.querySelector("#time");
var timerInterval;
var score = 0
//var currentQuestionObj = questions[index];

/* DECLARED FUNCTIONS */
function start() {
  //immediately shows time remaining upon start with no delay
  timeEl.textContent = secondsLeft + " seconds remaining of quiz."
  // when the user clicks start we need to start the timer
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining of quiz.";
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

  // add the elements to quizEl
  quizEl.append(questionTitle, buttonDiv);

  function checkAnswer() {
    console.log(this.value);
    //console.log(event.target.value);
    // check if the answer is wrong
    console.log(currentQuestionObj.Answer);
    if (this.value != currentQuestionObj.Answer) {
      // deduct 11 sec from the time
      secondsLeft = (secondsLeft - 11);
      timeEl.textContent = secondsLeft + " seconds remaining of quiz.";
      } else {
      //increase score +1  
      score = (score + 1);
      console.log(score);
    }
    // // increase the index by 1
    var nextQuestion = questions[index++];
    console.log(nextQuestion);
    currentQuestionObj = nextQuestion;
    console.log(currentQuestionObj);
    questionTitle.textContent = currentQuestionObj.Question;
  }

  // if there are no more questions in the array end the game else ask the next question
  // for (var i = 0; i < (currentQuestionObj); i++) {
  //   console.log(currentQuestionObj);
  //   questionTitle.textContent = currentQuestionObj.Question;
  // }


  // // function nextQuestion() {
  //   for (var i = 0; i < (currentQuestionObj); i++) {
  //   console.log(currentQuestionObj);
  //   questionTitle.textContent = currentQuestionObj.Question;
  // }
  //   if (currentQuestionObj.Question[i++]) {
  //questionTitle.textContent = currentQuestionObj.Question[i++];
  // console.log(currentQuestionObj.Question[i++])
  //}
  // }

  // //In case time runs out before quiz completed
  // if (secondsLeft === 0) {
  //   clearInterval(timerInterval);
  //   //sendMessage();
  //   //return quiz
  // }
}

// create function that ends the game and stops your timer, hides the wquestion container and displays the game over container

/* EVENT LISTENERS */
startQuiz.addEventListener("click", start);





















// TOP: any global variables

// MIDDLE: any functions that are declared

// BOTTOM:  all event listeners

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

  //In case time runs out before quiz completed
  // if (secondsLeft === 0) {
    // clearInterval(timerInterval);
    // sendMessage();
    //return quiz
  // }

    // function sendMessage() {
  //   timeEl.textContent = "TIME OUT";
  // }

  // Appends active question to HTML quiz div

    //for loop to pass through all questions
    // for (var i = 0; i < questions.length; i++){}