import { Project } from "./projectManager";
import { createNewProject, deleteProject, openProject } from "./logic";

export function buildTheSideContainer(){
    const sideContainer = document.createElement('div');
    sideContainer.className = 'sideContainer';
    document.body.appendChild(sideContainer);

    //add project button
    const addProjectBtn = document.createElement('button');
    addProjectBtn.innerHTML = 'Add project';
    addProjectBtn.id = 'addProject';
    addProjectBtn.addEventListener('click', projectFormBuilder);
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

export function projectFormBuilder(){
    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';
    projectForm.addEventListener('submit', createNewProject)
        
    //project name input
    const projectNameInput = document.createElement('input');
    projectNameInput.type = 'text';
    projectNameInput.id = 'projectName';
    projectNameInput.name = 'projectName';
    projectNameInput.placeholder = 'Project Name';

    //project description input
    const projectDescriptionInput = document.createElement('input');
    projectDescriptionInput.type = 'text';
    projectDescriptionInput.id = 'projectDescription';
    projectDescriptionInput.name = 'projectDescription';
    projectDescriptionInput.placeholder = 'Project Description (optional)';

    //submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.value = "Submit";
    submitButton.innerHTML = 'Submit';

    //add task button
    const addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = 'Add Task';

    //projectFormBuildUp
    projectForm.appendChild(projectNameInput);
    projectForm.appendChild(projectDescriptionInput);
    projectForm.appendChild(addTaskButton);
    projectForm.appendChild(submitButton);

    //input container
    const inputContainer = document.createElement('div');
    inputContainer.className = 'inputContainer';
    inputContainer.appendChild(projectForm);
    document.body.appendChild(inputContainer);
}

export function displayProjectOnTheSide(projectName){
    const sideProject = document.createElement('div');
    const sideProjectName = document.createElement('div');
    sideProjectName.innerHTML = projectName.replace('project', '');
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

export function deleteProjectFromDOM(name){
    document.querySelector(`#${name}`).remove();
}

export function displayOpenedProject(project){
    const projectContainer = document.querySelector('.projectContainer');
    //prooject's name
    const projectName = document.createElement('div');
    projectName.innerHTML = project.name;
    projectContainer.appendChild(projectName);
    projectName.className = 'projectName';
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
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = task;
        if(task.isDone){
            doneTasksContainer.appendChild(taskElement);
        }
        else{
            tasksContainer.appendChild(taskElement);
        }
    }
}