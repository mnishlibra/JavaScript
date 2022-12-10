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
    
    axios.post(`http://localhost:3000/user`,obj)
    .then((response) => {
        console.log(response.data.success)
    })
    .catch((err) => {
        console.log(err)
    })
}