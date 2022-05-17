const tekst = document.querySelector("#text");
const control = document.querySelector("#font-size-control");

const zmiana = () => {
    tekst.style.fontSize = `${control.value}px`;
}
control.addEventListener("change", zmiana);
