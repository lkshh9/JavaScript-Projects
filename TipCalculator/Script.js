const button = document.querySelector("button")
const output = document.querySelector(".output")
const cost = document.querySelector("input")
console.log(button);

button.addEventListener("click", () => {
    console.log(cost.value * 0.15)
    output.innerText = "output"
    let tip = (cost.value * 0.15).toFixed(2)
    let temp = `<h1>You should tip $${tip} on $${cost.value}</h1>`
    output.innerHTML = temp;
})
