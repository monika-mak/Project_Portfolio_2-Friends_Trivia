
// Select necessary HTML elements for displaying the question and answers
let questionText = document.getElementById("displayed_question");
let answerButtons = document.querySelectorAll(".answer-buttons .btn");
let nextButton = document.getElementsByClassName("next-btn")[0];
let scoreDisplay = document.getElementsByClassName("answer_score")[0];
let availableQuestions = [];
let currentQuestion = {};
let questionCounter = 0;
let score = 0;


const Max_Questions = 10;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    Array.from(buttons).forEach(button => {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "hint-btn") {
                alert("hint button!"); //displayHint(); checking if function is working
            } else if (this.getAttribute("data-type") === "next-btn") {
                alert("nextbutton");//nextQuestion();
            } else {
                let userAnswer = this.getAttribute("data-number");
                alert("you pressed :" + userAnswer ); //checkAnswer(userAnswer);
            }
        });
    });
    //start the game when page loads
    startTrivia();
});

//when page (DOM) finished loading - display first question
//starting with first question(index 0) making sure it is always 0 at the start 

let currentQuestionIndex = 0;

//function to start the trivia game ,available questions, inspired by youtube tutorial
// https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3
function startTrivia() {
    questionCounter = 0;
    availableQuestions =[...questions];
    currentQuestionIndex = 0;
    score = 0; //reset score to 0;
    showQuestion();//show the first question
}

// //function to display question 
// //questionElement = question  to be displayed 
function showQuestion() {
//clear any previous answers (this is a node list needs to run through all questions) 
    answerButtons.forEach(button => button.innerHTML = '');
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionText.innerHTML = questionNo + ". " + currentQuestion.question;
//loop through the answers and set the corret one 
//set the answer texts 


    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = currentQuestion["choice" + (i + 1)];
        answerButtons[i].setAttribute("data-number", 'answer' + (i + 1));
    }
}
// code inspired from https://www.youtube.com/watch?v=PBcqGxrr9g8&t=356s
function checkAnswer(userAnswer) {
    let currentQuestion = questions[currentQuestionIndex];
    let correctAnswer = currentQuestion.answer;
}





//    *****************************************************************************

// // Select necessary HTML elements for displaying the question and answers
// let questionText = document.getElementById("displayed_question");
// let answerButtons = document.querySelectorAll(".answer-buttons .btn");
// let nextButton = document.getElementsByClassName("next-btn")[0];
// let scoreDisplay = document.getElementsByClassName("answer_score")[0];
// let availableQuestions = [];
// let currentQuestion = {};
// let questionCounter = 0;
// let score = 0;


// const Max_Questions = 10;

// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

//     Array.from(buttons).forEach(button => {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "hint-btn") {
//                 alert("hint button!"); //displayHint(); checking if function is working
//             } else if (this.getAttribute("data-type") === "next-btn") {
//                 alert("nextbutton");//nextQuestion();
//             } else {
//                 let userAnswer = this.getAttribute("data-number");
//                 alert("you pressed :" + userAnswer ); //checkAnswer(userAnswer);
//             }
//         });
//     });
//     //start the game when page loads
//     startTrivia();
// });

// //when page (DOM) finished loading - display first question
// //starting with first question(index 0) making sure it is always 0 at the start 

// //function to start the trivia game ,available questions, inspired by youtube tutorial
// // https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3
// function startTrivia() {
//     questionCounter = 0;
//     availableQuestions =[...questions];
//     score = 0; //reset score to 0;
//     showNewQuestion();//show the first question
// };
// // //function to display question 
// // //questionElement = question  to be displayed 
// function showNewQuestion() { 
//     questionCounter = 0++;
//     const currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
//     currentQuestion = availableQuestions[currentQuestionIndex];
//     question.innerText = currentQuestion.question;
    
//     choices.forEach(choice["number"];
//     choice.innerText = currentQuestion['choice + number'];
// });
// };  


//     answerButtons.forEach(button => button.innerHTML = '');
//         let currentQuestion = availableQuestions[currentQuestionIndex];
//         let questionNo = currentQuestionIndex + 1;
//         questionText.innerHTML = questionNo + ". " + currentQuestion.question;
// //loop through the answers and set the corret one 
// //set the answer texts 


//     for (let i = 0; i < answerButtons.length; i++) {
//         answerButtons[i].innerText = currentQuestion["choice" + (i + 1)];
//         answerButtons[i].setAttribute("data-number", 'answer' + (i + 1));
//     }
// }
// // code inspired from https://www.youtube.com/watch?v=PBcqGxrr9g8&t=356s
// function checkAnswer(userAnswer) {
//     let currentQuestion = questions[currentQuestionIndex];
//     let correctAnswer = currentQuestion.answer;

//     answerButtons.forEach(button=>  {
//         if (button.getAttribute("number") === correctAnswer) {
//             button.classList.add("correct");
//             if (userAnswer === correctAnswer) {
//                 score++;
//             }
//     } else if (button.getAttribute("data-number") == userAnswer) {
//         button.classList.add("incorrect");
//     };

//         answerButtons[i].onclick = function() {
//             checkAnswer(this.getAttribute("data-number"));
//         };
//     }
// )};
// };




// // code inspired from https://www.youtube.com/watch?v=PBcqGxrr9g8&t=356s
// function checkAnswer(userAnswer) {
//     let currentQuestion = questions[currentQuestionIndex];
//     let correctAnswer = currentQuestion.answer;
// }
    
//     answerButtons.forEach(button =>  {
//         if (button.getAttribute("data-number") === correctAnswer) {
//             button.classList.add("correct");
//             if (userAnswer === correctAnswer) {
//                 score++;
//             }
//     } else if (button.getAttribute("data-number") === userAnswer) {
//         button.classList.add("incorrect");
//     }
// });
//     //nextButton.style.display ="block";



//  function nextQuestion () {

//     }

// startTrivia();
 

// //once button "hint" is pressed the hint message is displayed.
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



// answerButtons.forEach(button=>  {
//         if (button.getAttribute("number") === correctAnswer) {
//             button.classList.add("correct");
//             if (userAnswer === correctAnswer) {
//                 score++;
//             }
//     } else if (button.getAttribute("data-number") === userAnswer) {
//         button.classList.add("incorrect");
//     };

//         answerButtons[i].onclick = function() {
//             checkAnswer(this.getAttribute("data-number"));
//         };
//     }
// )};

// // code inspired from https://www.youtube.com/watch?v=PBcqGxrr9g8&t=356s
// function checkAnswer(userAnswer) {
//     let currentQuestion = questions[currentQuestionIndex];
//     let correctAnswer = currentQuestion.answer;
// }
    
//     answerButtons.forEach(button =>  {
//         if (button.getAttribute("data-number") === correctAnswer) {
//             button.classList.add("correct");
//             if (userAnswer === correctAnswer) {
//                 score++;
//             }
//     } else if (button.getAttribute("data-number") === userAnswer) {
//         button.classList.add("incorrect");
//     }
// });
//     //nextButton.style.display ="block";



//  function nextQuestion () {

//     }

// startTrivia();
 

// //once button "hint" is pressed the hint message is displayed.
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








//************************** this is copy *********************************************************************
