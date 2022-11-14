const listGroup = document.querySelector('.list-group');
// get all button
const getPost = document.querySelector('.get-button');
const addPost = document.querySelector('.post-button');
const editPost = document.querySelector('.put-button');
const deletePost = document.querySelector('.delete-button');

const url = 'https://jsonplaceholder.typicode.com/posts' ;
let output = '';

const getResponse = response => response.json();
const processJSON = json => {
    console.log(json);
    output = `
    <li class="list-group-item">${json.title}</li>
    <li class="list-group-item">${json.body}</li>
    `
    listGroup.innerHTML = output;
}

const writeServer = (action, data) => ({
    method: action,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  });

//GET 
getPost.addEventListener('click', () => {
    fetch(`${url}/1`)
        .then(getResponse)
        .then(processJSON)
    });

//POST 
addPost.addEventListener('click', () => {
    const newPost = {
      userId: 1,
      title: 'post 101',
      body: 'This is post 101'
    }
  
    fetch(url, writeServer('POST', newPost))
      .then(getResponse)
      .then(processJSON);
  });

//PUT
editPost.addEventListener('click', () => {
    const updatePost = {
        userid: 2,
        title: 'This is Post 2',
        body: 'This is post two'
    }
    fetch(`${url}/1`, writeServer('PUT',updatePost))
    .then(getResponse)
    .then(processJSON)
})


//DELETE 
deletePost.addEventListener('click', () => {
    fetch(`${url}/1`, {method:'DELETE'})
    .then(getResponse)
    .then(processJSON)
})