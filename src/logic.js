import { displayProjectOnTheSide, deleteProjectFromDOM } from "./DOMmanipulator";
import { Project } from "./projectManager";

export function displayAllProjects(){
    Object.keys(localStorage).forEach(function (key) {
        if(key.includes('project')){
            displayProjectOnTheSide(key);
        }})
}

export function createNewProject(){
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
}

export function deleteProject(name){
    Object.keys(localStorage).forEach(function (key) {
        if (key == name){
            localStorage.removeItem(key);
            deleteProjectFromDOM(key);
        };
    })
}

export function openProject(project){
    localStorage.getItem(project);
}