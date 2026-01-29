const gridContainer = document.querySelector('.grid-container');

const sizeGrid = 600;

let amountSquare = 16;

let squareSize = sizeGrid / amountSquare;

function createSquare(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
    return gridContainer.appendChild(square);
}

for (let i = 0; i < amountSquare; i++){
    for (let j = 0; j < amountSquare; j++){
        createSquare();
    }
}