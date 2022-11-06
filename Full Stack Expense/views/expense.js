function postExpense(event) {
    event.preventDefault();
    const amount = document.getElementById('amount');
    const description = document.getElementById('description');
    const category = document.getElementById('category');
    const obj = {
        amount : amount.value,
        description : description.value,
        category : category.value
    }
    axios.post('http://localhost:8000/details',obj)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
    showExpensesOnScreen(obj);
}   

window.addEventListener('DOMContentLoaded',(event)=>{
    event.preventDefault();
    axios
    .get('http://localhost:8000/get-details')
    .then(response => {
        console.log(response.data.response)
        for(let i=0; i<response.data.response.length; i++){
            showExpensesOnScreen(response.data.response[i]);
        }
    })
    .catch(err => {
        console.log(err)
    })
})

function showExpensesOnScreen(expenses) {
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value ='';

    const parentNode = document.getElementById('listofExpenses');
    const childHTML = `<li id=${expenses.id}> ${expenses.amount} - ${expenses.description} - ${expenses.category}
                            <button onclick=deleteUser('${expenses.id}')>Delete</button>
                            <button onclick=editDetails('${expenses.amount}','${expenses.description}','${expenses.category}','${expenses.id}')>Edit</button>
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteUser(id){
    removeUserFromScreen(id);
    try{
    axios.delete(`http://localhost:8000/delete-details/${id}`)
    .then((response) => {
        removeUserFromScreen(id);
    })
    .catch(err => {
        console.log(err);
    })
    }
    catch{
        console.error('Delete is not Taking Place');
    }
}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('listofExpenses');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}

function editDetails(amt,des,cat,id) {
    try
    {
        deleteUser(id);
        document.getElementById('amount').value = amt;
        document.getElementById('description').value = des;
        document.getElementById('cat').value = cat;
    }
    catch
    {
        err => console.log(err);
    }
}