const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector("#ingredients");

const addLiEl = [];

ingredients.map(ingredient => {
  const item = document.createElement('li');
  // console.log(item)
  item.className = 'imem';
  item.textContent = ingredient;
  addLiEl.push(item)
})

list.append(...addLiEl);


// НЕ ВИЙШЛО
// console.log(list)
// const addLiEl = document.createElement("li");
// console.log(addLiEl);

// addLiEl.textContent = ingredients.reduce

// addLiEl.innerHTML = list;
// console.log(addLiEl);

// list.append(addLiEl);
// console.log


