let inputEl = document.querySelector('#validation-input');
// 

let inputLength = inputEl.dataset.length;

const input = document.querySelector('.input');
inputEl.addEventListener('change', element => {
  const textEl = element.target.value;

    if (textEl.length === +inputLength)
    {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
  else
  {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
// console.log(inputEl)