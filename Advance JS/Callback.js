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
    },3000);
  }

  
  let intervalId1 = 0 ; 
  function lastEditedInSecondsAgo() {
    clearInterval(intervalId1);
    intervalId1 = setInterval(() => {
      let output1 = '';
      
    }, 1000)
  } 

  createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
  createPost({title: 'Post five', body: 'This is post five'}, getPosts);
  create4Post({title: 'Post Four', body: 'This is post four'}, getPosts)