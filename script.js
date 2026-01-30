const bodyDocument =  document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const colorPencil = document.querySelector('#color-pencil');
const gridSizeSlicer = document.querySelector('#grid-size');
const textGridSlicer = document.querySelector('.grid-range-container span');
const eraseButton = document.querySelector('.erase-button');
const rainbowButton = document.querySelector('.random-button');
const shadowButton = document.querySelector('.opacity-button');

const sizeGrid = 600;

let amountSquare = 16;
let squareSize = sizeGrid / amountSquare;
let activeColor = '#000000';
let isDrawing = false;
let isErasing = false;
let isRainbow = false;
let isShadow = false;

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

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`;
}

function generateShadowColor(){
    console.log('shadow color');
}

createSquare(amountSquare, squareSize);

colorPencil.addEventListener('input', (event) => {
    isErasing = false;
    isRainbow = false;
    isShadow = false;
    activeColor = event.target.value;
});

gridSizeSlicer.addEventListener('input', (event) => {
    gridContainer.replaceChildren();
    amountSquare = event.target.value;
    squareSize = sizeGrid / amountSquare;
    textGridSlicer.textContent = `${amountSquare} x ${amountSquare}`;
    createSquare(amountSquare, squareSize);
});

eraseButton.addEventListener('click', (event) => {
    isErasing = true;
    isRainbow = false;
    isShadow = false;
})

rainbowButton.addEventListener('click', (event) => {
    isRainbow = true;
    isErasing = false;
    isShadow = false;
})

shadowButton.addEventListener('click', (event) => {
    isShadow = true;
    isErasing = false;
    isRainbow = false;
})

gridContainer.addEventListener('mousedown', (event) => {
    isDrawing = true;
    if(event.target.classList.contains('square')){
        event.target.style.backgroundColor = (isRainbow) ? generateRandomColor() :
                                            (isShadow) ? generateShadowColor() :
                                            (isErasing) ? '' : activeColor;
    }
});

bodyDocument.addEventListener('mouseup', (event) => {
    isDrawing = false;
});

gridContainer.addEventListener('mouseover', (event) => {
    if(isDrawing && event.target.classList.contains('square')){
        event.target.style.backgroundColor = (isRainbow) ? generateRandomColor() :
                                            (isShadow) ? generateShadowColor() :
                                            (isErasing) ? '' : activeColor;
    }
});