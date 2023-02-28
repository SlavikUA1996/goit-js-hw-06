
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData)

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);


        document.getElementById('.login-form').reset();
    })
}

const inputs = document.querySelectorAll('input');
console.log(inputs)

inputs.forEach(input => {
    if (input.value.trim() === '') {
        alert("error")
    }
});