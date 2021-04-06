//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

//Functions

function addTodo(event) {

    event.preventDefault();
    

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo);


    //Chech mark
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i> '
    completedButton.classList.add('complete-btn')

    todoDiv.appendChild(completedButton);

    //Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i> '
    deleteButton.classList.add('delete-btn')

    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);


    todoInput.value = '';

}

function deleteCheck(e) {

    e.preventDefault();

    const item = e.target;

    if(item.classList[0] === 'delete-btn') {
        item.parentElement.classList.add('fall')
        item.parentElement.addEventListener('transitionend', function() {
            item.parentElement.remove()
        })
    }

    if(item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('completed')
    }
}