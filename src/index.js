import './style/index.css'
import { Project } from './projectManager.js';
import { buildTheSideContainer, buildTheProjectContainer } from './DOMmanipulator';
import { displayAllProjects } from './logic';


function initializeIndexPage(){
    buildTheSideContainer();
    buildTheProjectContainer();
    displayAllProjects();
}

initializeIndexPage();