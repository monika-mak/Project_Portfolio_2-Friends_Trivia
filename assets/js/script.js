//get all global variables in one place 
const question = document.getElementById("displayed-question");
const answers = Array.from(document.getElementsByClassName("answer-btn"));
const questionCounterDisplay = document.getElementById("questionCounter");
const scoreDisplay = document.getElementById("score");


let availableQuestions = []; //make copy of question array so that original list will not be affected
let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let score = 0;


// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

//     Array.from(buttons).forEach(button => {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "hint-btn") {
//                 alert("hint button!"); //displayHint(); checking if function is working
//             } else if (this.getAttribute("data-type") === "next-btn") {
//                 alert("nextbutton");//nextQuestion();
//             } else {
//                 let userAnswer = this.getAttribute(this);
//                 alert("you pressed :" + userAnswer ); //checkAnswer(userAnswer);
//             }
//         });
//     });
//     //start the game when page loads
//     startTrivia();
// });
 
//necessary constants
const awardedPoints = 1;
const maxQuestions = 10;
//when page (DOM) finished loading - display first question
//starting with first question(index 0) making sure it is always 0 at the start  

function startTrivia() {

    questionCounter = 0;
    score = 0; //reset score to 0;   
    availableQuestions = [...questions];
    showQuestion();//show the first question
};


//once number of questions is finished go to the end page
//inspired by youtube tutorial:
// https://www.youtube.com/watch?v=zZdQGs62cR8&list=
//PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3

function showQuestion() {
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        return window.location.assign('/end.html');  
    }

    questionCounter++;
    questionCounterDisplay.innerText = `${questionCounter} / ${maxQuestions}`;
    const currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[currentQuestionIndex];
    question.innerText = currentQuestion.question;
    //connect each question with the answer set via data-number 
    answers.forEach(answer => {
    const number = answer.dataset["number"]; //answer buttons that needs to be filled with actual answers
    answer.innerText = currentQuestion["choice" + number]; //"choice" set from questions arrays 
    })

    //making sure used questions do not repeat 
    availableQuestions.splice(currentQuestionIndex , 1);
    acceptingAnswers = true;
};

answers.forEach(answer => {
    answer.addEventListener("click" , event =>{
        if(!acceptingAnswers) return;

        acceptingAnswers
    })
})

startTrivia()




// function showQuestion() { 
//     answerButtons.forEach(button => button.innerHTML = '');
//         let currentQuestion = questions[currentQuestionIndex]; 
//         let questionNo = currentQuestionIndex + 1;
//         questionText.innerHTML = questionNo + ". " + currentQuestion.question;


// //loop through the answers and set the corret one 
// //set the answer texts 


//     for (let i = 0; i < answerButtons.length; i++) {
//         answerButtons[i].innerText = currentQuestion["choice" + (i + 1)];
//         answerButtons[i].setAttribute("data-number", 'answer' + (i + 1));
//     }
// };
// // code inspired from https://www.youtube.com/watch?v=PBcqGxrr9g8&t=356s
// function checkAnswer() {
//     let currentQuestion = questions[currentQuestionIndex];
//     let correctAnswer = currentQuestion.answer;
// };

// startTrivia();

// //clear any previous answers (this is a node list needs to run through all questions)

//    ************************************************************






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

// startTrivia();

//nextButton.style.display ="block";

// //once button "hint" is pressed the hint message is displayed.
// function displayHint () { 
//     if (userAnswer === currentQuestion.hint) {
//         hint.innerText()
//     }
// }

// //making sure questions are within bounds
// function displayQuestion(index) {
//     if (index < 0 || index >= questions.length) {
//         console.error("Invalid question index");
//         return;
//     }
// }



//************************** this is copy ********************
