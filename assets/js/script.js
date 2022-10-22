const quiz = document.getElementById ('quiz')
const answerEls = document.querySelectorAll ('.answer')
const questionEls = document.querySelectorAll ('.question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const startBtn = document.getElementById('starting-button')


const quizData =[
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]


let currentQuiz = 0
let score = 0

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
    },1000)
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

function deselectAnswers(){

    answerEls.forEach(answerEls => answerEls.checked = false)
}

function loadQuiz(){
    
    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz]
    
    questionEls.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function getSelected() {
    let answerEls
    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer=answerEls.id
        }
        
    })
    return answer
}

startBtn.addEventListener ('click'), () =>{
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        
        currentQuiz ++
        
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button on click="location.reload()">Reload</button>
            `
        }
    }    
}
