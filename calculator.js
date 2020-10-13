const container = document.querySelector("container"),
	form = container.querySelector(".showNum"),
	screen = document.querySelector("#window"),
	number = document.querySelector(".number")
	resultBtn = document.querySelector("#submit"),
	clearBtn = document.querySelector("#clear"),
	operatorBtn = document.querySelector(".operator");
let num1;
let num2;
let getOperator;
let stringedNum; //한 자리 수 이상의 수를 입력받기 위한 변수
let arrNumber = [];

// 1. 넘버 클릭 이벤트 발생->핸들러
// 2. submit 이벤트 발생->핸들러
// 3. 오퍼레이터 클릭 이벤트 발생 -> 핸들러
// 4. clear 클릭 이벤트 발생->핸들러

 function operation() {
 	let total;
	switch(getOperator) {
		case '+':
			total = num1 + num2;
			break;
		case '-':
			total = num1 - num2;
			break;
		case '*':
			total = num1 * num2;
			break;
		case '/':
			total = num1 / num2;
			break;
	}

	screen.innerText = total;
	num1 = total;
	num2 = undefined;
	arrNumber = [];
	
 }

function getInputOperator(operator) {


	if(num1 === undefined) {
		num1 = parseInt(stringedNum, 10);
		stringedNum = undefined;
		arrNumber.push(num1);
	}
	else {
		num2 = parseInt(stringedNum, 10);
		if(isNaN(num2)) {
			return;
		}
		arrNumber.push(num2);
		stringedNum = undefined;
		operation();

	}
	arrNumber.push(operator);
	getOperator = operator;
}

function getInputNum(value) {
	screen.innerText = '';

	if(stringedNum === undefined) {
		stringedNum = String(value);
		screen.innerText = stringedNum;	
	}
	else {
		stringedNum += String(value);
		screen.innerText = stringedNum;
	}	
}

function submitHandler() {
	event.preventDefault();

	num2 = parseInt(stringedNum);
	arrNumber.push(num2);
	if(num1 !== undefined && num2 !== undefined) {
		operation();
	}
	num2 = undefined;
 }

function resetHandler() {
	event.preventDefault();
	arrNumber = [];
	num1 = undefined;
	num2 = undefined;
	stringedNum = undefined;
	screen.innerText = '';
}
