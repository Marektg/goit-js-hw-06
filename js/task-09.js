function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const strona = document.querySelector("body");
const span = document.querySelector(".color");
const zmiana = () => {
  strona.style.backgroundColor = getRandomHexColor();
  span.innerHTML = `${strona.style.backgroundColor}`;

}
btn.addEventListener("click", zmiana);