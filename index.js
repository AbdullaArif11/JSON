const url = 'https://jsonplaceholder.typicode.com/todos/1';

function loadData(){
  fetch(url)
    .then(response => response.json())
    .then(json => display1(json))
}
function display1(data){
  const ul = document.getElementById('container');
  const keys = Object.keys(data);
  for(const key of keys){
    const li = document.createElement('li');
    li.innerText = `${key}: ${data[key]}`;
    ul.appendChild(li);
  }
}


function loadData2(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => display2(data))
}
function display2(data) {
  const ul = document.getElementById('container');
  const li = document.createElement('li');
  li.innerText = `$ Loaded data for Id: ${data.id}`;
  ul.appendChild(li);
}

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display3(data))
}
function display3(data){
  const ul = document.getElementById('container');
  for(const user of data){
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}

function loadUsers2(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => display4(data))
}
function display4(data){
  const div = document.getElementById('container');
  const h2 = document.createElement('h2');
  h2.innerText = "Display All Post:";
  div.appendChild(h2);
  for(const key of data){
    const div1 = document.createElement('div');
    div1.classList.add('div-style')
    div1.innerHTML = `
      <h4>User: ${key.id}</h4>
      <h5>Name: ${key.name}</h5>
      <h5>Email: ${key.email}</h5>
      <h5>Phone: ${key.phone}</h5>
      <h5>Post: lorem20</h5>
    `;
    div.appendChild(div1);

    console.log(key);

  }
}