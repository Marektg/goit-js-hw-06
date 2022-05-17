const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const pisz = (event) => {
    output.textContent = event.currentTarget.value;
    if (textInput.value === "") {
        output.textContent = "Anonymous";
    }
}

textInput.addEventListener("input", pisz);