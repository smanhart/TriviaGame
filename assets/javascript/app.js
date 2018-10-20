//var array to hold questions
var questions = [
    {q:"What was the first food eaten in space?", o1:"Applesauce", o2:"Cheetos",o3:"Banana", a:"o1", correct:"Applesauce", pic:"assets/image/Applesauce.jpg"},
    {q:"In ancient Egypt, what food was given as wages to workers?", o1:"Bread", o2:"Radishes", o3:"Milk", a:"o2", correct:"Radishes", pic:"assets/image/Radishes.jpg"},
    {q:"The US produces over 84% of the 3000 varieties of this fruit?", o1:"Pears", o2:"Grapes", o3:"Mangos", a:"o1", correct:"Pears", pic:"assets/image/Pears.jpg"},
    {q:"Which food has successfully been turned into a diamond?", o1:"Chocolate", o2:"Ground Beef", o3:"Peanut Butter", a:"o3", correct:"Peanut Butter", pic:"assets/image/Peanut-Butter.jpg"},
    {q:"What food is stolen most often?", o1:"Potatoes", o2:"Cheese", o3:"Apples", a:"o2", correct:"Cheese", pic:"assets/image/Cheese.jpg"}
]
    //each question object w/ array of answers?
var correctAns = 0;
var wrongAns = 0;
var unanswered = 0;
var questionIndex = 0;
var questionTimer = 10;
var answerTimer = 5;
var resultTimer
var intervalID;




// function startScreen() {
//     $("#question").hide()
//     $("#option1").hide()
//     $("#option2").hide()
//     $("#option3").hide()
//     clearInterval();
//     $("button").on("click", renderQuestion() );
// }
// // renderQuestion()
// document.onload(startScreen());
// //show start button, hide text
//     //begins timer when pressed
//     //display first question on click event 
//     //timed
//     //question in one div
//     //each answer put in their own div
    


// function gameTimer() {
//     clearInterval(intervalID);
//     questionTimer = 10;
//     intervalID = setInterval(function() {
//         questionTimer--
//         $("#timer").text("Time Remaining: " + questionTimer);
//     },1000)
    
// }

// function stopTimer() {
//     clearInterval(intervalID);
// }

// function resultTimer() {

// }

// //function to loop through questions
// function renderQuestion() {
//     gameTimer();
//     $("#pic").empty();
//     $("button").hide();
//     //if more questions then go to the next question
//     if(questionIndex <= (questions.length - 1)) {
//         $("#question").show().text(questions[questionIndex].q);
//         $("#option1").show().text(questions[questionIndex].o1);
//         $("#option2").show().text(questions[questionIndex].o2);
//         $("#option3").show().text(questions[questionIndex].o3);
//     } else{
//         //else go to finish screen
//         stopTimer();
//         $("#timer").empty();
//         $("#question").text("Game Over");
//         $("#option1").text("Correct Answers: " + correctAns);
//         $("#option2").text("Incorrect Answers: " + wrongAns);
//         $("#option3").text("Unanswered: " + unanswered);
//     }
// }
// // renderQuestion();
    
// //function to show right or wrong message
// function rightGuess(){
//     $("#question").text("Correct!");
//     $("#pic").html("<img src=" + questions[questionIndex].pic + "/>");
//     renderQuestion();
// }

// function wrongGuess(){

// }
//     //call renderquestion inside of function


// $(".answer").on("click", function(){
//     // event.preventDefault()
//     //get input from user guess
//     //listen for click 
//     var userAnswer = $($(this)).attr("datavalue");
//     if (questionTimer > 0) {

//         if(userAnswer === questions[questionIndex].a) {
//             correctAns++
//             questionIndex++
//             renderQuestion(); //this will be the right answer function
            
            
//         } else {
//             wrongAns++
//             questionIndex++
//             renderQuestion(); //this will be the wrong answer function
            
            
//         }
//     } else if (questionTimer === 0) {
//         console.log("out of time");
//     }
// });



//display if guess is right or wrong - for a set time
//move to next question
//start timer over
//when finished, show total scores
//reset counters and timer and questions





function runTimer() {
    questionTimer = 10;
    clearInterval(intervalID);
    intervalID = setInterval(gameClock, 1000)
    $("button").hide();
}

function gameClock() {
    questionTimer--
    $("#timer").text("Time Remaining: " + questionTimer);
    if(questionTimer === 0) {
        unanswered++
        // questionIndex++
        timeUpText() //this will be times up text
    }
}

function answerClock() {
    answerTimer--
    if(answerTimer === 0) {
        renderQuestion();
    }
}

function runAnswer() {
    answerTimer = 5
    clearInterval(intervalID);
    intervalID = setInterval(answerClock, 1000);
}


function stopTimer() {
    clearInterval(intervalID);
}

function renderQuestion() {
    runTimer();
    $("#pic").hide()
    $(".answer").show()
    if(questionIndex <= (questions.length - 1)) {
        $("#question").text(questions[questionIndex].q);
        $("#option1").text(questions[questionIndex].o1);
        $("#option2").text(questions[questionIndex].o2);
        $("#option3").text(questions[questionIndex].o3);
    } else{
        //else go to finish screen
        stopTimer();
        $("#timer").empty();
        $("#question").text("Game Over");
        $("#option1").text("Correct Answers: " + correctAns);
        $("#option2").text("Incorrect Answers: " + wrongAns);
        $("#option3").text("Unanswered: " + unanswered);
        
    }
}

function evalAnswer() {
    var userAnswer = $($(this)).attr("datavalue");
    if(userAnswer === questions[questionIndex].a) {
        correctAns++
        correctText(); //this will be the right answer function     
    } else if(userAnswer !== questions[questionIndex].a){
        wrongAns++
        wrongText(); //this will be the wrong answer function   
    }
}

function correctText() {
    runAnswer();
    $("#question").text("Correct!");
    $(".answer").hide()
    $("#pic").show().html("<img src='" + questions[questionIndex].pic + "'/>");
    questionIndex++
}

function wrongText() {
    runAnswer();
    $("#question").text("Incorrect");
    $("#option1").text("The correct answer is: " + questions[questionIndex].correct)
    $(".extra").hide()
    $("#pic").show().html("<img src='" + questions[questionIndex].pic + "'/>");
    questionIndex++
}

function timeUpText() {
    runAnswer();
    $("#question").text("Time's Up!");
    $("#option1").text("The correct answer is: " + questions[questionIndex].correct)
    $(".extra").hide()
    $("#pic").show().html("<img src='" + questions[questionIndex].pic + "'/>");
    questionIndex++
}

$("button").on("click", renderQuestion);

$(".answer").on("click", evalAnswer);