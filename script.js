for (let i = 0; i < 16; i++) {
	let newRow = document.createElement('div');
	let container = document.querySelector('div#container');
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
	if (typeof length != 'number' || typeof width != 'number') {
		console.log(length);
		return;
	} else {
		console.log(length);
		if (length > 100 || width > 100) {
			alert('Make sure each side is less than 100 squares');
		} 
	}
})