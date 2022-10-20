// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    var Users = {
        name : nameInput.value,
        email : emailInput.value    
    }
<<<<<<< HEAD
      
          
      window.localStorage.setItem("Users ", JSON.stringify(Users));
         
=======

    localStorage.setItem("User Details:  " + " " + emailInput.value, JSON.stringify(Users));

>>>>>>> a651e15b70f28fbfa5773e10e6b244858cf416db
    // localStorage.setItem( nameInput.value , emailInput.value ) ; }

    // Clear fields
    nameInput.value = '' ;
    emailInput.value = '';
<<<<<<< HEAD
  }
  }
=======

  }
  }
  function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';
    // console.log(localStorage.getItem(user.emailId))
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }
>>>>>>> a651e15b70f28fbfa5773e10e6b244858cf416db
