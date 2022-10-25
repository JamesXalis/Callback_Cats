// const quiz = document.getElementById ('quiz')
// const answerEls = document.querySelectorAll ('.answer')
// const questionEls = document.querySelectorAll ('.question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitBtn = document.getElementById('submit')
// const startBtn = document.getElementById('starting-button')


const quizData =[
    {
        question: "Which language runs in a web browser?",
        choices:['java','c','python','javascript'],
        answer: 'javascript'
    },
    {
        question: "What does CSS stand for?",
        choices:['Central Style Sheets','Cascading Style Sheets','Cascading Simple Sheets','Cars SUVS Sailboats'],
        answer: 'Cascading Style Sheets'
    },
    {
        question: "What does HTML stand for?",
        choices:['Hypertext Markup Language','Hypertext Markdown Language','Hyperloop Machine Language','Helicopters Terminals Moterboats Lamborginis'],
        answer: 'Hypertext Markup Language'
    },
    {
        question: "What year was JavaScript launched?",
        choices:['1996','1995','1994','none of the above'],
        answer: '1995'
    },
]


let currentQuiz = 0
let score = 0;
let currentQuestion = -1;
let timeLeft = 0;
let timer;

function start(){
    timeLeft = 60;
    document.getElementById('timeLeft').innerHTML = timeLeft;

    timer =setInterval(function(){
        timeLeft--;
        document.getElementById('timeLeft').innerHTML = timeLeft;
        if (timeLeft <=0 ){
            clearInterval();
            endQuiz();
        }
    },1000);
    nextQuestion();
}

function endQuiz(){
    clearInterval(timer);
    let quizContent =`
    <h2>Game Over!</h2>
    <h3>Your final score is `+score+`/100</h3>
    <input type='text' id= 'name' placehoder='Enter your name'>
    <button onclick='setScore()'>Submit</button>`;
    document.getElementById('quizBody').innerHTML = quizContent;
}

function setScore(){
    localStorage.setItem('highScore', score);
    localStorage.setItem('highScoreInput', document.getElementById('name').value);
    getScore();
}

function getScore(){
    let quizContent=`
    <h2>`+localStorage.getItem('highScoreInput')+`'x highscore is:</h2>
    <h3>`+ localStoreage.getitem('highScore')+`</h3>
    <button onclick='clearScore()'>Clear Score</button><button onclick='resetQuiz()'>Try Again</button>`;
    document.getElementsById('quizBody').innerHTML = quizContent;
}

function clearScore(){
    localStorage.setItem('highScore','');
    localStorage.setItem('highScoreInput','');
    resetQuiz();
}

function resetQuiz(){
    clearInterval(timer);
    socre = 0;
    currentQuestion =-1;
    timeLeft =0;
    timer= null;

    document.getElementById('timeLeft').innerHTML = timeLeft;

    let quizContent = `
    <h2>Welcome to Callback Cats!</h2>
    <p>Try to answer the follwoing code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
    <h3>
        Click to Start!
    </h3>
    <button onclick="start()">Start!</button>`
    document.getElementById('quizBody').innerHTML = quizContent;
}

function incorrect(){
    timeLeft -=10;
    nextQuestion();
}

function correct(){
    score += 20;
    nextQuestion();
}

function nextQuestion(){
    currentQuestion++;

    if(currentQuestion >quizData.length -1 ){
        endQuiz ();
        return
    }

    let quizContent =`
    <h2>`+quizData[currentQuestion].question+`</h2>`
    
    for(let i = 0; i < quizData[currentQuestion].choices.length; i++){
        let buttonCode = `<button onclick="[ANS]">[CHOICE]</button>;`
        buttonCode= buttonCode.replace ("[CHOICE]", quizData[currentQuestion].choices[i]);
        if (quizData[currentQuestion].choices[i]){
            buttonCode= buttonCode.replace("[ANS]","correct()");
        }else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }
    document.getElementById("quizBody").innerHTML = quizContent;
}

// function deselectAnswers(){

//     answerEls.forEach(answerEls => answerEls.checked = false)
// }

// function loadQuiz(){
    
//     deselectAnswers()
    
//     const currentQuizData = quizData[currentQuiz]
    
//     questionEls.innerText = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d
    
// }

// function getSelected() {
//     let answerEls
//     answerEls.forEach(answerEls => {
//         if(answerEls.checked){
//             answer=answerEls.id
//         }
        
//     })
//     return answer
// }

// startBtn.addEventListener ('click'), () =>{
//     const answer = getSelected()
//     if(answer){
//         if (answer === quizData[currentQuiz].correct){
//             score++
//         }
        
//         currentQuiz ++
        
//         if(currentQuiz < quizData.length){
//             loadQuiz()
//         }else{
//             quiz.innerHTML =`
//             <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//             <button on click="location.reload()">Reload</button>
//             `
//         }
//     }    
// }
