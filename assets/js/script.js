//step 1. create main functions (blank)needed to run the game( for each action )
//step 2. assign each function to its coresponding html 
//step 3. activate functions by applying fules to each accordignally   

//point out to where questions are stored  


//pull  the data from the trivia_data 
//function createUsername () {}

//returning  all the buttons from html onto js
//making buttons responsive to click 
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "hint-btn") {
                alert("you clicked hint"); //checking if function is working
            } else if (this.getAttribute("data-type") === "next-btn") {
                alert("you clicked next");
            } else {
                let userAnswer = this.getAttribute("data-type");
                alert(`you clicked ${userAnswer}`);
            }
        });
    }
});

let questionElement = document.getElementById("question");
let answerButtons = document.getElementsByClassName("answer-buttons");



//when page (DOM) finished loading - display first question

//starting with first question(index 0) making sure it is always 0 at the start 

let currentQuestionIndex = 0;
let score = 0; 

//function to start the quiz from 0 
function startTrivia() {
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//function to display question 
//questionElement = question h1 to be displayed 
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//display answers 
    currentQuestion.answers.forEach(answer => {
        button.innerHTML = answer.choice;
        button.classList.add("btn")
        answerButtons.appendChild(button);
    }); 
}

startTrivia();
// //making sure questions are within bounds
// function displayQuestion(index) {
//     if (index < 0 || index >= questions.length) {
//         console.error("Invalid question index");
//         return;
//     }


// }



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