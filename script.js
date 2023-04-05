
const container = document.querySelector('#container');
const yAxis= document.querySelector('#yaxis'); 

for( let i=99; i>=0; i--){
	const createLines = document.createElement('div');
	if( i % 5 === 0 && i % 2 !== 0 ){
		createLines.setAttribute('class', 'y-medium-lines');
		yAxis.appendChild(createLines);
	}else if(i % 5 === 0 && i % 2 === 0 ){
		createLines.setAttribute('class', 'y-large-lines');
		yAxis.appendChild(createLines);
	}
	else{
		createLines.setAttribute('class', 'y-small-lines');
		yAxis.appendChild(createLines);
	}
	
}
const yNumbers = document.querySelector('#ynumbers');
for(let i=100; i>=0; i=i-5){
	console.log(i);
	const createNumbers = document.createElement('div');
	createNumbers.setAttribute('class', 'nums');
	createNumbers.innerHTML = `<span>${i}</span`
	yNumbers.appendChild(createNumbers);
}

const xAxis = document.querySelector('#xaxis');
for( let i=99; i>=0; i--){
	const createLines = document.createElement('div');
	if( i % 5 === 0 && i % 2 !== 0 ){
		createLines.setAttribute('class', 'x-medium-lines');
		xAxis.appendChild(createLines);
	}else if(i % 5 === 0 && i % 2 === 0 ){
		createLines.setAttribute('class', 'x-large-lines');
		xAxis.appendChild(createLines);
	}
}

const arr=[20, 30, 40, 50, 60, 80,20,10,16,20,88,33,44];	
const xElements =document.getElementById('xelements');
let width = Math.floor(100/arr.length);
console.log(width);
let position = 0;
for(let i=0;i<arr.length;i++){
	const element = document.createElement('div');
	element.setAttribute('class', 'element');
	element.id = `order${arr[i]}`;
	element.style.height = `${arr[i]}%`;
	element.style.left = `${position}%`;
	element.style.width = `${width}%`;
	position+=width;
	xElements.appendChild(element);
}