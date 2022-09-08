const btn = document.querySelector('.btn');
const form = document.getElementById('my-form');
btn.addEventListener('click', (e) => {
    btn.style.background = 'red';
});

btn.addEventListener('mouseover', (event) => {
    event.preventDefault();
    btn.style.background = 'blue';
});
btn.addEventListener('mouseout', (event) => {
    btn.style.background = 'green';
});



const myForm1 = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm1.addEventListener('submit',onSubmit);

function onSubmit (e) {
    e.preventDefault();
    console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
    alert('Please Enter fields');
    } else {
    alert('Success');
    }
}