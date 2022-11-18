showExpensesOnScreen();
let id = null;
const parentNode = document.getElementById('listofExpenses');
parentNode.addEventListener('click', (e) => {
    if(e.target.className == "deletebtn"){
        let id = e.target.id;
        try{
            axios.delete(`http://localhost:8000/delete-details/${id}`)
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
    console.log(category);
    document.getElementById('amount').value = amount
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
    console.log(amount,description,category);
    let editID = e.target.id;
    id = editID;  
    }
})
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
    console.log(id);
    axios.post(`http://localhost:8000/add/${id}`,obj)
    .then((response) => {
        id = null;
        showExpensesOnScreen()
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
    showExpensesOnScreen(obj);
}   

function showExpensesOnScreen() {
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value ='';

    axios
    .get('http://localhost:8000/get-details')
    .then(response => {
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