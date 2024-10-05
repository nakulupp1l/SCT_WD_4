// Select the elements
const taskInput = document.getElementById('new-task');
const dateTimeInput = document.getElementById('task-date-time');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener to Add Task button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;
    const taskDateTime = dateTimeInput.value;
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new task element
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    // Task content
    const taskContent = document.createElement('div');
    taskContent.textContent = `${taskText} - ${taskDateTime}`;

    // Task controls
    const taskControls = document.createElement('div');
    taskControls.classList.add('task-controls');

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
});

// Edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener('click', () => {
    const newTaskText = prompt('Edit task:', taskText);
    const newDateTime = prompt('Edit date and time:', taskDateTime);
    if (newTaskText !== null && newDateTime !== null) {
        taskContent.textContent = `${newTaskText} - ${newDateTime}`;
    }
});

// Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
});

    // Append controls to the task item
    taskControls.appendChild(completeBtn);
    taskControls.appendChild(editBtn);
    taskControls.appendChild(deleteBtn);
    
    // Append content and controls to the task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskControls);

    // Append task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input fields
    taskInput.value = '';
    dateTimeInput.value = '';
}
