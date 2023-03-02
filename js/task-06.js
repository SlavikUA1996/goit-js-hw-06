let inputEl = document.querySelector('#validation-input');
// 

let inputLength = inputEl.dataset.length;

// console.log(inputLength)

const input = document.querySelector('.input');

inputEl.addEventListener('click', event => {
  const textEl = event.target.value;
// console.log('click', event)
    if (textEl.length === +inputLength)
    {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
  else
  {
    inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
      
      // console.log(inputEl.classList)
  }
});
// console.log(inputEl)