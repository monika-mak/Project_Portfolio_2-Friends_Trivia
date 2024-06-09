//Ensuring quiz starts after page fully loads 
document.addEventListener("DOMContentLoaded", function () {
    //Get all global variables in one place 
    const welcomePage = document.getElementById("welcome-page");
    const userNameInput = document.getElementById("user-name"); 
    const startButton = document.getElementById("start-button");
    const quizContainer = document.getElementById("container");
    const question = document.getElementById("displayed-question");
    const answers = Array.from(document.getElementsByClassName("answer-btn"));
    const questionCounterDisplay = document.getElementById("questionCounter");
    const hintButton = document.getElementById("hint");
    const hintText = document.getElementById("hint-text")
    const homeButton = document.getElementById("home");
    const playButton = document.getElementById("play");
    const trackingElements = Array.from(document.getElementsByClassName("tracking-elements"));
    const awardedPoints = 1; // Points awarded for each correct answer
    const maxQuestions = 10; // Maximum number of questions in the quiz

    let scoreDisplay = document.getElementById("score");
    let resetButton = document.getElementById("reset");
    let availableQuestions = []; //Copy of question array so original list is not affected;
    let currentQuestion = {};
    let acceptingAnswers = false;
    let questionCounter = 0;
    let score = 0;
    let username = '';

    //Display welcome page
    function welcomePageDisplay() {
        //Hide trivia container when welcome page is displayed 
        quizContainer.style.display = "none";    

        startButton.addEventListener("click", function () {
            username = userNameInput.value.trim();
            if(!username) {
                alert("Please enter your name to start");
                return;
            }
            setUpAnswers(); //Set up answer buttons
            startQuiz(); // Start the quiz
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

    //start the quiz game
    function startQuiz() {
        availableQuestions = [...questions]; //Clone the questions array
        questionCounter = 0;
        score = 0; //reset score to 0;   
        scoreDisplay.innerText = score; // Update score display
        welcomePage.style.display = "none"; // Hide the welcome page
        quizContainer.style.display = "block"; // Show the quiz container
        answers.forEach(answer => answer.style.display = "block"); // Show answer buttons
        trackingElements.forEach(element => element.style.display = "flex"); // Show tracking elements
        hintButton.style.display = "block"; // Show hint button
        resetButton.style.display = "block"; // Show reset button
        homeButton.style.display = "none"; //Hide home button
        playButton.style.display = "none"; //Hide play button
        showNewQuestion(); //show the first question
    }

    // End the quiz and display the final score
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
            question.classList.add('end-message'); // Add the class to set the size of the end message
        } else {
            alert("Opps, something went wrong, please try again");
        }
    }
 
    //show a new question
    function showNewQuestion() {
        try {
            // End quiz if no more questions are available or max questions reached
            if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
                endQuiz();
                return;
            }
                
            questionCounter++; // Increment question counter
            questionCounterDisplay.innerText = `${questionCounter} / ${maxQuestions}`; // Update question counter display
            const currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length); // Select a random question
            currentQuestion = availableQuestions[currentQuestionIndex];
            question.innerText = currentQuestion.question; //Display the question

            // Set answer text and reset button states
            answers.forEach(answer => {
                const number = answer.dataset["number"];
                answer.innerText = currentQuestion["choice" + number]; //corresponded answer is matched with question 
                answer.disabled = false;//re-enable buttons for each question 
                answer.classList.remove("correct", "incorrect");// Remove previous classes
                clearHint(); // Clear any previous hint
            });

            // Remove used question from available questions 
            availableQuestions.splice(currentQuestionIndex, 1);
            acceptingAnswers = true;    
        }  catch (error) {
            handleError(error);
        }
    }
    // Set up event listeners for answer buttons
   function setUpAnswers () {
     answers.forEach(answer => {
        answer.addEventListener("click", event => {
            if (!acceptingAnswers) return;
            
            acceptingAnswers = false;  // Prevent multiple answers
            const selectedChoice = event.target; // Get clicked element 
            const selectedAnswer = selectedChoice.dataset["number"];


            //assign class name to correct and incorrect answers so that they can be destinguished.
            const classToApply = selectedAnswer == currentQuestion.correctChoice ? "correct" : "incorrect" ; 
            if (classToApply === "correct") {
                incrementScore(awardedPoints);
            } else { 
                // Highlight the correct answer
                const correctAnswerButton = answers.find(button => button.dataset ["number"] == currentQuestion.correctChoice);
                if (correctAnswerButton) {
                    correctAnswerButton.classList.add("correct");
                }
            }    
              
            answers.forEach(button => button.disabled = true); // Disable all buttons
            selectedChoice.classList.add(classToApply); // Apply clss to selected choice
            // display results for 1.5 sec (1500 milisec.) before removing it and getting next question
            setTimeout(() => {              
                showNewQuestion();
            }, 1500); 
        });
    });
   }
    //Display hint when "hint"button is clicked 
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

    //increase score by given number (1) each time class"correct"is added
    const incrementScore = num => {
        score += num
        scoreDisplay.innerText = score; // Update score display
    }

    // Function to go back to the welcome page
    function goToWelcomePage() {
        quizContainer.style.display = "none"; // Hide the trivia container
        welcomePage.style.display = "block"; // Show the welcome page
        question.innerHTML = ""; // Clear the question text
        hintText.innerText = "Hint"; // Reset the hint text
        userNameInput.value="";//Clear username value input
        scoreDisplay.innerText = 0; // Reset the score display
    }

    // Event listeners for hint, reset, home, and play buttons
    hintButton.addEventListener("click", displayHint);
    resetButton.addEventListener("click", startQuiz);
    homeButton.addEventListener("click", goToWelcomePage);
    playButton.addEventListener("click", startQuiz);

   //Initial call, trigger to display the welcome page and hide trivia game 
    welcomePageDisplay();
});