import { displayProjectOnTheSide, deleteProjectFromDOM, displayOpenedProject, clearProjectDisplay } from "./DOMmanipulator";
import { Project } from "./projectManager";
import { Task } from "./taskManager";

export function displayAllProjects(){
    Object.keys(localStorage).forEach(function (key) {
        if(key.includes('project')){
            displayProjectOnTheSide(key);
        }})
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

export function openProject(key){
    clearProjectDisplay();
    const project = JSON.parse(localStorage.getItem(key));
    displayOpenedProject(project);
}

export function toggleIsDone(project, taskToChangeIsDoneOn){
    taskToChangeIsDoneOn.isDone ? taskToChangeIsDoneOn.isDone = false : taskToChangeIsDoneOn.isDone = true;
    project.addTask(taskToChangeIsDoneOn)
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

export function createNewTask(project){
    const retrievedProject = JSON.parse(localStorage.getItem(project.name + 'project'));
    Object.setPrototypeOf(retrievedProject, Project.prototype);
    const data = convertFromDataToAnObject('taskForm')
//save the new task    
    const task = new Task(data.taskName, data.taskPriority, data.taskDueDate);
    retrievedProject.addTask(task);
}