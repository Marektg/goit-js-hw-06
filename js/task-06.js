const insert = document.querySelector("#validation-input");

const sprawdz = () => {
    let ileZnakow = insert.value;
    if (parseInt(ileZnakow.length) === parseInt(insert.dataset.length)) {
        insert.setAttribute("class", "valid");
    }
    else {
        insert.setAttribute("class", "invalid");
    }
    if (ileZnakow === "") {
        insert.removeAttribute("class");
    }
}

insert.addEventListener("blur", sprawdz);
