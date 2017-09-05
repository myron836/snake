// Arena Variables //
var arena = document.getElementsByClassName("arena");
var canvasSize = document.getElementById("arena").offsetWidth - 4;
var cellSize = 40;
var cellCanvas = (canvasSize / cellSize);
// ############### //

// Snake Variables //
var food = document.getElementById("food");
var foodPosition = [0, 0];
var snakeHead = document.getElementById("snek");
var snakeBody = [[0,0,snakeHead]];
var newClassNum = -1;
// ############### //

/* Directions */
var left = 65;
var right = 68;
var up = 87;
var down = 83;
/* ########## */

var head = snakeBody[snakeBody.length - 1];
createPiece(head)

window.onkeydown = function (e,index) {
    var head = snakeBody[snakeBody.length - 1];
    if(e.keyCode == right)
    {
        head[1] += 1;
    } 
    else if(e.keyCode == left) 
    {
        head[1] -= 1;
    }
    else if(e.keyCode == up)
    {
        head[0] -= 1;
    }
    else if(e.keyCode == down) 
    {
        head[0] += 1;
    }
    else{
        return;
    }
    console.log('Head Is At ' + head[0] + ' ' + head[1])
    // game logic
    foodRandom(head);
    followBody(head);
    headOutBounds(head);

    for (var index = 0; index < snakeBody.length; index++) {
        resetGame(head,index);
    } 

    // rendering
    renderSnake(snakeBody,head);   
}

function createPiece (bodyPiece) {
    var snakeBodyNew = document.createElement("div");
    snakeBodyNew.classList.add("bodyPiece");
    document.getElementById("arena").appendChild(snakeBodyNew);
    var createNewArray = [0, 0, snakeBodyNew];
    snakeBody.unshift(createNewArray);
    console.log('FOOD HAS SPAWNED ' + foodPosition[0] + ' ' + foodPosition[1]);
    
}

function foodRandom(head,index) {
    if (head[0] === foodPosition[0] && head[1] === foodPosition[1]){ 
        foodPosition[0] = Math.floor(Math.random() * cellCanvas);
        foodPosition[1] = Math.floor(Math.random() * cellCanvas);
        food.style.top = foodPosition[0] * cellSize + 'px';
        food.style.left = foodPosition[1] * cellSize + 'px';
        createPiece(head)
    }     
}

function followBody(head) {
    for (var index = 1; index < snakeBody.length; index++) {

        snakeBody[index-1][0] = snakeBody[index][0];
        snakeBody[index-1][1] = snakeBody[index][1];
    }
}

function renderSnake(snakeBody,head) {
    for (var index = 0; index < snakeBody.length; index++) {
        snakeBody[index][2].style.left = snakeBody[index][1] * cellSize + 'px';
        snakeBody[index][2].style.top = snakeBody[index][0] * cellSize + 'px';
        resetGame(head,index);
    }
}

function resetGame(head,index) {
    if (index >= snakeBody.length-2) {
        return
    }

    if (head[0] === snakeBody[index][0] && head[1] === snakeBody[index][1]) {
        console.log("died");
        var deleteSnakeBody = document.getElementsByClassName("bodyPiece");
        while(deleteSnakeBody.length > 0) {
            deleteSnakeBody[0].parentNode.removeChild(deleteSnakeBody[0]);
        }
        snakeBody = [[0,0,snakeHead]];
        createPiece(head)
    }
}

function headOutBounds(head) {
    if(head[0] > 11 || head[0] < 0 || head[1] > 11 || head[1] < 0) {
        console.log("died");
        var deleteSnakeBody = document.getElementsByClassName("bodyPiece");
        while(deleteSnakeBody.length > 0) {
            deleteSnakeBody[0].parentNode.removeChild(deleteSnakeBody[0]);
        }
        snakeBody = [[0,0,snakeHead]];
        createPiece(head)
    }
    else{
        return
    }
}