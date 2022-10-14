const posts = [
  {title: 'Post One', body: 'This is post one' , createdTIme: new Date().getTime()},
  {title: 'Post Two', body: 'This is post two' , createdTIme: new Date().getTime()}
];

let intervalId = 0 ; 
function getPosts() {
clearInterval(intervalId);
intervalId = setInterval(() => {
  let output = '';
  for(let i=0; i<posts.length; i++){
    output += `<li>${posts[i].title} - last updated ${Math.trunc((new Date().getTime() - posts[i].createdTIme)/1000)} seconds ago</li>`; 
  }
  document.body.innerHTML = output;
}, 1000)
} 


 
function createPost(post, callback) {
  setTimeout(function() {
    posts.push({...post, createdTIme : new Date().getTime()});
    callback();
  },2000);
}

function create4Post(post, callback) {
  setTimeout(function() {
    posts.push({...post, createdTIme : new Date().getTime()});
    callback();
  },1000);
}


function deletePost(post) {
  return new Promise(function(resolve , reject){
    setInterval(function() {
      posts.pop(post);
      if(!posts.length === 0) {
        resolve();
      }
      else if(posts.length === 0){
        reject('Array is Empty Now') ;
      }
    }, 50000);
  });
}



// createPost({title: 'Post three', body: 'This is post three'}, getPosts);

// deletePost(posts).catch(function(err){
//   console.log(err);
// });

createPost({title: 'Post four', body: 'This is post four'}).then(() =>) {
  getPosts();
  deletePost(posts).then(() => {
    getPosts();
  }).catch(err => console.log(err));


// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//   setTimeout(resolve,6000,'Goodbye')
// });

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));

