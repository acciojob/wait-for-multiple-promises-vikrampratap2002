let tbody = document.getElementById("output");
let loadingRow = document.createElement("tr");
let loadingCell = document.createElement("td");

loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";

loadingRow.appendChild(loadingCell);
tbody.appendChild(loadingRow);


function createPromise() {
	return new Promise((resolve) => {
		let time = Math.random() * 2 + 1;

		setTimeout(() => {
			resolve(time);
		}, time * 1000);
});
	
}

let p1 = createPromise();
let p2 = createPromise();
let p3 = createPromise();

let startTime = performance.now();

Promise.all([p1,p2,p3]).then((results) => {
	let endTime = performance.now();
	let totalTime = (endTime - startTime) / 1000;

	tbody.innerHTML = "";

	results.forEach((time,index) => {
		let row = document.createElement("tr");
		let col1 = document.createElement("td");
		col1.textContent = `Promise ${index + 1}`;
		let col2 = document.createElement("td");
		col2.textContent = time.toFixed(3);
		row.appendChild(col1);
		row.appendChild(col2);

		tbody.appendChild(row);
});

	let totalRow = document.createElement("tr");
	let totalCol1 = document.createElement("td");
	totalCol1.textContent = "Total";
	let totalCol2 = document.createElement("td");
	totalCol2.textContent = totalTime.toFixed(3);

	totalRow.appendChild(totalCol1);
	totalRow.appendChild(totalCol2);

	tbody.appendChild(totalRow);
});