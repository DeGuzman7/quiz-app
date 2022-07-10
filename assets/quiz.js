const highScores = JSON.parse(localStorage.getItem("highScores",)) || [];
console.log(highScores);
const MAX_HIGH_SCORES = 5;


const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

var time = 50;
var i = 0;
var sco = 0;



document.querySelector(".btn").onclick = function (){

  function makeAlert(){ 
      if(time <= 0){
          i = 4;
      }
    time--;
    $(".timediv").text(time);
  
};

setInterval(makeAlert, 1000);

    document.querySelector(".btn").style.display = "none";
    document.querySelector(".quizHome").style.display = "none";
    document.querySelector(".questionChoice").style.display = "block";
    displayQuiz();



}
function displayQuiz(){
   
var currentQuestion = questions[i].questionText;
var option1 = questions[i].options[0];
var option2 = questions[i].options[1];
var option3 = questions[i].options[2];
var option4 = questions[i].options[3];
var correctOption = questions[i].answer;
    
// alert(correctOption);

document.querySelector(".questionText").innerHTML = "<h2>" + currentQuestion + "</h2>";

document.querySelector("#option1").innerHTML = option1;
document.querySelector("#option2").innerHTML = option2;
document.querySelector("#option3").innerHTML = option3;
document.querySelector("#option4").innerHTML = option4;



}


$(".option").click(function (){
  
//alert("hi");

     var choosenOption = $(this).text();
    // $choosenOption = $("#" + t).text();
     //   alert(t);
     
     if(choosenOption == questions[i].answer){
         //alert("correct");
         sco +=2;

         $("#show").text("Correct");

     }else{
         time-=10;
          $("#show").text("Incorrect");
     }
  //   alert(correctOption);
 
  i++;
   if(i < questions.length){
    displayQuiz();
     }else{
       $(".timediv").hide();
  document.querySelector(".questionText").style.display = "none";   
  document.querySelector(".quiz").style.display = "none";
    document.querySelector(".questionChoice").style.display = "none";
    $(".form").show();
    $(".paraScore").text("Your final score is " + sco);
   

  }
});
 
$(".formSubmit").click(function (){
    $name = $(".name").val()
    if($(".name").val() != ""){
        $(".form").hide();
        $(".highScore").show();
        const score = {
            score: sco,
            name: $name
        };
        highScores.push(score);
        highScores.sort( (a,b) => b.score - a.score)
        highScores.splice(5);

        localStorage.setItem('highScores', JSON.stringify(highScores));
        console.log(highScores);
 

highScoresList.innerHTML = highScores.map(score => {
    return "<li class='item'>" + score.name + " - " + score.score + "</li>";
});

 }
});

$("#leaderboard").click(function (){
    $(".quiz").hide();
    $(".quizHome").hide();
    $(".highScore").show();
    $(".btn").hide();
     $(".timediv").hide();

    highScoresList.innerHTML = highScores.map(score => {
    return "<li class='item'>" + score.name + " - " + score.score + "</li>";
});
});
$(".clear").click(() => {
    localStorage.clear();
    window.location.assign("");
});
$(".goBack").click(() => {
  
    window.location.assign("");
});



