// // const http = require('http');
// // const fs = require('fs');
// // const bodyParser = require('body-parser');
// // let message = '' ;
// // let cou = 0 ; 

// // fs.readFile('message.txt', 'utf-8' , (err,data)=>{
// //   if(err){
// //     console.log(err);
// //   }
// //   console.log(data);
// //   message=data;
// // })

// // const express = require('express');
// // const app = express();

// // app.use(bodyParser.urlencoded({ extended:false }))
// // app.get('/' , (req,res,next) => {

// //   fs.readFile('message.txt', 'utf-8' , (err,data)=>{
// //     if(err){
// //       console.log(err);
// //     }
// //     console.log(data);
// //     message=data;
// //     console.log(message,'India');
// // });
// //   let form = `<h1style="background:white;color:green; padding:20px;">${message}</h1style=><form action="/message" method="POST"> <input type="text" name="fruit"> <button type="submit">submit</button> </form> `
// //   res.send(form)
// // })
// // app.post('/message' , (req,res,next) => {
// //     fs.appendFile('message.txt',req.body.fruit);
// //     // fs.appendFile('message.txt', (err,data)=>{
// //     //     if(err){
// //     //       console.log(err);
// //     //     }
// //     //     console.log(data);
// //     //     message=data;
// //     // });
// //   res.redirect('/');
// // })
// // app.listen(3000);

// let express=require('express')
// let app=express()
// let bodyParser=require('body-parser')
// let fs=require('fs')


// app.use(bodyParser.urlencoded({ extended:true }))





// let txt=''
// fs.readFile('message.txt','utf-8',(err,data)=>{

//     console.log(data);
//     txt=data
// })


// app.use('/adddata',(req,res,next)=>{

    


//     let form=`<h1 style="background:black;color:green; padding:20px;">${txt}</h1><form action="/add" method="POST"> <input type="text" name="fruit"> <button type="submit">submit</button> </form> `

//     res.send(form)

    

// })

// let cou=0

// app.use('/add',(req,res,next)=>{

//     let r=req.body;


//    let strr=r.fruit

//     fs.appendFile('message.txt',`${cou++}) `+ strr+" ",(err)=>{

//         if (err)  throw err; 

         
  
//     })

//     res.status(302).redirect('/')


//     fs.readFile('message.txt','utf-8',(err,data)=>{

//         console.log(data);
//         txt=data
//     })
    
    

    

// })

// app.use('/',(req,res,next)=>{
//     let h1='<a href="http://localhost:2300/adddata">redirect</a><h1 style="background:red; color:white; padding:20px;     text-transform: uppercase;     text-align:center;    "> this is home page</h1>'

//     res.send(h1)
// })

// app.listen(2300,()=>{
//     console.log('listening at 2300 port');


// })

// // const server = http.createServer((req, res) => {
// //   const url = req.url;
// //   const method = req.method;

// //   res.write('<html>');
// //   res.write('<head><title>Enter Message</title><head>');
// //   res.write(
// //     '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
// //   );
// //   res.write('</html>');

// //   if (url === "/") {

// //     fs.readFileSync('message.txt', { encoding:'utf8'}, (err, value) => {
// //       if(err){  
// //         console.log(err);
// //       }
// //       // res.write("<html>");
// //       // res.write("<head><title>Enter Message</title><head>");
// //       // res.write(`<body>${value}</body>`)
// //       // res.write(
// //         // '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
// //       // );
// //       // res.write("</html>");
// //       console.log(value);
// //       return res.end();
// //       });
// //   }
// //   if (url === '/message' && method === 'POST') {
// //     const body = [];
// //     req.on('data', chunk => {
// //       body.push(chunk);
// //     });
// //     return req.on('end', () => {
// //       const parsedBody = Buffer.concat(body).toString();
// //       var message = parsedBody.split('=')[1];
// //       fs.writeFile('message.txt', message, err => {
// //         res.statusCode = 302;
// //         res.setHeader('Location', '/');
// //         res.write(`<body>${message}</body>`) 
// //         return res.end();
// //       });
// //     });
// //   }
// //   res.setHeader('Content-Type', 'text/html');
// //   res.write('<html>');
// //   res.write('<head><title>My First Page</title><head>');
// //   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
// //   res.write('</html>');
// //   res.end();
// // });

// // server.listen(3000);

const http=require('http')
const fs = require('fs')

const server=http.createServer((req, res)=>{
    if (req.url==`/home`){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><head><title>My First Page</title></head><body><h1>Welcome Home!</h1></body></html>`)
        res.write(`<html><head><title>Home Page</title></head><body><h1>Welcome Home!</h1></body></html>`)
        res.end()
    }
    if (req.url==`/about`){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><head><title>My First Page</title></head><body><h1>Welcome to About Us page!</h1></body></html>`)
        res.write(`<html><head><title>About US Page</title></head><body><h1>Welcome to About Us page!</h1></body></html>`)
        res.end()
    }
    if (req.url==`/`){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><head><title>My First Page</title></head><body><h1>Welcome to my Node Js Project!</h1></body></html>`)
        res.end() 
        fs.readFile('message.txt', 'utf-8', (err, data)=>{
            const message=data
            console.log(err)
            res.setHeader('Content-Type', 'text/html');
            res.write(`<html><head><title>My First Page</title></head><body><p>${message}</p><form action='/message' method='POST'><input type="text" name='message'></input><input type='submit' value="Send"></input></form></body></html>`)
            res.end()
        })
    }
    if (req.url==`/message` && req.method==='POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', ()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody)
            const message=parsedBody.split('=')[1]
            console.log(message)
            fs.writeFile('message.txt', message, err=>{
                res.statusCode=302;
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
})

server.listen(4000)