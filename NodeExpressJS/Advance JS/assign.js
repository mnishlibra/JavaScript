var obj = {n:10};



var thisIsfunction = function(x) {

        return this.n + x ; 

    }



var result = thisIsfunction.call(obj, 4) ;

console.log(result); 



call adds the function to the object 



Lets try and work with apply 

only difference between call and apply is that in apply you can give valus in the form of an array 



var obj = {n:10};



var thisIsfunction = function(x) {

        return this.n + x ; 

    }

var arr = [6] ; 

var result = thisIsfunction.apply(obj, arr) ;

console.log(result); 



var binding = thisIsfunction.bind(obj);

console.log(binding(12));



var Student = {

    age:20,



}



var printingMachine = function printsAge(){

    return this.age;

}



var bindingMachine = printingMachine.bind(Student);

console.log(bindingMachine())



console.log(Student.printsAge());



let multiply = function (x , y) {

    console.log(x * y) ;

}



let multiply = function (x) {

    return function (y) {

        console.log(x * y);

    }

}



let multiplyByTwo = multiply(2);

multiplyByTwo(3);



let multiplyByThree = multiply(3);

multiplyByTwo(10);



