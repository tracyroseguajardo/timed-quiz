// Store Questions as Objects
var questions = [
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
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
    choices: ['A', 'b', 'c', 'd', 'e'],
    Answer: "d",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "D???",
    choices: ['A', 'b', 'c', 'd', 'f', 'e'],
    Answer: "c",
  },
  {
    Question: "D???",
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
var currentQuestionObj = questions[index];

function start() {

  timeEl.textContent = secondsLeft + " seconds remaining of quiz."
  // when the user clicks start we need to start the timer
  timerInterval = setInterval(function() {
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
// get the current question object from the array
//var currentQuestionObj = questions[index];

//  create elment to display our question title
var questionTitle = document.createElement("h3");
questionTitle.textContent = currentQuestionObj.Question;

// create element to house the buttons
var buttonDiv = document.createElement("div");

// create button dynamically based off of choice array in question variable
for (var i = 0; i < currentQuestionObj.choices.length; i++) {
  // create buttons
  var btn = document.createElement("button");
  btn.textContent = currentQuestionObj.choices[i];
  btn.setAttribute('value', currentQuestionObj.choices[i])
  //add event listener to buttons
  // btn.addEventListener("click", function() {
  //   btn.value = checkAnswer
  // });
  btn.onclick = checkAnswer;

  // add buttons to container that house buttons
  buttonDiv.append(btn);
}

// add the elements to quizEl
quizEl.append(questionTitle, buttonDiv);
}

function checkAnswer(){
  console.log(this.value);
  //console.log(event.target.value);
  // check if the answer is wrong
  console.log(currentQuestionObj.Answer);
  if (this.value != currentQuestionObj.Answer) {
  // deduct 11sec from the time
  secondsLeft = (secondsLeft - 11);
  timeEl.textContent = secondsLeft + " seconds remaining of quiz.";
  } else {
  // // increase the index by 1
  // (response + 1)
  score = (score + 1);
  console.log(score);
  } 
}

// if there are no more questions in the array end the game else ask the next question
// currentQuestionObj.question[i++];

// }

// create function that ends the game and stops your timer, hides the wquestion container and displays the game over container

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