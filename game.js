import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameBoard = document.getElementById('boards')
let gameOver = false
const YourScore = document.getElementById('score')

function main(currentTime){

    if(gameOver){
        if(confirm(`You lost and Your score is ${YourScore.innerText}, press ok to restart.`)){
            window.location = '/snake/index.html'
        }
        return
    }
    window.requestAnimationFrame(main) 
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
    if (secondsSinceLastRender < 1/snakeSpeed) return 
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)


function update(){
    updateSnake()
    updateFood()
    checkForDeath()
}

function draw(){
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}