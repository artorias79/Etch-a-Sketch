for (let i = 0; i < 16; i++) {
	let newRow = document.createElement('div');
	newRow.classList.add('rows');
	container.appendChild(newRow);
}

const rows = document.querySelectorAll('div.rows');
rows.forEach(row => {
	for (let i = 0; i < 16; i++) {
		let newDiv = document.createElement('div');
		newDiv.classList.add('squares');
		row.appendChild(newDiv);
	}	
});

const button = document.querySelector('button');
button.addEventListener('click', function () {
	let length = prompt('Select the amount of squares for the length of the grid: ');
	let width = prompt('Select the amount of squares for the width of the grid: ');
	width = parseInt(width);
	length = parseInt(length);
	console.log(length + width);
	rows.forEach(row => {
		row.remove();
	})
	createColumns(length);
	createRows(width);
})

function createColumns(length) {
	for (let i = 0; i < length; i++) {
		let newRow = document.createElement('div');
		let container = document.querySelector('div#container');
		newRow.classList.add('rows');
		container.appendChild(newRow);
	}
}

function createRows(width) {
	const rows = document.querySelectorAll('div.rows');
	rows.forEach(row => {
		for (let i = 0; i < width; i++) {
			let newDiv = document.createElement('div');
			newDiv.classList.add('squares');
			row.appendChild(newDiv);
		}
	});
}
