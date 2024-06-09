//ensuring trivia starts after page fully loads 
document.addEventListener("DOMContentLoaded", function () {
    //get all global variables in one place 
    const welcomePage = document.getElementById("welcome-page");
    const userNameInput = document.getElementById("user-name"); 
    const startButton = document.getElementById("start-button");
    const triviaContainer = document.getElementById("container");
    const question = document.getElementById("displayed-question");
    const answers = Array.from(document.getElementsByClassName("answer-btn"));
    const questionCounterDisplay = document.getElementById("questionCounter");
    const hintButton = document.getElementById("hint");
    const hintText = document.getElementById("hint-text")
    const homeButton = document.getElementById("home");
    const playButton = document.getElementById("play");
    const trackingElements = Array.from(document.getElementsByClassName("tracking-elements"));
    const awardedPoints = 1;
    const maxQuestions = 2;
    const simulateErrorButton = document.getElementById("simulate-error");

    let scoreDisplay = document.getElementById("score");
    let resetButton = document.getElementById("reset");
    let availableQuestions = []; //copy of question array so original list is not affected;
    let currentQuestion = {};
    let acceptingAnswers = false;
    let questionCounter = 0;
    let score = 0;
    let username = '';

    //display welcome page
    function welcomePageDisplay() {
        triviaContainer.style.display = "none"; //hide trivia container when welcome page is displayed    
        startButton.addEventListener("click", function () {
            username = userNameInput.value.trim();
            if(!username) {
                alert("Please enter your name to start");
                return;
            }
            setUpAnswers()
            startTrivia(); 
        });
    }
    // Redirect to error page
    function redirectToErrorPage() {
        window.location.assign('404.html');
    }

    //this is were an error is handled
    function handleError(error) {
        console.error("Attention, an error occured", error);
        redirectToErrorPage();
    }
    //REMOVE THIS CODE ONCE TESTING IS DONE 
    simulateErrorButton.addEventListener('click', function() {
        handleError(new Error('Simulated error'));
    });


    //start the trivia game
    function startTrivia() {
        availableQuestions = [...questions];
        questionCounter = 0;
        score = 0; //reset score to 0;   
        scoreDisplay.innerText = score;
        welcomePage.style.display = "none";
        triviaContainer.style.display = "block";
        answers.forEach(answer => answer.style.display = "block");
        trackingElements.forEach(element => element.style.display = "flex");
        hintButton.style.display = "block";
        resetButton.style.display = "block";
        homeButton.style.display = "none";
        playButton.style.display = "none";
        showNewQuestion(); //show the first question
    }

    /**
     * 
     * 
     */
    function endQuiz() {
        // making sure that username and score are defined
        if (typeof username !== 'undefined' && username !== null && typeof score !== 'undefined') {
            question.innerHTML = `Great job ${username.toUpperCase()}!<br> You've reached the end of the Trivia!<br>Your score is ${score}!<br>What would you like to do now?`;
            answers.forEach(answer => answer.style.display = "none");
            hintButton.style.display = "none";
            resetButton.style.display = "none";
            homeButton.style.display = "block";
            playButton.style.display = "block";
            trackingElements.forEach(element => element.style.display = "none");
        } else {
            alert("Opps, something went wrong, please try again");
        }
    }
 
    //show a new question
    function showNewQuestion() {
        try {
            //send the user to an end page once they had answered last question
            if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
                endQuiz();
                return;
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
                answer.disabled = false;//re-enabling buttons for each question 
                answer.classList.remove("correct", "incorrect");//remove class once choice is made 
                clearHint(); 
            });

            //make sure used questions do not repeat 
            availableQuestions.splice(currentQuestionIndex, 1);
            acceptingAnswers = true;    
        }  catch (error) {
            handleError(error);
        }
    }

   function setUpAnswers () {
     //asign user click(choice) to coresponded answer
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
   }

    function displayHint() {
        hintText.innerText = currentQuestion["hint"];
        //sets timer to only display hint for 1.5 econds     
        setTimeout( () => {
            hintText.innerText = "Hint";
        }, 1500);
    }
    // Resets the hint text
    function clearHint() {
        hintText.innerText = "Hint"; 
    }

    //increase score by 1 each time class"correct"is added
    const incrementScore = num => {
        score += num
        scoreDisplay.innerText = score;
    }

    //hint to display once user clicks on it 
    hintButton.addEventListener("click", displayHint);
    resetButton.addEventListener("click", startTrivia);
    homeButton.addEventListener("click", startTrivia);
    playButton.addEventListener("click", startTrivia);

   //calling the welcome page ,hide trivia game 
    welcomePageDisplay();
});