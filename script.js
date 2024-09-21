function submit_task() {
    // Get the value of the input field
    var task = document.getElementById('todo-txt').value.trim();
    
    // Check if the input is not empty
    

    // Create a new div element for the task
    var taskItem = document.createElement('div');
    taskItem.className = 'task-item ' + getTaskClass(task); // Apply specific class

    // Create a span for the task text
    var taskText = document.createElement('span');
    taskText.innerText = task;
  

var editbutton = document.createElement('button');
editbutton.innerText = 'edit';
editbutton.className = 'edit-btn';
editbutton.onclick = function (){
    edit_task(taskItem);
}

 var deletebutton = document.createElement('button');
 deletebutton.innerText = 'delete';
 deletebutton.className = 'delete-btn';
 deletebutton.onclick = function(){
    delete_task(taskItem);
 }
   

    // Append the text, edit button, and delete button to the task div
    taskItem.appendChild(taskText);
    taskItem.appendChild(editbutton);
    taskItem.appendChild(deletebutton);
    
    // Add the new task to the task list
    document.getElementById('task-list1').appendChild(taskItem);
     
    document.getElementById('todo-txt').value ='';
}
// Function to delete a task 
function delete_task(taskItem) {     
    taskItem.remove();// Removes the task item from the list }  
}
    function edit_task(taskText) {    
        var newTask = prompt('edit your task:-',taskText.innerText);
        if(newTask !==null && newTask.trim() !==''){
        taskText.innerText = newTask.trim();
        }


               }

// Function to categorize the task based on its content
function getTaskClass(task) {
    if (task.toLowerCase().includes('urgent')) {
        return 'task-urgent'; // Urgent task
    } else if (task.toLowerCase().includes('completed')) {
        return 'task-completed'; // Completed task
    } else {
        return 'task-normal'; // Normal task
    }
   
}
 

