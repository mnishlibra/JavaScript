const getColor = () => {
    // Hex Code 
    const randomNumber = Math.floor(Math.random() * 16777215) ; 
    const randomCode = "#"+ randomNumber.toString(16) ; 
    navigator.clipboard.writeText(randomCode);
    document.body.style.backgroundColor =  randomCode  ; 
    document.getElementById("color-code").innerHTML = randomCode;
}   
//Event call    
document.getElementById("btn").addEventListener('click',getColor)
//Innitial Call
getColor()  