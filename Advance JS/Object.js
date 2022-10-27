// const alpha = {
//     'a' : 1 ,
//     'b' : 2 ,
//     'z' : 26
// }
var sum = 0 ; 
// Object.keys(alpha).forEach(val => sum += val);
// console.log(sum);


const personAge = {
    'Manish' : 24, 
    'Avanish' : 26, 
    'Atul' : 30, 
    'Mamta' : 29, 
    'Father' : 53, 
    'Mother' : 51,
    'Shiva' : 32,
    'Ruuchi' : 27
}

// Calculate the medium age sum of age / number of people
var numberOfPeople = Object.keys(personAge).length;
// console.log(numberOfPeople);
let mediumAge = 0 ;  
Object.values(personAge).forEach(val => sum += val)

mediumAge = sum / numberOfPeople;
console.log(mediumAge);