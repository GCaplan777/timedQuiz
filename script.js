// STARTING DATA Data from the DOM==============================================

const startButton = document.getElementById("start-btn");
console.log("startButton");
var timerEl = document.getElementById("timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

// // create questions in array

let questions = [
  {
    question:
      "To access an HTML element, JavaScript can use the document.getElementById(id) to target?",
    choiceA: "class",
    choiceB: "tags",
    choiceC: "id",
    choiceD: "enemies",
    correct: "C",
  },
  {
    question: "'var x, y, z;' is an example of how to?",
    choiceA: "declare variables",
    choiceB: "assign values",
    choiceC: "confuse enemies",
    choiceD: "compute values",
    correct: "A",
  },
  {
    question: "'var x, y, z;' is an example of how to?",
    choiceA: "declare variables",
    choiceB: "assign values",
    choiceC: "confuse enemies",
    choiceD: "compute values",
    correct: "A",
  },
  {
    question: "The result of adding '5' + 2 + 3 is?",
    choiceA: "55",
    choiceB: "25",
    choiceC: "10",
    choiceD: "523",
    correct: "D",
  },
];
console.log(questions.length);

var score = 0;

for (let i = 0; i < questions.length; i++) {
  console.log(questions[i]);
  var answer = confirm(questions[i].q);
}

// add a loop so each question comes up.

// FUNCTIONS=======================

// create a function connected to startgame, put "event" to act on what's been listened for:
function startGame() {
  console.log("startGame");

  // timer starts
  // array of Q&A is displayed
}

// USER INTERACTIONS

startButton.addEventListener("click", startGame);

// // Helper Functions==========================================================

// // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// // start quiz

// // Updating Display based on user interactions ===============================

// // User will click a start button

// // Rules will dissapear

// // Start button will dissapear

// // Main view appears with questions, multiple answers, timer

// // timer starts countdown from 50seconds

// // if counter reaches 0
// // then game is over

// // user clicks on multiple choice answer

// // if user is correct they get a point
// // and user is alerted "correct"

// // else (or is this and "when/then promise?")
// // user is alerted "incorrect"
// // THEN time is subtracted from clock

// // user will repeat questions and answer

// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over

// // WHEN the game is over
// // Prompt to save user initials and score

// // Starting Data (initialization)  ========================
// // DOM Elements

// // Clear the form==========================
