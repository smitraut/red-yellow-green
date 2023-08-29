
let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')


//counter
const squares = document.querySelectorAll('.colorSquare')
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0 }

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] +=1
        square.innerText = timesClicked[square.value] 
    } 
})

//reset game
const clearScores = () => {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(square => {
        square.innerText = 0
    })

}

const reset = document.getElementById('reset')
reset.onclick = () => clearScores()
