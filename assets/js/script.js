var score = 0;
var questionsIndex = 0;
var startTime = 60;
var pauseInterval = 0;
var timeSubtraction = 5;
const timeLeft = document.getElementById("timeLeft");
const timer = document.getElementById("timer");
const questionsContainer = document.getElementById("question-container");
const wrapper = document.getElementById("info-card");
const createUl = document.createElement("ul");

// Quiz content
const quiz = [
  {
    question: "Commonly used data types DO Not Include:",
    options: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
    answer: "C. Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with _______.",
    options: [
      "A. Quotes",
      "B. Curly Brackets",
      "C. Parenthesis",
      "D. Square Brackets",
    ],
    answer: "B. Curly Brackets",
  },

  {
    question: "Arrays in Javascript can be used to store _______.",
    options: [
      "A. Numbers and Strings",
      "B. Other Arrays",
      "C. Booleans",
      "D. All of the above",
    ],
    answer: "D. All of the above",
  },
  {
    question:
      "String values muust be enclosed within ______ when being assigned to variables.",
      options: [
      "A. Commas",
      "B. Curly Brackets",
      "C. Quotes",
      "D. Parenthesis",
    ],
    answer: "C. Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
      "A. JavaScript",
      "B. Terminal/Bash",
      "C. For loops",
      "D. console.log",
    ],
    answer: "D. console.log",
  },
];

// Event listener to start timer, and display questions
timer.addEventListener("click", function () {
  if (pauseInterval === 0) {
    pauseInterval = setInterval(function () {
      startTime--;
      timeLeft.textContent = "Time: " + startTime;
      if (startTime <= 0) {
        clearInterval(pauseInterval);
        finished();
        timeLeft.textContent = "Time's up!";
      }
    }, 1000);
  }
  display(questionsIndex);
});

// Displays questions and answers
function display(questionsIndex) {
  questionsContainer.innerHTML = "";
  createUl.innerHTML = "";
  for (var i = 0; i < quiz.length; i++) {
    let userQuestions = quiz[questionsIndex].question;
    var userAnswers = quiz[questionsIndex].options;
    questionsContainer.textContent = userQuestions;
  }
  userAnswers.forEach(function (nextQuestion) {
    let listItem = document.createElement("li");
    listItem.textContent = nextQuestion;
    questionsContainer.appendChild(createUl);
    createUl.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

// Compare choices with answers
function compare(event) {
  let element = event.target;
  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.id = "createDiv";
    if (element.textContent == quiz[questionsIndex].answer) {
      score++;
      createDiv.textContent = "Correct!   " + quiz[questionsIndex].answer;
    } else {
      startTime = startTime - timeSubtraction;
      createDiv.textContent =
        "Wrong! The correct answer is:  " + quiz[questionsIndex].answer;
    }
  }
  // Question Index determines which question user is on
  questionsIndex++;
  if (questionsIndex >= quiz.length) {
    finished();
  } else {
    display(questionsIndex);
  }
  questionsContainer.appendChild(createDiv);
}

// Finished will append second to last page (initials and save score)
function finished() {
  questionsContainer.innerHTML = "";
  timeLeft.innerHTML = "";
  const createH1 = document.createElement("h1");
  createH1.id = "createH1";
  createH1.textContent = "All Done!";
  questionsContainer.appendChild(createH1);
  const createP = document.createElement("p");
  createP.id = "createP";
  questionsContainer.appendChild(createP);
  // Calculates time remaining and questions right; replaces with score
  if (startTime >= 0) {
    var timeRemaining = startTime;
    const createP2 = document.createElement("p");
    clearInterval(pauseInterval);
    createP.textContent = "Your final score is: " + timeRemaining * 2;
    questionsContainer.appendChild(createP2);
  }
  const infoPrompt = document.createElement("label");
  infoPrompt.id = "createLabel";
  infoPrompt.textContent = "Enter your initials: ";
  questionsContainer.appendChild(infoPrompt);
  // Input initials
  const userInitials = document.createElement("input");
  userInitials.type = "text";
  userInitials.id = "initials";
  userInitials.textContent = "";
  questionsContainer.appendChild(userInitials);
  // Submit score and initials
  const saveInfo = document.createElement("button");
  saveInfo.type = "submit";
  saveInfo.id = "Submit";
  saveInfo.textContent = "Submit";
  questionsContainer.appendChild(saveInfo);
  // Stores initials/score in local storage
  saveInfo.addEventListener("click", function () {
    var initials = userInitials.value;
    if (initials === "") {
      console.log("No value entered!");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining * 2,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      window.location.replace("highscore.html");
    }
  });
}
