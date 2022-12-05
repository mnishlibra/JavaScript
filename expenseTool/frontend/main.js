function postUserDetails(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const obj = {
        name : name.value,
        email : email.value,
        password : password.value
    }
    axios.post('https://localhost',obj)
    .then((resonse) => {
        console.log('obj')
    })
    .catch((err) => {
        console.log(err)
    })
}