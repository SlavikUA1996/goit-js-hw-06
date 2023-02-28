const amountEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${amountEl.length}`);

const nameEl = document.querySelectorAll('#categories > li');
nameEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent};`);
    console.log(`Elements: ${element.lastElementChild.children.length};`);
});