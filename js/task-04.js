let numberEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');
console.log(counterValue);



const decrementBtn = document.querySelector('#counter').firstElementChild;
// console.log(decrementBtn);

const incrementBtn = document.querySelector('#counter').lastElementChild;
// console.log(incrementBtn);

incrementBtn.addEventListener('click', event => {
    numberEl += 1;
    counterValue.innerText = numberEl;
});


decrementBtn.addEventListener('click', event => {
    numberEl -= 1;
    counterValue.innerText = numberEl;
});
// console.log(decrementBtn);