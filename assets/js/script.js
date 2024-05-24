//step 1. create main functions (blank)needed to run the game( for each action )
//step 2. assign each function to its coresponding html 
//step 3. activate functions by applying fules to each accordignally   

//point out to where questions are stored  


//function createUsername () {}

//returning  all the buttons from html onto js
//making buttonsresponsive to click 
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); 

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "hint_btn") {
                alert("you clicked hint"); //checking if function is working
            } else {
                let userAnswer = this.getAttribute("data-type");
                alert(`you clicked ${userAnswer}`)
                //startQuiz(displayQuestion);
            }
        })
    } 
}) 


//<script scr = "trivia_data"></script>;
// //when page (DOM) finished loading - display questions
// function startQuiz() {}

// function generateRandomQuestion () {
//     let triviaData = getAttribute("trivia_data");
//         for (let allQuestions of triviaData) {
//             let onlyQuestions = allQuestions[0];
//         }
//             display.(onlyQuestion).random

//             if(this.questions[0]) === "question";
//             let (thisIsQuestion)= this.question
//     }



        

//once answer is given,  
function displayUserAnswer () {
}
//once button "hint" is pressed the hint message is displayed.
function displayHint () {
}

function checkAnswer() {
}

function displayResults () {
}

function  incrementCorrectAnswer () {
}

function  incrementCorrectAnswer () {
}