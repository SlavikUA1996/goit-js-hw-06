// let inputEl = document.querySelector('#validation-input');
// //

// let inputLength = inputEl.dataset.length;

// // console.log(inputLength)

// const input = document.querySelector('.input');

// inputEl.addEventListener('click', event => {
//   const textEl = event.target.value;
// // console.log('click', event)
//     if (textEl.length === +inputLength)
//     {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   }
//   else
//   {
//     inputEl.classList.remove('valid');
//       inputEl.classList.add('invalid');
      
//       // console.log(inputEl.classList)
//   }
// });
// console.log(inputEl)

// const textInput = document.querySelector('#validation-input');

// console.log(textInput.getAttribute('data-length'));

// textInput.addEventListener('blur', event => {
// 	if (event.target.value.length === textInput.getAttribute('data-length')) {
// 		textInput.classList.add('valid')
		
//     if (textInput.classList.contains('invalid')) {
// 			textInput.classList.remove('invalid')
// 		}
//   }
//   else {
		
//     if (textInput.classList.contains('valid')) {
// 			textInput.classList.remove('valid')
// 		}
		
//     textInput.classList.add('invalid')
// 	}
// })

const textInput = document.querySelector("input");

const user = (event) => {
    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
    console.log(event.currentTarget);
};
textInput.addEventListener("blur", user);