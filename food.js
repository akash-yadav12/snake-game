import {onSnake, expandSnake} from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const expansionRate = 5
const scoreKeeper = document.getElementById('score')

export function update(){
    if (onSnake(food)){
        expandSnake(expansionRate)
        scoreKeeper.innerText = Number(scoreKeeper.innerText)+1
        food = getRandomFoodPosition()
    }
}

export function draw(gameboard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameboard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPos
    while (newFoodPos == null || onSnake(newFoodPos)){
        newFoodPos = randomGridPosition()
    }
    return newFoodPos
}