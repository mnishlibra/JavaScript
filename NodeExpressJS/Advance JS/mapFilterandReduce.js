const arr = [1,2,3,4,5,7,456];

// const output = arr.map((x) => x.toString(2));

// console.log(output)

// Filter 

// const output = arr.filter((x) =>  x <= 4);

// function isEven(x) {
// 	return x % 2 === 0 ; 
// }

// const output = arr.reduce(function(acc,curr){
// 	acc = acc + curr;
// 	return acc; 
// })

const output = arr.reduce(function(max,curr){
	if(curr>max){
		max = curr;
	}
	return max ;
},0)


console.log(output)