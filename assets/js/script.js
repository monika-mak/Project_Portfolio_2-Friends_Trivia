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
let hint = document.getElementById("hint");
let next = document.getElementById("next");

let questions =[
    { 
    question: "What song is famously associated with Ross and Rachel's relationship?",
    choice1: "With or Without You",
    choice2: "My Heart Will Go On",
    choice3: "I Will Always Love You",
    choice4: "Endless Love",
    correctChoice: 1,
    hint: "It's a U2 song that Ross plays repeatedly after their breakup."
},
{ 
    question: "Which friend was famously on a 'break' with Rachel?",
    choice1: "Chandler",
    choice2: "Joey",
    choice3: "Ross",
    choice4: "Phoebe",
    correctChoice: 3,
    hint: "'We were on a break!'"
},
{ 
    question: "What is the name of Ross and Carol's son?",
    choice1: "Ben",
    choice2: "Jack",
    choice3: "Joey Jr.",
    choice4: "Luke",
    correctChoice: 1,
    hint: "He was played by twins, Cole and Dylan Sprouse."
},
{ 
    question: "What does Joey never share?",
    choice1: "His money",
    choice2: "His food",
    choice3: "His clothes",
    choice4: "His car",
    correctChoice: 2,
    hint: "Joey doesn't share food!"
}
];

//necessary constants
const awardedPoints = 1;
const maxQuestions = 4;
//when page (DOM) finished loading - display first question
//starting with first question(index 0) making sure it is always 0 at the start  

function startTrivia() {
    availableQuestions = [...questions];
    questionCounter = 0;
    score = 0; //reset score to 0;   
    showNewQuestion(); //show the first question
};

//once number of questions is finished go to the end page
//inspired by youtube tutorial:
// https://www.youtube.com/watch?v=zZdQGs62cR8&list=
//PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3

function showNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        return window.location.assign('/end.html');
    }
    questionCounter++;//takes random int available from the available question 
    questionCounterDisplay.innerText = `${questionCounter} / ${maxQuestions}`; //display question counter 
    const currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[currentQuestionIndex];
    question.innerText = currentQuestion.question;

    //connect each question with the answer set via data-number 
     //number property is given to match the number value of each question
    answers.forEach(answer => {
        const number = answer.dataset["number"];
        answer.innerText = currentQuestion["choice" + number]; //corresponded answer is matched with question 
    })

    
    availableQuestions.splice(currentQuestionIndex, 1);//making sure used questions do not repeat 
    acceptingAnswers = true;
    };

//asigning user click(choice) to coresponded answer
answers.forEach(answer => {
    answer.addEventListener("click", event => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;  //creating a slight delay with chosing amnswers 
        const selectedChoice = event.target; //targeting where user clicked 
        const selectedAnswer = selectedChoice.dataset["number"];


        //assign class name to correct and incorrect answers so that they can be destinguished.
        // const classToApply = selectedAnswer == currentQuestion.correctChoice ? "correct" : "incorrect" ; 
        let classToApply = "incorrect";
            if (selectedAnswer == currentQuestion.correctChoice) {
                classToApply = "correct";
                score++;
            };
        
        selectedChoice.classList.add(classToApply); // applying the clss onto the choices
        // displaying the results for 2 sec (1000 milisec.) before removing it and getting next question
        setTimeout(() => {              
        selectedChoice.classList.remove(classToApply);
        showNewQuestion();
            }, 1000); 
    });
});


displayScore :
startTrivia();




// document.addEventListener("DOMContentLoaded", function () {
//     let 

//     Array.from(buttons).forEach(button => {
//         button.addEventListener("click", function () {
//             if (this.getAttribute("data-type") === "hint-btn") {
//                 alert("hint button!"); //displayHint(); checking if function is working
//             } else(this.getAttribute("data-type") === "next-btn") {
//                 alert("nextbutton"); //nextQuestion();
//             })
//     });
//     //start the game when page loads
//     startTrivia();
// });


// //once button "hint" is pressed the hint message is displayed.
// function displayHint () { 
//     if (userAnswer === currentQuestion.hint) {
//         hint.innerText()
//     }
// }


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



// //making sure questions are within bounds
// function displayQuestion(index) {
//     if (index < 0 || index >= questions.length) {
//         console.error("Invalid question index");
//         return;
//     }
// }



//************************** this is copy ********************