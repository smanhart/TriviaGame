//var array to hold questions
var questions = [
    {q:"What was the first food eaten in space?", a1:"Applesauce", a2:"Cheetos", a3:"Banana"},
    {q:"In ancient Egypt, what food was given as wages to workers?", a1:"Bread", a2:"Radishes", a3:"Milk"}
]
    //each question object w/ array of answers?
var correctAns = 0;
var wrongAns = 0;
var unanswered = 0;
var questionIndex = 0;

//show start button, hide text

//function to loop through questions
function renderQuestion() {
    if(questionIndex <= (questions.length - 1)) {
        $("#question").text(questions[questionIndex].q);
        $("#option1").text(questions[questionIndex].a1);
        $("#option2").text(questions[questionIndex].a2);
        $("#option3").text(questions[questionIndex].a3);
    }
}
renderQuestion();
    //if more questions then go to the next question


    //else go to finish screen
//display first question on click event
    //timed
    //question in one div
    //each answer put in their own div
//get input from user guess
    //listen for click 
//display if guess is right or wrong - for a set time
//move to next question
//start timer over
//when finished, show total scores
//reset counters and timer and questions