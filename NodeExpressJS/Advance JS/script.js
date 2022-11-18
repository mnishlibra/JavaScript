// Fat Arrow Function 
// var getA = function(a) {
//     return a ;
// };

// var a = 4 ; 

// let square = a => a*a; 
// let cube = _ => { return a*a*a}; 
// let multiply = (a,b) => { return a*b}; 

// console.log(square(6));
// console.log(cube());
// console.log(multiply(4,8));

// var g = function() {
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val)
//     },1)
// };

// var xx = new g();

// var x = (...n) => {
//     console.log(n[0])
// };

// x(1,2,3);

class Student {
    static count = 0 ; 
    constructor(name,age,phoneNumber,boardMarks){
        this.name = name ,
        this.age = age ,
        this.phoneNumber = phoneNumber ,
        this.boardMarks = boardMarks ,
        Student.newStudentCreated();
    }
    static newStudentCreated() {
        return(Student.count++) ; 
    }
    egligible() {
        const egligibleOrNot = (this.boardMarks >= 40) ? console.log(this.name + ' is egligible') :  console.log(this.name + ' is Not egligible');
        return egligibleOrNot ; 
    }
    placementegligible(minAge) {
        return (minMarks) => {   
            if(this.boardMarks > minMarks && this.age > minAge){
                console.log(this.name + ' is egligible for placements')
            }
            else{
                console.log(this.name + ' is NOT egligible for placements')
            }
        }
    }
}
let Student1 = new Student("Manish" , 24 , 9889081289 , 98 ) ; 
let Student2 = new Student("Avanish" , 27 , 9990496066 , 35 ) ; 
let Student3 = new Student("Atul" , 30 , 9990496066 , 85 ) ; 
let Student4 = new Student("Saurabh" , 22 , 885812456 , 24 ) ; 
let Student5 = new Student("Kunal" , 23 , 9889043242 , 99 ) ;
console.log(Student.newStudentCreated());
Student1.placementegligible(18)(40);
Student2.placementegligible(18)(40);
Student3.placementegligible(18)(40);
Student4.placementegligible(18)(40);
Student5.placementegligible(18)(40);


//Major Difference between far arrow and normal function 
//Use of this Keyword 
//Using new Keyword 
//No diblicate named parameters 
let x = ()=> {
    console.log(arguments);
};
new x(1,2,3);