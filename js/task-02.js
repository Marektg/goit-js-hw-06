const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
for (const item of ingredients) {
  const list = document.querySelector("#ingredients")
  const element = document.createElement("li");
  element.textContent = `${item}`;
  element.setAttribute('class', 'item'); 
  list.appendChild(element);
}