const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// we can check if the params are number in JS
// But if we use TS, it has code under the hood to do it for us
function add(num1: number, num2: number): number {
  return num1 + num2;
}

button.addEventListener("click", function() {
  // all input values are of type strings irrespective of the input type
  console.log(add(+input1.value, +input2.value));
});
