// STARTING DATA Data from the DOM==============================================

var startButton = document.getElementById("start-btn");
console.log("startButton");
var scoreButton = document.getElementById("score-btn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("questionDiv");
var selectA = document.getElementById("A");
var selectB = document.getElementById("B");
var selectC = document.getElementById("C");
var selectD = document.getElementById("D");

// STARTING DATA==================================================

// Style to hide starting data (I can remember how to do this from DOM as a class, but then if i want to use later with click elements, do i use a loop?)
questionEl.style.display = "none";
selectA.style.display = "none";
selectB.style.display = "none";
selectC.style.display = "none";
selectD.style.display = "none";
scoreButton.style.display = "none";
timerEl.style.display = "none";

//variable to determine what question we're on.
var currentQuestionIndex = 0;
// variable to determine score
var wins = 0;
// variable for timer
var timeLeft;

// // create questions Object of arrays

let questions = [
  {
    question:
      "To access an HTML element, JavaScript can use the document.getElementById to target...?",
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

// we've added a kind of alternative to a loop

// FUNCTIONS=======================

// create a function when startgame is clicked,
function startGame() {
  console.log("startGame");
  showQuestion();
  // start timer
  timeLeft = 60;
  timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      console.log("This is timeout");
      clearInterval(timerInterval);
      timeleft = "Timeout";
      //afterFinish()
      alert("Yo, step up your game...");
    }
  }, 1000);
}

function showQuestion() {
  console.log("show function has started");
  questionEl.style.display = "initial";
  selectA.style.display = "initial";
  selectB.style.display = "initial";
  selectC.style.display = "initial";
  selectD.style.display = "initial";
  scoreButton.style.display = "initial";
  if (currentQuestionIndex == questions.length - 1) {
    console.log("game over");
    console.log(
      "currentQuestionIndex , length ,",
      currentQuestionIndex,
      questions.length
    );
    alert("game over. Keep studying!");
  } else {
    var current_question = questions[currentQuestionIndex];
    console.log("current question index: ", currentQuestionIndex);
    console.log("checking function");
    questionEl.innerText = current_question.question;
    selectA.innerText = current_question.choiceA;
    selectB.innerText = current_question.choiceB;
    selectC.innerText = current_question.choiceC;
    selectD.innerText = current_question.choiceD;
    //populate the question div and the answer buttons using current_question
  }
}

function scoreQuestion(answer) {
  showQuestion();
  var current_question = questions[currentQuestionIndex];
  if (answer === current_question.correct) {
    console.log("object function");
    wins++;
    scoreButton.innerText = wins;
  } else {
    timeLeft = timeLeft - 5;
  }
  currentQuestionIndex++;
  //showQuestion();
}

// USER INTERACTIONS==========================

startButton.addEventListener("click", startGame);

selectA.addEventListener("click", function () {
  console.log("option A clicked");
  scoreQuestion("A");
});
selectB.addEventListener("click", function () {
  console.log("option B clicked");
  scoreQuestion("B");
});
selectC.addEventListener("click", function () {
  console.log("option C clicked");
  scoreQuestion("C");
});
selectD.addEventListener("click", function () {
  console.log("option D clicked");
  scoreQuestion("D");
});

//NOTES FROM BCS only show the questiona nd options onces start but is clicked
//dynamically create the options using for loop
//while creating the options add a class of "options" to all and event add a data attr and add a value
//add a event liste to options class
