const key = `542dcc5052ab4f1bae396617dbc1a2db`
const resourceName = `expenses`

function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.ChoosingCat.value;
    const phonenumber = event.target.phonenumber.value;
    const obj = {
        name,
        email,
        phonenumber
    }
    showNewUserOnScreen(obj)
    axios.post(`https://crudcrud.com/api/${key}/${resourceName}`,obj)
    .then((response) => {
        for(var i=0; i<response.data.length; i++){
            showNewUserOnScreen(response.data[i]);
        }
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get(`https://crudcrud.com/api/${key}/${resourceName}`)
    .then((response) => {
        console.log(response);
        for(var i=0 ; i<response.data.length; i++)
        {
            showNewUserOnScreen((response.data[i]))
        }
    })  
    .catch((err) => {
        console.log(err);
        console.log('Something Went Wrong')
    })
})

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email} - ${user.phonenumber}
                            <button onclick=deleteUser('${user._id}')> Delete User </button>
                            <button onclick=editUserDetails('${user.name}','${user.email}','${user.phonenumber}','${user._id}')>Edit User </button>
                            <button onClick="window.location.reload(true) </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

// function editUserDetails(name, email,phonenumber,userId){
//     document.getElementById('email').value = name;
//     document.getElementById('username').value = email;
//     document.getElementById('phonenumber').value =phonenumber;
//     deleteUser(userId)
//  }

async function editUserDetails(name, email,phonenumber,userId) {
    try {
        document.getElementById('email').value = name;
        document.getElementById('username').value = email;
        document.getElementById('phonenumber').value =phonenumber;
        deleteUser(userId)
    } catch (err) {
        err => console.log(err)
    }
}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/${key}/${resourceName}/${userId}`)
    .then((response) => {
        removeUserFromScreen(userId)
    })
    .catch ((err) => {
        err => console.log(err)
    })  
}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}