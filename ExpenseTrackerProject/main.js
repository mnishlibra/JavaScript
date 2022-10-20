function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.ChoosingCat.value;
    const phonenumber = event.target.phonenumber.value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj)
    axios.post('https://crudcrud.com/api/fb31dd3c7c344700bf1442ca5effec73/expense',obj)
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
    axios.get('https://crudcrud.com/api/fb31dd3c7c344700bf1442ca5effec73/expense')
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
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(name, email,phonenumber,userId){
    document.getElementById('email').value = name;
    document.getElementById('username').value = email;
    document.getElementById('phonenumber').value =phonenumber;
    deleteUser(userId)
 }

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/fb31dd3c7c344700bf1442ca5effec73/expense/${userId}`)
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