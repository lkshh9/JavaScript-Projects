const myCalculator = document.querySelector(".myCal");

const myKeys = [["1","2","3","+"],["4","5","6","-"],["7","8","9","*"],["C","0","=","/"]];
const myOper = ["+","-","*","/"];

let myOutput;

document.addEventListener("DOMContentLoaded", () => {
	myOutput = document.createElement("div");
	myOutput.innerHTML = "0";
	myOutput.classList.add("output")
	myCalculator.appendChild(myOutput);
	console.log(myOutput);

	for(let i=0;i<myKeys.length;i++){
		let div = document.createElement("div");
		div.classList.add("row");
		for(let x=0;x<myKeys[i].length;x++){
			console.log(myKeys[i][x])
			let btn = document.createElement("div");
			btn.innerHTML = myKeys[i][x];
			btn.classList.add("btn");
			btn.addEventListener("click",btnHit);
			div.appendChild(btn);
		}
		myCalculator.appendChild(div);
		console.log(div);
	}
})

function btnHit(){
	console.log(this.innerText);

	let myValue = this.innerText;
	let myCal = myOutput.innerText;

	if(myCal === "0"){
		myCal = "";
	}

	if(myValue === "="){
		myCal = eval(myCal);
	} else {
		let lastChar = myCal.substring(myCal.length-1);
		console.log(lastChar);

		if(myOper.includes(myValue)){
			if(myOper.includes(lastChar)){
				myCal = myCal.substring(0,myCal.length-1) // subtract that last character out
			} else {
				myCal = eval(myCal)
			}
		}

		myCal += myValue;
	}
	if(myValue === "C"){
		myCal = 0;
	}
	myOutput.innerText = myCal
}

