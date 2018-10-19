//var array to hold questions
var questions = [
    {q:"What was the first food eaten in space?", o1:"Applesauce", o2:"Cheetos",o3:"Banana", a:"o1", result:"Applesauce"},
    {q:"In ancient Egypt, what food was given as wages to workers?", o1:"Bread", o2:"Radishes", o3:"Milk", a:"o2"},
    {q:"What percentage of the over 3000 varieties of pears are produced in the US?", o1:"84%", o2:"30%", o3:"5%", a:"o1"},
    {q:"Which food has successfully been turned into a diamond?", o1:"Chocolate", o2:"Ground Beef", o3:"Peanut Butter", a:"o3"},
    {q:"What food is stolen most often?", o1:"Potatoes", o2:"Cheese", o3:"Apples", a:"o2"}
]
    //each question object w/ array of answers?
var correctAns = 0;
var wrongAns = 0;
var unanswered = 0;
var questionIndex = 0;
var questionTimer = 21;
var intervalID;

//show start button, hide text
    //begins timer when pressed
//display first question on click event
    //timed
    //question in one div
    //each answer put in their own div

function gameTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(function() {
        questionTimer--
        $("#timer").text("Time Remaining: " + questionTimer);
    },1000)
    
}

//function to loop through questions
function renderQuestion() {
    gameTimer();
    //if more questions then go to the next question
    if(questionIndex <= (questions.length - 1)) {
        $("#question").text(questions[questionIndex].q);
        $("#option1").text(questions[questionIndex].o1);
        $("#option2").text(questions[questionIndex].o2);
        $("#option3").text(questions[questionIndex].o3);
    } else{
        //else go to finish screen
        clearInterval(intervalID);
        $("#timer").empty();
        $("#question").text("Game Over");
        $("#option1").text("Correct Answers: " + correctAns);
        $("#option2").text("Incorrect Answers: " + wrongAns);
        $("#option3").text("Unanswered: " + unanswered);
    }
}
renderQuestion();
    
//function to show right or wrong message
function rightGuess(){
    
}

function wrongGuess(){

}
    //call renderquestion inside of function

if(questionTimer > 0) {
    $(".answer").on("click", function(){
        // event.preventDefault()
        //get input from user guess
        //listen for click 
        var userAnswer = $($(this)).attr("datavalue");
        // if (questionTimer > 0) {

            if(userAnswer === questions[questionIndex].a) {
                correctAns++
                questionIndex++
                renderQuestion(); //this will be the right answer function
                
                
            } else {
                wrongAns++
                questionIndex++
                renderQuestion(); //this will be the wrong answer function
                
                
            }
        // } else if (questionTimer === 0) {
        //     console.log("out of time");
        // }
    })
} else if (questionTimer === 0) {
    clearInterval(intervalID);
    console.log("out of time");
}


//display if guess is right or wrong - for a set time
//move to next question
//start timer over
//when finished, show total scores
//reset counters and timer and questions