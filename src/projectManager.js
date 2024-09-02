import { displayOpenedProject, clearProjectDisplay } from "./DOMmanipulator";
import { getAllTheProjectsFromLocalstorage, convertJSObjectToJSON, updateProject} from "./logic";
export class Project{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tasks = [/*{name: "beszarni", priority: "urgent", dueDate: "2024-10-05"},*/];
        this.dueDate = '';
    }

    saveProject(){
        const allProjects = getAllTheProjectsFromLocalstorage();
        allProjects.push(this);
        localStorage.setItem('projects', convertJSObjectToJSON(allProjects));
    }

    deleteProject(){
        localStorage.removeItem(this.name + 'project')
        clearProjectDisplay();
    }

    addTask(task){
        this.tasks.push(task);
        updateProject(this);
        clearProjectDisplay();
        displayOpenedProject(this);
    }

    removeTask(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}