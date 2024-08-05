import './style/index.css'

const sideContainer = document.createElement('div');
const toDoContainer = document.createElement('div');
const header = document.createElement('div');

sideContainer.className = 'sideContainer';
toDoContainer.className = 'toDoContainer';
header.className = 'header';

document.body.appendChild(sideContainer);
document.body.appendChild(header);
document.body.appendChild(toDoContainer);

const addProjectBtn = document.createElement('button');
addProjectBtn.className = 'sideContainerBtn';
sideContainer.appendChild(addProjectBtn);
addProjectBtn.innerHTML = 'Add project'