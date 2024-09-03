import { tr } from "date-fns/locale";
import { displayProjectOnTheSide, deleteProjectFromDOM, displayOpenedProject, clearProjectDisplay, projectFormBuilder } from "./DOMmanipulator";
import { Project } from "./projectManager";
import { Task } from "./taskManager";

export function displayAllProjects(){
    const allProjects = getAllTheProjectsFromLocalstorage();
    if (allProjects){
        allProjects.forEach(project => displayProjectOnTheSide(project.name))
    }
}

export function createNewProject(){
    const data = convertFromDataToAnObject('projectForm');
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

export function openProject(projectName){
    clearProjectDisplay();
    displayOpenedProject(getTheProjectWeWantToWorkWith(projectName));
}

function convertFromDataToAnObject(formId){
    const form = document.getElementById(formId);
    const formData = new FormData(form);
// Convert the form data to an object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    return data;
}

export function getThePojectsIndexWeWantToWorkWith(project){
    const allProjets = getAllTheProjectsFromLocalstorage();
    let index = '';
    allProjets.forEach(currentProjectOnTheLoop => {if(currentProjectOnTheLoop.name == project.name){
        index = allProjets.indexOf(currentProjectOnTheLoop);
    }})
    return index;
}

function getTheProjectWeWantToWorkWith(projectName){
    const allProjects = getAllTheProjectsFromLocalstorage();
    let selectedProject = '';
    allProjects.forEach(project => {if(project.name == projectName){
        selectedProject = project;
    }})
    return selectedProject;
}

export function changeIsDoneOnTask(project, task){
    const selectedProject = getTheProjectWeWantToWorkWith(project.name);
    const indexOfSelectedTask = getTheIndexOfTheTaskWeWantToWorkWith(selectedProject, task) 
    if(selectedProject.tasks[indexOfSelectedTask].isDone == true){
        selectedProject.tasks[indexOfSelectedTask].isDone = false;
    }
    else{selectedProject.tasks[indexOfSelectedTask].isDone = true;}
    updateProject(selectedProject);
}

export function  updateProject(project, oldProject=none){
    const allProjects = getAllTheProjectsFromLocalstorage();
    if(oldProject){
        allProjects[getThePojectsIndexWeWantToWorkWith(oldProject)] = {name:project.name, description:project.description, tasks:project.tasks, dueDate:project.dueDate};
        localStorage.setItem('projects', convertJSObjectToJSON(allProjects));
    }
    else{
        allProjects[getThePojectsIndexWeWantToWorkWith(project)] = project;
        localStorage.setItem('projects', convertJSObjectToJSON(allProjects));
    };
}

export function getTheIndexOfTheTaskWeWantToWorkWith(project, task){
    let index = '';
    project.tasks.forEach(currentTaskOnTheLoop => {if(currentTaskOnTheLoop.name == task.name){
        index = project.tasks.indexOf(currentTaskOnTheLoop)
    }})
    return index;
}

export function getAllTheProjectsFromLocalstorage(){
    if(localStorage.getItem('projects')){
    return parseJsonToJSObject(localStorage.getItem('projects'));}
    return [];
}

function parseJsonToJSObject(json){
    return JSON.parse(json);
}

export function convertJSObjectToJSON(jsObject){
    return JSON.stringify(jsObject)
}

export function createNewTask(project){
    const retrievedProject = getTheProjectWeWantToWorkWith(project.name)
    Object.setPrototypeOf(retrievedProject, Project.prototype);
    const data = convertFromDataToAnObject('taskForm')
//save the new task    
    const task = new Task(data.taskName, data.taskPriority, data.taskDueDate);
    retrievedProject.addTask(task);
}

export function callTheProjectFormBuilderToEditProject(project){
    projectFormBuilder(project);
}

export function editProjectNameAndDescription(project){
    const formData = convertFromDataToAnObject('projectForm');
    const uneditedProject = getTheProjectWeWantToWorkWith(project.name)
    project.editName(formData.projectName);
    project.editDescription(formData.projectDescription);
    updateProject(project, uneditedProject);
    clearProjectDisplay();
    displayOpenedProject(project);
}