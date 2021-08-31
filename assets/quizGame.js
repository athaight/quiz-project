//debugger;
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
var timerElement = document.querySelector(".timer-count");

let currentQuestion ={}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let timer;
let timerCount;

let questions = [
    {
        question: 'In California, you cannot buy a mousetrap without having what?',
        choice1: 'A good reason',
        choice2: "A recent doctor's note",
        choice3: 'A hunting license',
        choice4: 'Permission from the county Animal Control',
        answer: 3,

    },
    {
        question: 'Coprastastaphobia is the fear of what?',
        choice1: 'The fear of agressive snakes',
        choice2: 'The fear of small spaces',
        choice3: 'The fear of a dead body',
        choice4: 'The fear of constipation',
        answer: 4,

    },
    {
        question: 'Who sang about being an “eggman” and a “walrus”?',
        choice1: 'Mother Goose',
        choice2: 'Cardi B',
        choice3: 'The Beatles',
        choice4: 'The Three Tenors',
        answer: 3,

    },
    {
        question: 'In St. Louis, Missouri, it’s illegal for a firefighter to rescue who?',
        choice1: 'An illegal immigrant',
        choice2: "Someone who doesn't want rescue",
        choice3: 'A feline',
        choice4: 'A naked woman',
        answer: 4,

    },
    {
        question: 'In Swedish, what is “entrance” and “driveway,” respectively?',
        choice1: '"Infart" and "Upfart"',
        choice2: '"Enflugen" and "Oustrugen"',
        choice3: '"Entrada" and "Entrada de coches',
        choice4: '"Eingang" and "Auffahrt"',
        answer: 1,

    },
    {
        question: "What was Marlyn Monroe's natural hair color?",
        choice1: 'Ginger',
        choice2: "Blonde",
        choice3: 'Brunette',
        choice4: 'Black',
        answer: 1,

    },
    {
        question: 'Who was the lover of the Roman known as Marc Anthony?',
        choice1: 'Mariah Carey',
        choice2: "Joan of Arc",
        choice3: 'Cleopatra',
        choice4: 'Mary Magdeline',
        answer: 3,

    },
    {
        question: 'Where on the human body is the zygomatic bone found?',
        choice1: 'The skull',
        choice2: "The facial cheek",
        choice3: 'The throat',
        choice4: 'The lower back',
        answer: 2,

    },
    {
        question: 'Where on the human body is the zygomatic bone found?',
        choice1: 'The skull',
        choice2: "The facial cheek",
        choice3: 'The throat',
        choice4: 'The lower back',
        answer: 2,

    },
    {
        question: 'What is the most common color of toilet paper in France?',
        choice1: 'White',
        choice2: "Brown",
        choice3: 'Pink',
        choice4: 'Toilet paper??',
        answer: 3,

    },
    {
        question: "It's illegal in Texas to put what on your neighbour’s Cow?",
        choice1: 'Grafitti',
        choice2: "A President Biden Sticker",
        choice3: 'A scarf',
        choice4: 'Any sort of hat',
        answer: 1,

    },
    {
        question: 'In what country was Elon Musk born?',
        choice1: 'Sweden',
        choice2: "Belarus",
        choice3: 'South Africa',
        choice4: 'Poland',
        answer: 3,

    },
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 12

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    // timerCount = 60;
    getNewQuestion()
    startTimer()
}

var sec = 60;
function startTimer(){
    var timer = setInterval(function(){
        sec--;
        document.querySelector('.timer-count').innerHTML='00:'+sec;
        if (sec < 0) {
            clearInterval(timer);
            alert("Out of time! Try Agian.")
        }
        if (sec == 0){
            clearInterval(timer);
        }
        
    }, 1000);
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')

    }

    questionCounter++
    progressText.innerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)

        }
        if(classToApply === 'incorrect'){
            sec -= 5;
             document.querySelector('.timer-count').innerHTML='00:'+sec;
        }


        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)

    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()