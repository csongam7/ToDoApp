export function addProjectFeature(){

        //project form
        const projectForm = document.createElement('form');
        projectForm.action = '/addProject';
        projectForm.method = 'POST';

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
