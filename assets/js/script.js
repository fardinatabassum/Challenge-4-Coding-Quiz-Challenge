var start_button = document.querySelector(".buttons .start_button");
var info_card = document.querySelector(".info_card");
var high_score = document.querySelector(".buttons .high_score")
var right_wrong = document.querySelector(".right_wrong")

var quiz = document.getElementById(quiz)
var questions = document.getElementById(question_text)
var options = document.getElementById(options)
var option1 = document.querySelector(".option-1")
var option2 = document.querySelector(".option-2")
var option3 = document.querySelector(".option-3")
var option4 = document.querySelector(".option-4")
var result = document.querySelector(".result")




var index= 0
var quiz = [
    {
        question: "Commonly used data types DO Not Include:",
        one: "strings",
        two: "booleans",
        three: "alerts",  
        four: "numbers",
        Answer: "3"
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        one: "quotes",
        two: "curly brackets",
        three: "parenthesis",  
        four: "square brackers",
        Answer: "2"
    },
    
    {
        question: "Arrays in Javascript can be used to store _______.",
        one: "numbers and strings",
        two: "other arrays",
        three: "booleans",  
        four: "all if the above",
        Answer: "4"
    },
    {
        question:"String values muust be enclosed within ______ when being assigned to variables.",
        one: "commas",
        two: "curly brackets",
        three: "quotes",  
        four: "parenthesis",
        Answer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        one: "JavaScript",
        two: "terminal/bash",
        three: "for loops",  
        four: "console.log",
        Answer: "4"
    }
]


document.querySelector(".high_score").addEventListener("click", function (){
    secondsLeft -= 5
 })

start_button.classList.add("question")
start();
showQuestionnOne();

function showQuestionnOne() {
    questions.innertext = questions[questionNumber].question
    option1.innertext = questions[questionNumber].one
    option2.innertext = questions[questionNumber].two
    option3.innertext = questions[questionNumber].three
    option4.innertext = questions[questionNumber].four
}
showQuestion()


var result = ""
function checkAnswer(correctAnswer)

result = questions[questionNumber].Answer
if (result !== correctAnswer) {
    secondsLeft -= 5
    right_wrong.textContent= incorrect
    right_wrong.getElementsByClassName.color = "red"
} else {
    right_wrong.textContent = "correct";
    right_wrong.getElementsByClassName.color = "green"
}

//timer
var timeEl = document.querySelector(".timer")
var counter = document.getElementById("timer_sec")
var high_score = document.querySelector(".buttons .high_score")
var secondsLeft = 60
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "seconds left";

        if (secondsLeft ===0) {
            clearInterval(timerInterval);
            showResult();
        }
    },1000);
}

//After timer over
function showResult() {
    timeEl.textContent = "";
    var resultEl = document.createElement("result");
    resultEl.setAttribute("div", "result");
    info_card.appendChild(resultEl)

}
setTime();




//high scores

var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var scoreInput = document.querySelector("#score");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user 
  var user = {
    initials: initialsInput.value.trim(),
    score: scoreInput.value.trim()
  };

  // stores to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  
});