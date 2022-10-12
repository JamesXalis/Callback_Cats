const $startbutton = document.querySelector("#starting-button");
const $startingHeader = document.querySelector("#startingHeader");
const $startingMessage = document.querySelector("#startingMessage");
const $questionForm = document.querySelector("form");
const $timer = document.querySelector("#timer");
const $question = document.querySelector("#question");
const $choice1 = document.querySelector("#choice1");
const $choice2 = document.querySelector("#choice2");
const $choice3 = document.querySelector("#choice3");
const $choice4 = document.querySelector("#choice4");
const $choi1 = document.querySelector("#choi1");
const $choi2 = document.querySelector("#choi2");
const $choi3 = document.querySelector("#choi3");
const $choi4 = document.querySelector("#choi4");
const $nextButton = document.querySelector("#next-button");
const $quizResponse = document.querySelector("#quizResponse");

const questions = ["All of the following are semantic HTML container elements except?",
"CSS selectors include all of the following except?",
"Which of the following is a property of an array in Javascript?",
"What primitive data type is 'the number 4' in Javascript?",
"What is the default flex-direction for flex containers in CSS?"];
const answerChoices = [["Section","Article","Aside","Img"],
["*","^","#id",".class"],
["length","concat","slice","unshift"],
["number","boolean","string","undefined"],
["row","row-reverse","column","column-reverse"]];

let secondsLeft = 60;
function setTimer(){
    $timer.textContent = `Time Left: 60 seconds`;
    $timer.style.color = `grey`;
    let timerInterval = setInterval(function() {
        secondsLeft = secondsLeft -1;
        $timer.textContent = `Time Left: ${secondsLeft} seconds`;

        if(secondsLeft <=10){
            $timer.style.color = `red`;
        }

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            $timer.textContent = `Time Left: 0 seconds`;
            scrollIndex = 0;
            $questionForm.style.display = `none`;
            $startingHeader.textContent = `Time's Up`;
            document.querySelector(`#info`).textContent = `Click START button to try agian!`
            $startingMessage.style.display = `inherit`;
            secondsLeft = 60;
        }
    }
    )
}