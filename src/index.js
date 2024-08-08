import './style/index.css'
import { createProjectForm } from './projectForm';

const sideContainer = document.createElement('div');
const toDoContainer = document.createElement('div');
const header = document.createElement('div');
const toDoActionButtonContainer = document.createElement('div');

sideContainer.className = 'sideContainer';
toDoContainer.className = 'toDoContainer';
header.className = 'header';
toDoContainer.className = 'toDoContainer';
toDoActionButtonContainer.className = 'toDoActionButtonContainer';

document.body.appendChild(sideContainer);
document.body.appendChild(header);
document.body.appendChild(toDoContainer);

const addProjectBtn = document.createElement('button');
addProjectBtn.className = 'sideContainerBtn';
sideContainer.appendChild(addProjectBtn);
sideContainer.appendChild(toDoActionButtonContainer);
addProjectBtn.innerHTML = 'Add project';
addProjectBtn.id = 'addProject';
addProjectBtn.addEventListener('click', createProjectForm);


export function displayAllProjects(){
    Object.keys(localStorage).forEach(function (key) {
        const projectActionButton = document.createElement('button');
        projectActionButton.className = 'projectActionButton';
        projectActionButton.innerHTML = key;
        toDoActionButtonContainer.appendChild(projectActionButton);
        //projectActionButton.addEventListener('click', () => displayProject);
    })
}

displayAllProjects();