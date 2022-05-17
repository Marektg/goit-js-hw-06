function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const box = document.querySelector("#boxes");
// box.style.height = "auto";
const control = document.querySelector("#controls");
const amount = parseInt(control.firstElementChild.value);
console.log(amount);
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
let j = 30;
const create = (event) => {
  function createBoxes(amount) {
    console.log(amount);
    for (let i = 1; i <= amount; i++) {
      const createBox = document.createElement("div");
      createBox.style.height = `${j}px`;
      createBox.style.widght = `${j}px`;
      createBox.style.backgroundColor = getRandomHexColor();
      box.appendChild(createBox);
      j += 10;
      console.log(j);
    }
  }
}

createBtn.addEventListener("click", create);
// destroyBtn.addEventListener("click", destroyBoxes);