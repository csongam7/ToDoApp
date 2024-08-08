import { Project } from "./projectManager"
import { displayAllProjects } from ".";
export function createProjectForm(){

        //project form
        const projectForm = document.createElement('form');
        projectForm.id = 'projectForm'
        projectForm.addEventListener('submit', event => {
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
            displayAllProjects();
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