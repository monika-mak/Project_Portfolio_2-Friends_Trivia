//point out to where questions are stored  
//returning  all the buttons from html onto js
//making buttons responsive to click 

// Select necessary HTML elements for displaying the question and answers
let questionElement = document.getElementById("question");
//need to work with the full div not buttons individually
let answerButtons = document.querySelectorAll(".answer-buttons button")
let nextButton = document.querySelector("[data-type = 'next-btn']");

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "hint-btn") {
                displayHint(); //checking if function is working
            } else if (this.getAttribute("data-type") === "next-btn") {
                nextQuestion();
            } else {
                let userAnswer = this.getAttribute("data-type");
                checkAnswer(userAnswer);
            }
        });
    }
    //start the game when page loads
    startTrivia();
});

//when page (DOM) finished loading - display first question
//starting with first question(index 0) making sure it is always 0 at the start 

let currentQuestionIndex = 0;
let score = 0;

//function to start the trivia game from 0 
function startTrivia() {
    currentQuestionIndex = 0;
    score = 0; //reset score to 0;
    nextButton.innerHTML = "Next"; // sets the text of "next" button
    showQuestion(); //show the first question
}

//function to display question 
//questionElement = question  to be displayed 
function showQuestion() {
//clear any previous answers (this is a node list needs to run through all questions) 
answerButtons.forEach(button => button.innerHTML = '');
// get current question based on current question index
    let currentQuestion = questions[currentQuestionIndex];
// Display the current question number and text
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//loop through the answers and set the corret one 
    //set the answer texts 
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = currentQuestion["choice" + (i + 1)];
        answerButtons[i].setAttribute("data-type", 'answer' + (i + 1));
    }
}

// code inspired from https://www.youtube.com/watch?v=PBcqGxrr9g8&t=356s
function checkAnswer(userAnswer) {
    let currentQuestion = questions[currentQuestionIndex];
    let correctAnswer = currentQuestion.answer;
}

// answerButtons.forEach(button =>  {
//     if (button.getAttribute("data-type") === correctAnswer) {
//         button.classList.add("correct");
//         score++;
//     } else if (button.getAttribute("data-type") === userAnswer) {
//         button.classList.add("incorrect");
//     }
// });
//     nextButton.style.display ="block";
// }

//once button "hint" is pressed the hint message is displayed.
// function displayHint () { 
//     if (userAnswer === currentQuestion.hint) {
//         hint.innerText()
//     }
// }


// //once answer is given,  
// function showNextQuestion(){ 
// }

// // function displayResults () {
// // }





// //making sure questions are within bounds
// function displayQuestion(index) {
//     if (index < 0 || index >= questions.length) {
//         console.error("Invalid question index");
//         return;
//     }
// }



// // function generateRandomQuestion () {
// //     let triviaData = getAttribute("trivia_data");
// //         for (let allQuestions of triviaData) {
// //             let presentQuestions = allQuestions;
// //         }
// //             display.(onlyQuestion).random

// //             if(this.questions[0]) === "question";
// //             let (thisIsQuestion)= this.question
// //     }


//let questionounter = 0
//const MAX_QUESTION = 10;  - max number of questions

//pull  the data from the trivia_data 
//function createUsername () {}