let myBlock;
let myFunctionList;
let funList = [];
document.addEventListener("DOMContentLoaded",() => {
  console.log("ready");
  myBlock = document.createElement("div");
  myBlock.style.width = "150px";
  myBlock.style.height = "150px";
  myBlock.style.backgroundColor = "lightblue";
  myBlock.style.color = "blue";
  myBlock.style.lineHeight = "150px";
  myBlock.style.textAlign = "center";
  myBlock.style.position = "absolute";
  myBlock.style.top = "100px";
  myBlock.style.left = "150px";
  myBlock.textContent = "Hello Companies"
  document.body.appendChild(myBlock)

  myFunctionList = document.createElement("div");
  document.body.appendChild(myFunctionList);
})

document.addEventListener("keydown",(e) => {
  e.preventDefault();
  let kiCode = e.keyCode;
  if(kiCode === 37) {
    addFun("left");
  }
  else if(kiCode === 39){
    addFun("right");
  }
  else if(kiCode === 38){
    addFun("up");
  }
  else if(kiCode === 40){
    addFun("down");
  }
  else if(kiCode === 67){
    myBlock.style.backgroundColor=randomColor();
  }
  console.log(kiCode);
})

function addFun(val){
  funList.push(val);
  let span = document.createElement("span")
  span.textContent = "+"+val
  span.style.padding = "10px";
  span.style.border = "1px solid #ddd";
  span.addEventListener("mouseover",function() {
    this.style.backgroundColor = "red";
    this.style.color = "white";
  })
  span.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
    this.style.color = "black";
});

  myFunctionList.appendChild(span);
  console.log(funList);
}

function randomColor(){
  return "#"+Math.random().toString(16).substr(-6);
}

function goLeft(){
  let temp = myBlock.offsetLeft;
  temp -= 50;
  myBlock.style.left = temp + "px";
}

function goRight(){
  let temp = myBlock.offsetLeft;
  temp += 50;
  myBlock.style.left = temp + "px";
}

function goUp(){
  let temp = myBlock.offsetTop;
  temp -= 50;
  myBlock.style.top = temp + "px";
}

function goDown(){
  let temp = myBlock.offsetTop;
  temp += 50;
  myBlock.style.top = temp + "px";
}