const upBtn = document.querySelector('[data-action="increment"]');
const downBtn = document.querySelector('[data-action="decrement"]');
const spanValue = document.querySelector("#value");
let value = 0;
    spanValue.innerHTML = value;


const dodawanie = () => {
    let actualValue = parseInt(spanValue.innerHTML);   
    return spanValue.innerHTML = actualValue + 1;
};
    
const odejmowanie = () => {
    let actualValue = parseInt(spanValue.innerHTML);  
    return spanValue.innerHTML = actualValue - 1;
};

upBtn.addEventListener("click", dodawanie);
downBtn.addEventListener("click", odejmowanie);