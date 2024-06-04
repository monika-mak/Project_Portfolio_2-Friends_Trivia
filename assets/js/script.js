//ensuring trivia starts after page fully loads 
document.addEventListener("DOMContentLoaded", function () {
    //get all global variables in one place 
    const question = document.getElementById("displayed-question");
    const answers = Array.from(document.getElementsByClassName("answer-btn"));
    const questionCounterDisplay = document.getElementById("questionCounter");
    const scoreDisplay = document.getElementById("score");
    const hint = document.getElementById("hint");
    const home = document.getElementById("home");
    const trackingElements = document.getElementsByClassName("tracking-elements");
    let reset = document.getElementById("reset");
    
    let availableQuestions = []; //copy of question array so original list is not affected;
    let currentQuestion = {};
    let acceptingAnswers = false;
    let questionCounter = 0;
    let score = 0;

    const awardedPoints = 1;
    const maxQuestions = 3;

    reset.addEventListener("click", startTrivia);

    function startTrivia() {
        availableQuestions = [...questions];
        questionCounter = 0;
        score = 0; //reset score to 0;   
        showNewQuestion(); //show the first question
        home.style.display = "none";
    };

    function endPage() {
        question.innerText = `"Well Done ! You have reached the end of the Trivia!" <br> Your score is ${score} ! <br> Now, It's time to PIVOT ! `;
        answers.forEach(answer => answer.style.display = "none");
        trackingElements.style.display = "none";
        hint.style.display = "none";
        home.style.display ="block";
        home.addEventListener("click", homeLocation);
        reset.innerText = "Play again";
    }
    function homeLocation() {
        window.location.assign('index.html');
        };
  
    function showNewQuestion() {//send the user to an end page once they had answered last question
        // if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        //     return window.location.assign('/end.html');
        // }
        if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
            endPage();
            return;
        };

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
            answer.disabled = false;//re-enabling buttons for each question 
            answer.classList.remove("correct", "incorrect");//remove class once choice is made 
            clearHint(); 
        });

        //making sure used questions do not repeat 
        availableQuestions.splice(currentQuestionIndex, 1);
        acceptingAnswers = true;
    };

    //asigning user click(choice) to coresponded answer
    answers.forEach(answer => {
        answer.addEventListener("click", event => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;  //creating a slight delay with chosing answers 
            const selectedChoice = event.target; //targeting where user clicked 
            const selectedAnswer = selectedChoice.dataset["number"];


            //assign class name to correct and incorrect answers so that they can be destinguished.
            const classToApply = selectedAnswer == currentQuestion.correctChoice ? "correct" : "incorrect" ; 
            if (classToApply === "correct") {
                incrementScore(awardedPoints);
            } else { //assign correct to the correct answer so both user answer and correct answer are displayed )
                const correctAnswerButton = answers.find(button => button.dataset ["number"] == currentQuestion.correctChoice);
                if (correctAnswerButton) {
                    correctAnswerButton.classList.add("correct");
                }
            }    
                
                answers.forEach(button => button.disabled = true); // Disable all buttons
            selectedChoice.classList.add(classToApply); // applying the clss onto the choices
            // displaying the results for 1 sec (1300 milisec.) before removing it and getting next question
            setTimeout(() => {              
            // selectedChoice.classList.remove(classToApply);
            showNewQuestion();
            }, 1500); 
        });
    });
    //hint to display once user clicks on it 
    hint.addEventListener("click", displayHint);
    function displayHint() {
        hint.innerText = currentQuestion["hint"];
        //sets timer to only display hint for 1.5 econds     
        setTimeout( () => {
            hint.innerText = "Hint"
        }, 1500);
    };

    function clearHint() {
        hint.innerText = "Hint"; // Resets the hint text
    };
    //increase score by 1 each time class"correct"is added
    incrementScore = num => {
        score += num
        scoreDisplay.innerText = score;
    };

    startTrivia();

});


