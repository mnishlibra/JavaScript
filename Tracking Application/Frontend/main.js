function signup(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const obj = {
        name : name.value ,
        email : email.value ,
        password : password.value,
    }
    
    axios.post(`http://localhost:3000/user/signup`,obj)
    .then((response) => {
        console.log(response.data.message)
    })
    .catch((err) => {
        console.log(err)
    })
}


function login(event) {
    event.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const obj = {
        email : email.value ,
        password : password.value,
    }
    axios.post(`http://localhost:3000/user/login`,obj)
    .then((response) => {
        console.log(response.data.message)
    })
    .catch((err) => {
        console.log(err)
    })
}