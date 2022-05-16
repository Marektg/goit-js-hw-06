const categories = document.querySelector("#categories").children.length;

console.log(`Number of categories: ${categories}`);


const items = document.querySelectorAll(".item");

for (const item of items) {
    console.log(`Category: ${item.firstElementChild.innerHTML
        } \nElements: ${item.lastElementChild.children.length}\n`);
}