import './style/index.css'
import { Project } from './projectManager';
import { buildTheSideContainer, buildTheProjectContainer, displayAllProjects } from './DOMmanipulator';


function initializeIndexPage(){
    buildTheSideContainer();
    buildTheProjectContainer();
    displayAllProjects();
}

initializeIndexPage();