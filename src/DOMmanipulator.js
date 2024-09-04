import { Project } from "./projectManager";
import { createNewProject, deleteProject, openProject, editProjectNameAndDescription, callTheProjectFormBuilderToEditProject, createNewTask, changeIsDoneOnTask, updateProject } from "./logic";
import { format, compareAsc } from 'date-fns';

export function buildTheSideContainer(){
    const sideContainer = document.createElement('div');
    sideContainer.className = 'sideContainer';
    document.body.appendChild(sideContainer);

    //add project button
    const addProjectBtn = document.createElement('button');
    addProjectBtn.innerHTML = 'Add project';
    addProjectBtn.id = 'addProject';
    addProjectBtn.addEventListener('click', function(){projectFormBuilder();});
    addProjectBtn.className = 'addProjectButton';
    sideContainer.appendChild(addProjectBtn);

    //projectsOnTheSideContainer
    const projectOnTheSideContainer = document.createElement('div');
    projectOnTheSideContainer.className = 'projectsOnTheSideContainer';
    sideContainer.appendChild(projectOnTheSideContainer);
}

export function buildTheProjectContainer(){
    const projectContainer = document.createElement('div');
    projectContainer.className = 'projectContainer';
    document.body.appendChild(projectContainer);
}

export function projectFormBuilder(project=null){
    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';
    
    if(!project){projectForm.addEventListener('submit', createNewProject)}
    else{projectForm.addEventListener('submit', function(){editProjectNameAndDescription(project)})}   
    //project name input
    const projectNameInput = document.createElement('input');
    projectNameInput.type = 'text';
    projectNameInput.id = 'projectName';
    projectNameInput.name = 'projectName';
    if(!project){
        projectNameInput.placeholder = 'Project Name';
    }
    else{
        projectNameInput.value = project.name;
    }
    //project description input
    const projectDescriptionInput = document.createElement('input');
    projectDescriptionInput.type = 'text';
    projectDescriptionInput.id = 'projectDescription';
    projectDescriptionInput.name = 'projectDescription';
    if(!project || project.description == ''){
        projectDescriptionInput.placeholder = 'Project Description (optional)';
    }
    else{
        projectDescriptionInput.value = project.description;
    }

    //submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.value = "Submit";
    submitButton.innerHTML = 'Submit';
    //projectFormBuildUp
    projectForm.appendChild(projectNameInput);
    projectForm.appendChild(projectDescriptionInput);
    projectForm.appendChild(submitButton);
    //input container
    const inputContainer = document.createElement('div');
    inputContainer.className = 'inputContainer';
    inputContainer.appendChild(projectForm);
    document.body.appendChild(inputContainer);
}

export function clearSideContainer(){
    document.querySelector('.projectsOnTheSideContainer').innerHTML = '';
}

export function displayProjectOnTheSide(projectName){
    const sideProject = document.createElement('div');
    const sideProjectName = document.createElement('div');
    sideProjectName.innerHTML = projectName;
    sideProjectName.addEventListener('click', function(){
        openProject(projectName);
    })
    sideProject.appendChild(sideProjectName);
    sideProject.className = 'sideProject';
    sideProject.id = projectName;
    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.innerHTML = 'X';
    //just styling for now
    projectDeleteButton.style.width = '30px';
    projectDeleteButton.style.height = '30px';
    projectDeleteButton.className = 'projectDeleteButton';
    projectDeleteButton.addEventListener('click', function(){deleteProject(projectName)});
    sideProject.appendChild(projectDeleteButton);
    document.querySelector('.projectsOnTheSideContainer').appendChild(sideProject);
}

export function displayOpenedProject(project){
    Object.setPrototypeOf(project, Project.prototype);
    const projectContainer = document.querySelector('.projectContainer');
    //project's name
    const projectName = document.createElement('div');
    projectName.innerHTML = project.name;
    projectContainer.appendChild(projectName);
    projectName.className = 'projectName';
    const projectEditButton = document.createElement('button');
    projectEditButton.className = 'editButton';
    projectEditButton.id = 'projectEditButton';
    projectEditButton.innerHTML = 'Edit';
    projectEditButton.addEventListener('click', function(){callTheProjectFormBuilderToEditProject(project)});
    projectContainer.appendChild(projectEditButton);
    //project's description
    const projectDescription = document.createElement('div');
    projectDescription.innerHTML = project.description;
    projectContainer.appendChild(projectDescription);
    projectDescription.className = 'projectDescription';
    //tasks container
    const tasksContainer = document.createElement('div');
    tasksContainer.className = 'tasksContainer';
    projectContainer.appendChild(tasksContainer);
    //done tasks
    const doneTasksContainer = document.createElement('div');
    doneTasksContainer.className = 'doneTasks';
    projectContainer.appendChild(doneTasksContainer);
    //tasks
    for (let task of project.tasks){
        //task
        const taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';
        //task name
        const taskName = document.createElement('p');
        taskName.className = 'taskName';
        taskName.innerHTML = task.name;
        taskContainer.appendChild(taskName);
        //taskPriority
        const taskPriority = document.createElement('p');
        taskPriority.className = 'taskPriority';
        taskPriority.innerHTML = task.priority;
        taskContainer.appendChild(taskPriority);
        //dueDate
        const dueDate = document.createElement('p');
        dueDate.className = 'dueDate';
        dueDate.innerHTML = task.dueDate;
        taskContainer.appendChild(dueDate);
        //isDone
        const ticker = document.createElement('div');
        ticker.className = 'ticker';
        if(task.isDone == true){
            ticker.innerHTML = 'I'
        }
        else{ticker.innerHTML = "N";}
        ticker.addEventListener('click', function(){ticker.innerHTML == 'N' ? ticker.innerHTML = 'I' : ticker.innerHTML = 'N'});
        ticker.addEventListener('click', function(){changeIsDoneOnTask(project, task)})
        taskContainer.appendChild(ticker);
        if(task.isDone){
            doneTasksContainer.appendChild(taskContainer);
        }
        else{
            tasksContainer.appendChild(taskContainer);
        }
        
    }
    //add task button
    const addTaskButton = document.createElement('button');
    addTaskButton.className = 'addTaskButton';
    addTaskButton.addEventListener('click', function(){createTaskForm(project)})
    addTaskButton.innerHTML = '+';
    projectContainer.appendChild(addTaskButton);

    function createTaskForm(project){

        //task form
        const taskForm = document.createElement('form');
        taskForm.id = 'taskForm';

        //task name input field
        const taskName = document.createElement('input');
        taskName.type = 'text';
        taskName.id = 'taskName'
        taskName.name = 'taskName';
        taskName.placeholder = 'Task name';
        taskForm.appendChild(taskName)
        
        projectContainer.appendChild(taskForm);
        
        //priorities dropdown menu
        const prioritiesContainer = document.createElement('select');
        prioritiesContainer.name = 'taskPriority';
        prioritiesContainer.id = 'taskPriority';

        const highPriorityOption = document.createElement('option');
        highPriorityOption.innerHTML = 'High';
        highPriorityOption.value = 'high';
        prioritiesContainer.appendChild(highPriorityOption);

        const mediumPrioritiesOption = document.createElement('option');
        mediumPrioritiesOption.innerHTML = 'Medium';
        mediumPrioritiesOption.value = 'medium';
        prioritiesContainer.appendChild(mediumPrioritiesOption);

        const lowPrioritiesOption = document.createElement('option');
        lowPrioritiesOption.innerHTML = 'Low';
        lowPrioritiesOption.value = 'low';
        prioritiesContainer.appendChild(lowPrioritiesOption);
    
        taskForm.appendChild(prioritiesContainer);

        //due date input field
        const dueDate = document.createElement('input');
        dueDate.type = "date";
        dueDate.name = 'taskDueDate';
        dueDate.id = 'taskDueDate';
        taskForm.appendChild(dueDate);

        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        taskForm.appendChild(submitButton);

        taskForm.addEventListener('submit', function(){createNewTask(project)}
        )
    }
}

export function clearProjectDisplay(){
    document.querySelector('.projectContainer').innerHTML = '';
}