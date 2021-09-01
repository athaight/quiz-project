const username = document.querySelector('#username')
const scoreSaver = document.querySelector('#scoreSaver')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = document.querySelector('#mostRecentScore')


const maximumHighScores = 6

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    scoreSaver.disabled = !username.value
})

highScoreRecord = event => {
    event.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(6)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    // ?
    window.location.assign('/')


}
// still messing with 
const highScoresList = document.querySelector("#highScoresList")
const highScores = JSON.parse(localStorage.getItem('highscores')) || []

highScoresList.innerHTML =
highScores.map(source => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')



