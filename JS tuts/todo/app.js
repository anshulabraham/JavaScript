// Define UI vars 
const form = document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#tasks');


//Load All event Listners
loadEventListeners();

//Load all event Listners 
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
    //Remove Task Event 
    taskList.addEventListener('click',removeTask);
    // Clear Task event
    clearnBtn.addEventListener('click',clearTasks);
}

//Add tasks
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

    //Create Li element
    const li = document.createElement('li');
    //Add Class
    li.className = 'collection-item'; 
    //Create text node and append
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    
    //Add Class to above
    link.className = 'delete-item secondary-content';
    
    //Add icon HTML 
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    //Store in LS
    storeTaskInLocalStorage(taskInput.value);


    //Clear Input
    taskInput.value = '';

    e.preventDefault();
}

//Remove Task 
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You sure?')){
    e.target.parentElement.parentElement.remove();
        }
    }
}

// CLear Tasks 
function clearTasks() {
    //taskList.innerHTML = '';
    //Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Store Task
funtion storeTaskInLocalStorage(task){
    let task; 
    
}