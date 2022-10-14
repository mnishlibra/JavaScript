//fetching the values from the input form
var form = document.getElementById("addingexpensebutton");
var expenseAmount = document.getElementById("expamt");
var discrip = document.getElementById("description");
var category = document.getElementById("catego");
//var li = document.createElement('li');
var li = document.getElementsByClassName("list-group-item");
//Adding event listener whenever the user clicks on the add expense button
form.addEventListener('click' , addItem)  ; 
//Add Item Function 
function addItem(e) {
    e.preventDefault(); 
    //Getting the input value 
    var expenseAmount = document.getElementById("expamt").value;
    var discrip = document.getElementById("description").value;
    var category = document.getElementById("catego").value;
    console.log(expenseAmount);
    console.log(discrip);
    console.log(category);
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(expenseAmount));
    li.appendChild(document.createTextNode(discrip)); 
}
//Remove Item 

//Edit Item
