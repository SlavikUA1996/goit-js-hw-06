

const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Будь ласка заповніть поля')
    }

    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}



// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     console.log(formData)

//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> name', name);
//         console.log('onFormSubmit -> value', value);


//         document.getElementById('.login-form'), reset();
//     })
// }

// const inputs = document.querySelectorAll('input');
// console.log(inputs)

// inputs.forEach(input => {
//     if (input.value.trim() === '') {
//         alert("error")
//     }
// });