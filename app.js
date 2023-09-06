console.log('app.js');

function loadData2(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => display(data))
}

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data))
}

function display(data){
  console.log(data);
}