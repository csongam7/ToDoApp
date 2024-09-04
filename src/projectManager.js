import { displayOpenedProject, clearProjectDisplay } from "./DOMmanipulator";
import { getAllTheProjectsFromLocalstorage, convertJSObjectToJSON, updateProject} from "./logic";
export class Project{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tasks = [];
        this.dueDate = '';
    }

    saveProject(){
        const allProjects = getAllTheProjectsFromLocalstorage();
        allProjects.push(this);
        localStorage.setItem('projects', convertJSObjectToJSON(allProjects));
    }


    addTask(task){
        this.tasks.push(task);
        updateProject(this);
        clearProjectDisplay();
        displayOpenedProject(this);
    }

    deleteTask(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
        updateProject(this);
        clearProjectDisplay();
        displayOpenedProject(this);
    }

    editName(name){
        this.name = name;
    }

    editDescription(description){
        this.description = description;
    }
}