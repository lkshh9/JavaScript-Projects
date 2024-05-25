let myBlock;
let myFunctionList;
let funList = [];
const movementArray = ["right","left","up","down"];
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
  else if(kiCode === 82){
    let temp = movementArray[Math.floor(Math.random()*movementArray.length)];
    addFun(temp);
  }
  else if(kiCode === 13 || kiCode === 32){  // enter or space key
    mover();
  }
  console.log(kiCode);
})

function mover(){
  if(funList.length>0){
    let cur = myBlock.getBoundingClientRect();   // this will give us current coordinates of myBlock element
    console.log(cur);
    let el = funList.shift(); // Remove first item from the list
    let item = el.textContent.replace("+","");
    myFunctionList.removeChild(el);
    console.log(item)
    myBlock.innerHTML = "Move:"+item;
    if(item == "left"){
      myBlock.style.left = cur.left - cur.width + "px";
    }
    if(item == "right"){
      myBlock.style.left = cur.left + cur.width + "px";
    }
    if(item == "up"){
      myBlock.style.top = cur.top - cur.height + "px";
    }
    if(item == "down"){
      myBlock.style.top = cur.top + cur.height + "px";
    }
    setTimeout(mover,300);
  } else {
    myBlock.innerHTML = "Set Path";
    return;
  }
}

function addFun(val){

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
  span.addEventListener("click",function(){
    let curindex = funList.indexOf(this);
    console.log(curindex);
    let tempRemove = funList.splice(curindex,1);
    console.log(tempRemove);
    myFunctionList.removeChild(this);
  })

  myFunctionList.appendChild(span);
  funList.push(span); // instead of adding value to the list, add it into the element, this will give us the ability to reference that element
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