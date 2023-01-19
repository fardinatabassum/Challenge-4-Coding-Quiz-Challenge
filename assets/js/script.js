var start_button = document.querySelector(".start_button");
var info_card = document.querySelector(".info_card");
 
//start button clicked
start_button.addEventListener("click", function() {
    info_card
})

}

var quiz = document.getElementById(quiz)
var questions = document.getElementById(question_text)
var options = document.getElementById(options)
var option1 = document.querySelector(".option-1")
var option2 = document.querySelector(".option-2")
var option3 = document.querySelector(".option-3")
var option4 = document.querySelector(".option-4")
var result = document.querySelector(".result")

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