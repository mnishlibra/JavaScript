// // // // console.log('hello world');

// // // // const fs = require('fs');
// // // // fs.writeFileSync('hello.txt','hello from Node.js');

// // // // const person = {

// // // // 	'name' : yash ,

// // // // 	'name' : Vaibhow,

// // // // 	greet() {

// // // // 	console.log('Hi, I am' + this.name) ;

// // // // }
// // // // }

// // // // person.greet();

// // // const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'] 
// // // // console.log(array.map(arr => {
// // // // 	if(arr.length > 2){
// // // // 		return arr;
// // // // 	} 
// // // // 	if(arr == ' '){
// // // // 		return "empty string" ;
// // // // 	}
// // // // }))

// // // const coppiedArray = array.slice();
// // // console.log(coppiedArray);
// // // // ['apple', 'oranges' , 'empty string', 'mango',  'empty string', 'lemon]

// // // Spread operator
// // // const numbersOne = [1, 2, 3];
// // // const numbersTwo = [4, 5, 6];
// // // const numbersCombined = [...numbersOne, ...numbersTwo];
// // // console.log(numbersCombined);

// // // Rest operator 
// // // function sum(...theArgs) {
// // // 	let total = 0;
// // // 	for (const arg of theArgs) {
// // // 	  total += arg;
// // // 	}
// // // 	return total;
// // //   }
  
// // //   console.log(sum(1, 2, 3,6,7,45,8,45,567,456));
// // //   // expected output: 6
  
// // //   console.log(sum(1, 2, 3, 4));
// // //   // expected output: 10

// // const obj1 = {'key1': 1}

// // const obj2 = { ...obj1}

// // if(obj2 === obj1){

// // console.log('same objects')

// // }

// // else{

// // console.log('different objects')

// // }

// // // const obj1 = {'key1': 1 , 'key2' : 2}

// // // const obj2 = { ...obj1, key1: 1000}



// // console.log(obj1)

// // console.log(obj2)

// // const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// // 	const { key1, key3}  = { ...obj1}

// // 	console.log(key1, key3) // 1 1000

// // const arr1 = ['value1', 'value2']

// // 	const [ val1, val2 ] = arr1



// // 	console.log(val1)

// // 	console.log(val2)

// // const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// // let { key1, key3}  = obj1



// // key1 = 20;

// // key3 = 123

// // console.log(obj1.key1, obj1.key3)


// // console.log('a');

// // console.log('b');

// // setTimeOut(() => console.log('c'), 3000)

// // setTimeOut(() => console.log('d'), 0)

// // console.log('e');

// // let myPromise = new Promise(function(myResolve, myReject){
// // 	// console.log('a');
// // 	// console.log('b');

// // 	myResolve();
// // 	myReject();
// // })

// // function myResolve() {
// // 	console.log('a');
// // 	console.log('b');
// // 	setTimeOut(() => console.log('c'), 3000)
// // 	setTimeOut(() => console.log('d'), 0)

// // 	console.log('e');
// // }



// // async function myDisplay() {
// // 	let myPromise = new Promise(function(resolve) {
// // 	  setTimeout(function() {resolve("I love You !!");}, 3000);
// // 	});
// //   }
  
// //   myDisplay();


// // let myPromise = new Promise(function(myResolve, myReject) {
// // 	// "Producing Code" (May take some time)
// // 		console.log('a');
// // 		console.log('b');
// // 	  myResolve(); // when successful
// // 	  myReject();  // when error
// // 	});
	
// // 	// "Consuming Code" (Must wait for a fulfilled Promise)
// // 	myPromise.then(
// // 	  function(value) { 
// // 			setTimeOut(() => console.log('c'), 3000)
// // 			setTimeOut(() => console.log('d'), 0)
		
// // 			console.log('e')},
// // 	  function(error) {console.log(error)}
// // 	);


// const http = require('http');
// const fs = require('fs');
// const { buffer } = require('stream/consumers');

// const server = http.createServer((req,res) => {
// 	// console.log(req.url);
// 	// console.log(req.headers);
// 	// res.write('<html>');
// 	// res.write("<body><h1>hello from my Node JS server</h1></body>")
// 	// res.write('</html>');
// 	// res.end();
// 	// if(req.url === '/home') {
// 	// 	res.write('<html>');
// 	// 	res.write("<body><h1>Welcome home</h1></body>")
// 	// 	res.write('</html>');
// 	// 	res.end();
// 	// }
// 	// if(req.url === '/about') {
// 	// 	res.write('<html>');
// 	// 	res.write("<body><h1> Welcome to About Us page</h1></body>")
// 	// 	res.write('</html>');
// 	// 	res.end();
// 	// }
// 	// if(req.url === '/node') {
// 	// 	res.write('<html>');
// 	// 	res.write("<body><h1>Welcome to my Node Js project</h1></body>")
// 	// 	res.write('</html>');
// 	// 	res.end();
// 	// }

// 	const url = req.url;
// 	const method = req.method;
// 	if (url == '/') {
// 		res.write('<html>');
// 		res.write('<head><title>Enter Message</title></head>')
	const showScreen = 	fs.readFile('message.txt', 'utf8', (err, message) => {
			if (err) {
			  console.error(err);
			  return;
			}
			res.write(`<body>${message}</body>`)
			`<html><body>${message}</body></html>`
			console.log(message);
		  });		
// // 		res.write(
// 			'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
// 		);
// 		// res.write(`<body>${message}</body>`)
// 		res.write('</html>');
// 		return res.end();	
// 	} 
// 	if (url === '/message' && method === 'POST') {
// 		const body = [];
// 		req.on('data', chunk => {
// 			console.log(chunk);
// 			body.push(chunk);
// 		});
// 		return req.on('end', () => {
// 			const parsedBody = Buffer.concat(body).toString();
// 			const message = parsedBody.split('=')[1];
// 			res.write(`<body>${message}</body>`)
// 			fs.writeFile('messagge.txt', message, err => {
// 			  res.statusCode = 302;
// 			  res.setHeader('Location', '/');
// 			  return res.end();
// 			});
// 		  });;
// 	}
// 	res.setHeader('Content-Type', 'text/html');
// 	res.write('<html>');
// 	res.write('<head><title>My First Page</title><head>');
// 	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
// 	res.write('</html>');
// 	res.end();
// 	// process.exit();	
// });

// server.listen(5000);