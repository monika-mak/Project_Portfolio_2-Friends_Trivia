//step 1. create main functions (blank)needed to run the game( for each action )
//step 2. assign each function to its coresponding html 
//step 3. activate functions by applying fules to each accordignally   

//point out to where questions are stored  

let questionElement = document.getElementById("question");
let answerButtons = document.getElementsByClassName("answer-buttons");
let nextButton = document.getElementById("next")
//function createUsername () {}

//returning  all the buttons from html onto js
//making buttons responsive to click 
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); 

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "hint_btn") {
                alert("you clicked hint"); //checking if function is working
            } else {
                let userAnswer = this.getAttribute("data-type");
                alert(`you clicked ${userAnswer}`)
            }
        })
    } 
}) 

//when page (DOM) finished loading - display first question

//starting with first question(index 0)

// let currentQuestionIndex =0;
// displayQuestion(currentQuestionIndex); 

// //function to start the quiz 
// function startQuiz() {
//     currentQuestionIndex = 0;
//     displayQuestion(currentQuestionIndex);
// }

// //making sure questions are within bounds
// function displayQuestion(index) {
//     if (index < 0 || index >= questions.length) {
//         console.error("Invalid question index");
//         return;
//     }

  
// }
 
// //pull  the data from the trivia_data 
//     let questionElement = document.getElementById("displayed_question");
//     let answerButtons = document.getElementsByClassName("btn");

// //question text setting
// questionElement.textContent = questions[index].question;

// //set the answer texts 
// for (let i = 0; i < answerButtons.length; i++) {
//     answerButtons[i].textContext = question[index].answers[i];
//     answerButtons[i].setAttribute("data-type, i");
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



        

// //once answer is given,  
// function displayUserAnswer () {
// }
// //once button "hint" is pressed the hint message is displayed.
// function displayHint () {
// }

// function checkAnswer() {
// }

// function displayResults () {
// }

// function  incrementCorrectAnswer () {
// }

// function  incrementCorrectAnswer () {
// }