// board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// bird (change to ninja cat later)
let birdwidth = 34;
let birdHeight = 24;
let birdX = boardwidth/8;
let birdY = boardHeight/2;


// javascript object
let bird = {
    x: birdX,
    y: birdY,
    width: birdwidth,
    height: birdHeight


}
window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context - board.getContext("2d"); // used for drawing on the board

    // draw flappy bird
    context.fillStyle = "green";
    context.fillRect(bird.x, bird.y, bird.width, bird.height);
}

