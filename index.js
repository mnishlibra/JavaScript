// var headTitle = document.getElementById("header-title");
// headTitle.style.borderBottom = 'solid 3px #000' ;
// var seletingAdd = document.getElementsByClassName('title');
// console.log(seletingAdd[0]); 
// seletingAdd[0].textContent = "Changing text Content" ;
// seletingAdd[0].style.fontWeight = 'bold'  ;
// seletingAdd[0].style.color = 'green' ; 

// 3rd Element in the list make the background green
// Get element by tag Name and store in a variable 

var li = document.getElementsByTagName('li');
li[2].style.backgroundColor = 'green' ; 


// Make all the elements in the list have bold color font 
// For selecint all the element from 1 to end we have to use for loop 

for (let i = 0 ; i < li.length ; i++) {
    li[i].style.fontWeight = 'bold' ; 
}