var body = document.querySelector('body')

// team list
var teams = []

// Two team objects
const t1 = {
    score: 0,
    button: document.querySelector('#t1Button'),
    display: document.querySelector('#t1Display'),
}
teams.push(t1)

const t2 = {
    score: 0,
    button: document.querySelector('#t2Button'),
    display: document.querySelector('#t2Display'),
}
teams.push(t2)

// Reset button
const resetButton = document.querySelector('#resetButton')
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 3
let isGameOver = false

function fieldGoal(team, anotherTeam) {
    if (!isGameOver) {
        let addPoint = 1
        team.score += addPoint
        console.log(team)
        team.display.textContent = team.score
        if (team.score === winningScore) {
            isGameOver = true
            team.display.classList.add('winner')
            anotherTeam.display.classList.add('loser')
            team.button.disabled = true;
            anotherTeam.button.disabled = true;
        }
    }
}

function reset() {
    isGameOver = false
    for (const team of teams) {
        team.score = 0
        team.display.textContent = 0
        team.display.classList.remove('winner', 'loser')
        team.button.disabled = false
    }
}

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    reset()
})

resetButton.addEventListener('click', function() {
    reset()
})

t1.button.addEventListener('click', function() {
    fieldGoal(t1, t2)
})


t2.button.addEventListener('click', function() {
    fieldGoal(t2, t1)
})


function threePoint() {

}

function freeThrow() {

}