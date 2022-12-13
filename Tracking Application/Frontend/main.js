function getExpenses() {
    const token = localStorage.getItem('token');
    axios
    .get('http://localhost:3000/user/getexpenses', { headers : {"Authorization" : token}})
    .then( response => {
        showExpensesOnScreen(response);
    })
    .catch(err => {
        console.log(err);
    })
}

getExpenses();

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
        alert(err.response.data.message);
        console.log(err);
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
        console.log(response)
        if(response.data.success){
            alert(response.data.message)
            localStorage.setItem('token',response.data.token )
            location.assign("file:///C:/Users/mnish/JavaScript/Tracking%20Application/Frontend/expense.html#");
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
    const token = localStorage.getItem('token');
    const obj = {
        amount : amount.value,
        description : description.value,
        category : category.value
    }
    axios.post(`http://localhost:3000/user/expenses`, obj , {headers : {"Authorization" : token}})
    .then((response) => {
        getExpenses();
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

function showExpensesOnScreen(response) 
{        
        const parentNode = document.getElementById('listofExpenses');
        let data = '' ;
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
}

const parentNode = document.getElementById('listofExpenses');
parentNode.addEventListener('click', (e) => {
    if(e.target.className == "deletebtn"){
        let id = e.target.id;
        const token = localStorage.getItem('token');
        try{
            axios.delete(`http://localhost:3000/deleteexpense/${id}`, { headers : {"Authorization" : token}})
            .then((response) => {
                getExpenses();
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