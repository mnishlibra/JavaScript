showExpensesOnScreen()

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
        alert(response.data.message);
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
        if(response.data.success){
            location.assign("file:///C:/Users/mnish/JavaScript/Tracking%20Application/Frontend/expense.html#");
            alert(response.data.message)
        }
        else{
            alert('Either email or password is incorrect')
        }
    })
    .catch((err) => {
        showStatusOnScreen(err.message)
    })
}

function Postexpense(event) {
    event.preventDefault();
    const amount = document.getElementById('money');
    const description = document.getElementById('description');
    const category = document.getElementById('category');
    const obj = {
        amount : amount.value,
        description : description.value,
        category : category.value
    }
    showExpensesOnScreen();
    console.log(obj);
    axios.post(`http://localhost:3000/user/expenses`,obj)
    .then((response) => {
        showExpensesOnScreen()
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}   

function showStatusOnScreen(message) {
    const para = document.createElement("p");
    para.innerText = message;
    document.body.appendChild(para);
}

function showExpensesOnScreen() {
    document.getElementById('money').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value ='';

    axios
    .get('http://localhost:3000/user/getexpenses')
    .then(response => {
        console.log(response)
        const parentNode = document.getElementById('listofExpenses');
        let data = ''
        for(let i=0; i<response.data.response.length; i++){
            let expenses = response.data.response[i]
            data += `<div id=${expenses.id}>
            <span id="editamount"> ${expenses.amount}</span>
            <span id="editdescription"> ${expenses.description}</span>
            <span id="editcategory"> ${expenses.category}</span>
            <button id=${expenses.id} class="editbtn">edit</button>
            <button id=${expenses.id} class="deletebtn">delete</button>
            </div>`
        }
        parentNode.innerHTML = data;
    })
    .catch(err => {
        console.log(err)
    })
}

const parentNode = document.getElementById('listofExpenses');
parentNode.addEventListener('click', (e) => {
    if(e.target.className == "deletebtn"){
        let id = e.target.id;
        try{
            axios.delete(`http://localhost:3000/deleteexpense/${id}`)
            .then((response) => {
                showExpensesOnScreen()
            })
            .catch(err => {
                console.log(err);
            })
            }
            catch{
                console.error('Delete is not Taking Place');
            }
    }
    if(e.target.className =='editbtn'){
    let amount = e.target.parentElement.querySelector('#editamount').innerHTML;
    let description = e.target.parentElement.querySelector('#editdescription').innerHTML;
    let category = e.target.parentElement.querySelector('#editcategory').innerHTML;
    document.getElementById('money').value = amount
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
    let editID = e.target.id;
    id = editID;  
    }
})