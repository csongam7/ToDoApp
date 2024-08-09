
import { Project } from "./projectManager"

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
    
    const toDoActionButtonContainer = document.createElement('div');
    toDoActionButtonContainer.className = 'toDoActionButtonContainer';
    sideContainer.appendChild(toDoActionButtonContainer);
    toDoActionButtonContainer.appendChild(projectOnTheSideContainer);
}

export function buildTheProjectContainer(){
    const toDoContainer = document.createElement('div');
    toDoContainer.className = 'toDoContainer';
    document.body.appendChild(toDoContainer);
}

export function displayAllProjects(){
    Object.keys(localStorage).forEach(function (key) {
        if(key.includes('project')){
            displayProjectOnTheSide(key);
        }})
}

export function projectFormBuilder(){
    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';
    projectForm.addEventListener('submit', function() {
        const form = document.getElementById('projectForm');
        const formData = new FormData(form);
    // Convert the form data to an object
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
    //save the new project    
        const project = new Project(data.projectName, data.projectDescription);
        project.saveProject();
    })

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
    sideProject.innerHTML = projectName.replace('project', '');
    sideProject.className = 'sideProject';
    sideProject.id = projectName;
    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.innerHTML = 'X';
    //just styling for no
    projectDeleteButton.style.width = '30px';
    projectDeleteButton.style.height = '30px';
    projectDeleteButton.className = 'projectDeleteButton';
    projectDeleteButton.addEventListener('click', function(){deleteProject(projectName)});
    sideProject.appendChild(projectDeleteButton);
    document.querySelector('.sideContainer').appendChild(sideProject);
}

export function deleteProject(name){
    Object.keys(localStorage).forEach(function (key) {
        if (key == name){
            localStorage.removeItem(key);
            document.querySelector(`#${name}`).remove();
        };
    })
}