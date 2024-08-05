export function addProjectFeature(){
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
        
        //input container
        const inputContainer = document.createElement('div');
        inputContainer.appendChild(projectNameInput);
        inputContainer.appendChild(projectDescriptionInput);
        document.body.appendChild(inputContainer);
        inputContainer.className = 'inputContainer';

        //submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.innerHTML = 'Submit';
        inputContainer.appendChild(submitButton);

        //add task button
        const addTaskButton = document.createElement('button');
        addTaskButton.innerHTML = 'Add Task';
        inputContainer.appendChild(addTaskButton);
}
