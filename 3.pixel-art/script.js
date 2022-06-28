const initialColor = document.querySelector('.black');
initialColor.classList.add('selected');

const pixelBoard = document.querySelector('#pixel-board');
const initialSize = 5;

function createPixels(size) {
  for (let indexLine = 0; indexLine < size; indexLine += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'line-pixel';
    pixelBoard.appendChild(newLine);
    for (let indexColum = 0; indexColum < size; indexColum += 1) {
      const newColum = document.createElement('div');
      newColum.className = 'pixel';
      newLine.appendChild(newColum);
    }
  }
}
createPixels(initialSize);

function selectColor() {
  const colorPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', (event) => {
      const colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
selectColor();

function paintPixelWithSelectedColor() {
  let pixel = document.getElementById('pixel-board');
  pixel.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (event.target.className === 'pixel') {
      const selectedColor = selected.classList[1];
      pixel = event.target;
      pixel.style.backgroundColor = selected.style.backgroundColor;
      pixel.style.backgroundColor = selectedColor;
    }
  });
}
paintPixelWithSelectedColor();

function clearAllPixels() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', () => {
    const pixelStyle = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelStyle.length; index += 1) {
      pixelStyle[index].style.backgroundColor = null;
    }
  });
}
clearAllPixels();

const sizeButton = document.getElementById('generate-board');

function deletePixels() {
  const pixelLines = document.querySelectorAll('.line-pixel');
  for (let index = 0; index < pixelLines.length; index += 1) {
    pixelBoard.removeChild(pixelLines[index]);
  }
}

function alterSizeBoard() {
  sizeButton.addEventListener('click', () => {
    const addNumber = document.getElementById('board-size').value;
    if (addNumber === '') {
      alert('Board inválido!');
    }
    if (addNumber >= 5 && addNumber <= 50) {
      deletePixels();
      createPixels(addNumber);
    }
  });
}
alterSizeBoard();

function keepsSizeLimits() {
  sizeButton.addEventListener('click', () => {
    const addNumber = document.getElementById('board-size').value;
    if (addNumber < 5) {
      deletePixels();
      createPixels(5);
    }
    if (addNumber > 50) {
      deletePixels();
      createPixels(50);
    }
  });
}

keepsSizeLimits();

function getRandomColors() {
  const palette = document.querySelectorAll('.color');
  for (let index = 1; index < palette.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColors = `rgb(${r},${g},${b})`;
    palette[index].style.backgroundColor = randomColors;
  }
}
getRandomColors();
