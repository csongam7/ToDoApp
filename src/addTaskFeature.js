export function addTask(){
    
    //task form
    const taskForm = document.createElement('form');


    //task name input field
    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.id = 'taskName'
    taskName.name = 'taskName';
    taskName.placeholder = 'Task name';
    taskForm.appendChild(taskName)
    
    //task description input field
    const taskDescription = document.createElement('input');
    taskDescription.type = 'text';
    taskDescription.id = 'taskDescription';
    taskDescription.name = 'taskDescription'
    taskDescription.placeholder = 'Task description (optional)';
    taskForm.appendChild(taskDescription)
    
    //priority input field
    const taskPriorityText = document.createElement('p');
    taskPriorityText.innerHTML = 'Select the priority of the task';

    const taskPriorityForm = document.createElement('form');
    
    const highPriority = document.createElement('input');
    highPriority.type = 'radio';
    highPriority.innerHTML = 'High';

    const middlePriority = document.createElement('input');
    middlePriority.type = 'radio';
    middlePriority.innerHTML = 'Mid'

    const lowPriority = document.createElement('input');
    lowPriority.type = 'radio';
    lowPriority.innerHTML = 'Low';
}