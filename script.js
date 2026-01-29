const bodyDocument =  document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const colorPencil = document.querySelector('#color-pencil');

const sizeGrid = 600;

let amountSquare = 16;
let squareSize = sizeGrid / amountSquare;
let activeColor = '#000000';
let isDrawing = false;

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

colorPencil.addEventListener('input', (event) => {
    activeColor = event.target.value;
});

gridContainer.addEventListener('mousedown', (event) => {
    isDrawing = true;
    if(event.target.classList == 'square'){
        event.target.style.backgroundColor = activeColor;
    }
});

bodyDocument.addEventListener('mouseup', (event) => {
    isDrawing = false;
});

gridContainer.addEventListener('mouseover', (event) => {
    if(isDrawing && event.target.classList == 'square'){
        event.target.style.backgroundColor = activeColor;
    }
});