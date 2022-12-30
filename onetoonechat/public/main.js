function login(event) {
    event.preventDefault();
    const userName = document.getElementById('user').value;
    if(userName == 1 || userName == 2) {
        const obj = {
            senderId : userName
        }
        console.log(obj)
        localStorage.setItem('userId',userName)
        axios.post(`http://localhost:3000/user`,obj)
        .then((response) => {
            console.log(response.data)
            location.assign('file:///C:/Users/mnish/JavaScript/onetoonechat/public/index.html');
        })
        .catch(err => {
            console.log(err)
        })
    }
    else{
        alert("Enter Only 1 or 2");
    }
}

function chat(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    const userId = localStorage.getItem('userId')
    if(message) {
        console.log(message)
        const obj = {
            message  : message,
            userId : userId
        }
        console.log(obj)
        axios.post(`http://localhost:3000/message`,obj)
        .then((response) => {
            console.log(response.data)
            showMessagesOnScreen(message)
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    else{
        alert("Enter Something, DONT be a BORE !!")
    }
}


function showMessagesOnScreen(message) {
    var ul = document.getElementById("listOfmessages");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(message))
    ul.appendChild(li)
}

window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId');
    if(userId){
        axios.get(`http://localhost:3000/getMessages/${userId}`)
            .then((response) => {
                console.log(response.data.message)
                showGetMessage(response.data.message)
            })
            .catch(err => {
                console.log(err)
            }) 
        }
    else {
        alert("Enter Something, DONT be a BORE !!")
    }
})


function showGetMessage(message) {
    for(let i=0; i<message.length; i++){
        console.log(message[i].message)
        showMessagesOnScreen(message[i].message)
    }
}