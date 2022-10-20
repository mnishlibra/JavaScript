//Can you write a function which takes the object and return average age.

    Obj = {
    student1: 24,
    student2: 26,
    student3: 30,
    student4: 34,
}

function findaverageage(studentObj){
    let keyArrays = Object.keys(studentObj) ; 
    let sumOfAges = 0 , counter = 0 ;
    keyArrays.forEach((elem) => {sumOfAges+=studentObj[elem] , counter++}) ; 
    let averageAge = sumOfAges/counter ; 
	return averageAge;
}
console.log(findaverageage(Obj));