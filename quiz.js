const data= [
    {
        id:1,
        question:"cual es una pez espada en ingles?",
        answers:[
            {answers : "jellyfish",isCorrect:false},
            {answers : "swordfish",isCorrect:true},
            {answers : "starfish",isCorrect:false},
            {answers : "crayfish",isCorrect:false},
        ],
    },
    {
        id:2,
        question:"cual es una pez espada en ingles?",
        answers:[
            {answers : "jelly fish",isCorrect:false},
            {answers : "jelly fish",isCorrect:false},
            {answers : "jelly fish",isCorrect:false},
            {answers : "jelly fish",isCorrect:false},
        ],
    },
    {
        id:3,
        question:"cual es una pez espada en ingles?",
        answers:[
            {answers : "jelly fish",isCorrect:false},
            {answers : "jelly fish",isCorrect:false},
            {answers : "jelly fish",isCorrect:false},
            {answers : "jelly fish",isCorrect:false},
        ],
    },

];

const gameScreen = document.querySelector(".game");
const resultScreen =document.querySelector(".result");
const question =document.querySelector(".question");
const answersContainer =document.querySelector(".answer");
const submit =document.querySelector(".submit");
const play =document.querySelector(".play");


let qIndex = 0;
let correctCount = 0;
let wrongCount =0;
let total = 0;
let selectedAnswer;

const playAgain = () =>{
    qIndex = 0;
    correctCount =0;
    wrongCount =0;
    total =0;
    showQuestion(qIndex);
};

play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
})

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";


    resultScreen.querySelector(
        ".correct"
        ).textContent = `Correct answers: ${correctCount}`;

    resultScreen.querySelector(
            ".wrong"
            ).textContent = `Correct answers: ${wrongCount}`;

    resultScreen.querySelector(".score").textContent = `Score: ${
        (correctCount - wrongCount) * 10
    }`;
};

const showQuestion = (qNumber) =>{
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
    .map(
        (item,index) =>

        `
        <div class="answer">
         <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
         <label for='1'>${item.answers}</label>
         <div>
        ` )
        .join("");

        selectAnswer();
    };

    const selectAnswer = () => {
        answersContainer.querySelectorAll("input").forEach((el) =>{
            el.addEventListener("click",(e) =>{
                selectedAnswer = e.target.value;
            });
        });
    };    

    const submitAnswer = () => {
        submit.querySelectorAll("click", (el) =>{
            if (selectedAnswer !== null) {
                selectedAnswer === "true" ? correctCount++ : wrongCount++;
                qIndex++;

                showQuestion(qIndex);
            } else alert("select an nswer!");
        });
    };

    showQuestion(qIndex);
    submitAnswer();


