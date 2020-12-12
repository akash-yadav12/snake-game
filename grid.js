let sizeGrid = 40
export function randomGridPosition(){
    return{
        x: Math.floor(Math.random() * sizeGrid)+1,
        y: Math.floor(Math.random() * sizeGrid)+1
    }
}

export function outsideGrid(postion){
    return (
        postion.x < 1 || postion.x > 41 || 
        postion.y < 1 || postion.y > 41
    )
}