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

window.onkeydown = function (e) {
    {
        if(e.keyCode == right && snakeBody[0][1] < 11)
        {
            snakeBody[0][1] += 1;
            snakeHead.style.left = snakeBody[0][1] * cellSize + 'px';
            console.log('Right 1');
        } 
        else if(e.keyCode == left && snakeBody[0][1] > 0) 
        {
            snakeBody[0][1] -= 1;
            snakeHead.style.left = snakeBody[0][1] * cellSize + 'px';
            console.log('Left 1');
        }
        else if(e.keyCode == up && snakeBody[0][0] > 0)
        {
            snakeBody[0][0] -= 1;
            snakeHead.style.top = snakeBody[0][0] * cellSize + 'px';
            console.log('Up 1');
        }
        else if(e.keyCode == down && snakeBody[0][0] < 11) 
        {
            snakeBody[0][0] += 1;
            snakeHead.style.top = snakeBody[0][0] * cellSize + 'px';
            console.log('Down 1');
        }
        console.log('Head Is At ' + snakeBody[0][0] + ' ' + snakeBody[0][1])
        foodRandom();
        followBody();
    }
}

function createPiece () {
    var snakeBodyNew = document.createElement("div");
    snakeBodyNew.classList.add("bodyPiece");
    document.getElementById("arena").appendChild(snakeBodyNew);
    var createNewArray = [0, 0, snakeBodyNew];
    snakeBody.push(createNewArray);
    console.log('NEW BODY PIECE ' + createNewArray[0] + ' ' + createNewArray[1]);
    console.log('FOOD HAS SPAWNED ' + foodPosition[0] + ' ' + foodPosition[1]);
    
}

function foodRandom() {
    if (snakeBody[0][0] === foodPosition[0] && snakeBody[0][1] === foodPosition[1]) { 
        foodPosition[0] = Math.floor(Math.random() * cellCanvas);
        foodPosition[1] = Math.floor(Math.random() * cellCanvas);
        food.style.top = foodPosition[0] * cellSize + 'px';
        food.style.left = foodPosition[1] * cellSize + 'px';
        createPiece()
    }     
}

/*var arrayLength = 1; arrayLength < snakeBody.length; arrayLength++*/
function followBody() {
    for (var arrayLength = 1; arrayLength < snakeBody.length; arrayLength++) {
        var test = 1;
        ++test;
        //bodyPiece = snakeBody[0][1];
        console.log('working?');

        snakeBody[arrayLength][0] = snakeBody[0][0] -test;
        snakeBody[arrayLength][1] = snakeBody[0][1] -test;
        
        /*var test3 = 0;
        var newPos = snakeBody[arrayLength][0];

        var test = snakeBody[0][1];
        var test2 = snakeBody[0][0];

        snakeBody[arrayLength][0] = test2;
        snakeBody[arrayLength][1] = test;

        test3++;

        test = test - test3;
        test2 = test2 - test3;
        */
        //bodyPiece.style.top = bodyPiece * cellSize + 'px';
        //bodyPiece.style.left = bodyPiece * cellSize + 'px';
    }
}