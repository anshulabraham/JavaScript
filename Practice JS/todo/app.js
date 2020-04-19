//Define UI elements 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load All event listners
loadEventListeners();

//Event Listener
function loadEventListeners(){
    form.addEventListener('submit',addTask);
    //Remove Task events
    taskList.addEventListener('click',removeTasks);
    //Clear task events
    clearBtn.addEventListener('click',clearTasks)
}

//Add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add task please');
    }

// Dealing with Task List, Creating the li 
const li = document.createElement('li');
//Add Class name 
li.className = 'collection-item';
//create textNode and append to li
li.appendChild(document.createTextNode(taskInput.value));
//Creating the new link
const link = document.createElement('a');
//adding the class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//Appending to Li
li.appendChild(link);
//Adding li to ui
taskList.appendChild(li);
//Clear Input 
taskInput.value = '';


 e.preventDefault();

}

//Remove task
function removeTasks(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure ?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

//Clear Tasks
function clearTasks(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}