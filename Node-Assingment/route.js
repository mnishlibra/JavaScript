// store it into a function 
const routeHandler = (req,res) => {
    const fs = require('fs');
    const url = req.url;
    const method = req.method;
if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Users</title><head>');  
    res.write(
      '<body><form action="/create-user" method="POST"><br><input type="text" name="create-user" placeholder="username"><button type="submit">Send</button></form></body>'
    );
    // res.write('<body>Hey There , Welcome to The Server</body>')
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Enter create-user</title><head>');
    res.write(
      '<body><form action="/create-user" method="POST"><label for="username">username</label?<input type="text" name="create-user"><button type="submit">Send</button></form></body>'
    );
    // res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const createduser = parsedBody.split('=')[1];
      fs.writeFile('users.txt', createduser, err => {
        console.log(createduser);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
}

//Storing the function into a module 

// One of the way to export routes using modules 
module.exports = routeHandler; 

// Storing it into a form of an Object 
// module.exports = {
//     handler : routeHandler
// }

// exports.handler = routeHandler ; 