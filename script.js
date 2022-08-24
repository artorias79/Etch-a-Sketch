// creates row container divs
function createHeight(height) {
	let newDiv;
	let container = document.querySelector('div#container');
	for (let i = 0; i < height; i++) {
		newDiv = document.createElement('div');
		newDiv.classList.add('rows');
		container.appendChild(newDiv);
	}
}

// adds as many divs to the row containers as length variable
function createLength(length) {
	let newDiv;
	let rowDivs = document.querySelectorAll('div.rows');
	rowDivs.forEach(row => {
		for (let i = 0; i < length; i++) {
			newDiv = document.createElement('div');
			newDiv.classList.add('squares');
			row.appendChild(newDiv);
		}
	})
}

function changeSquareSize(amountOfRows) {
	// change size of squares depending on the length 
	const squares = document.querySelectorAll('div.squares');
	let size = 960 / amountOfRows;
	squares.forEach(square => {
		square.style.width = (`${size}px`)
		square.style.height = (`${size}px`)
	})
}

// when squares are hovered over it will highlight only if startHover has been triggered
function highlightSquares() {
	const squares = document.querySelectorAll('div.squares');
	squares.forEach(square => {
		square.addEventListener('mouseover', function () {
			square.classList.add('hover');
		})
	})
}

function startHover() {
	const squares = document.querySelectorAll('div.squares');
	squares.forEach(square => {
		square.addEventListener('click', function () {
			highlightSquares();
		})
	})
}
	function promptGrid() {
		gridSize = prompt('Select the amount of squares in each row in the grid');
	}

function removeSquares() {
	const rows = document.querySelectorAll('div.rows');
	rows.forEach(row => {
		row.remove();
	})
	}




createHeight(16);
createLength(16);
changeSquareSize(16);
startHover();
let gridSize;

const button = document.querySelector('button');
button.addEventListener('click', function () {
	promptGrid();
	while (gridSize > 70) {
		alert('Please select an amount of squares of 70 or less');
		promptGrid();
	}
	removeSquares();
	createHeight(gridSize);
	createLength(gridSize);
	changeSquareSize(gridSize);
	startHover();
})

