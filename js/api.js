/* function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

} */

/* function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response =>response.json())
    .then(data => console.log(data))
}


function lodaPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadUsers (){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayUsers(data))
}

function displayUsers (data){
  const ul = document.getElementById('users');
    for( const user of data){
      const li = document.createElement('li')
      li.innerText = `name: ${user.name} , email: ${user.email}`
      ul.appendChild(li);
    }
} */


const searchFood = () => {
  const searchFild = document.getElementById('search-field');
  const searchText = searchFild.value
 
  console.log(searchText)
  searchFild.value = ' ';}