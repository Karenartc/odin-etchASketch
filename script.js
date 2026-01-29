const bodyDocument =  document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const colorPencil = document.querySelector('#color-pencil');
const gridSizeSlicer = document.querySelector('#grid-size');
const textGridSlicer = document.querySelector('.grid-range-container span');

const sizeGrid = 600;

let amountSquare = 16;
let squareSize = sizeGrid / amountSquare;
let activeColor = '#000000';
let isDrawing = false;

function createSquare(amountSquare, squareSize){
    for (let i = 0; i < amountSquare; i++){
        for (let j = 0; j < amountSquare; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = squareSize + 'px';
            square.style.height = squareSize + 'px';
            gridContainer.appendChild(square);
        }
    }
}

createSquare(amountSquare, squareSize);

colorPencil.addEventListener('input', (event) => {
    activeColor = event.target.value;
});

gridSizeSlicer.addEventListener('input', (event) => {
    gridContainer.replaceChildren();
    amountSquare = event.target.value;
    squareSize = sizeGrid / amountSquare;
    textGridSlicer.textContent = `${amountSquare} x ${amountSquare}`;
    createSquare(amountSquare, squareSize);
});

gridContainer.addEventListener('mousedown', (event) => {
    isDrawing = true;
    if(event.target.classList.contains('square')){
        event.target.style.backgroundColor = activeColor;
    }
});

bodyDocument.addEventListener('mouseup', (event) => {
    isDrawing = false;
});

gridContainer.addEventListener('mouseover', (event) => {
    if(isDrawing && event.target.classList.contains('square')){
        event.target.style.backgroundColor = activeColor;
    }
});

