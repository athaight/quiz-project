debugger;
let currentQuestion ={}
let acceptingAnswers = true
let questionCounter = 0
let totalQuestions = 0
let availableQuestions = [...questions]

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
]

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > totalQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/highScores.html')

    }
    

    questionCounter++
    progressText.innerHTML = `Question ${questionCounter} of ${totalQuestions}`
    progressBarFull.style.width = `${(questionCounter/totalQuestions) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    //availableQuestions[]

    choices.forEach(choice => {
        const number = choice.dataset['number']
       
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

 console.log(acceptingAnswers)   
 console.log(questionCounter)
 console.log(totalQuestions)
}
