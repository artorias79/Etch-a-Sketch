for (let i = 0; i < 16; i++) {
	let newRow = document.createElement('div');
	let container = document.querySelector('div#container');
	container.appendChild(newRow);
}

function createRow() {
	for (let i = 0; i < 16; i++) {
		let newDiv = document.createElement('div');
		let container = document.querySelector('div.containers');
		container.appendChild(newDiv);
	}
}