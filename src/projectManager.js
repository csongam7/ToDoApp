import { displayOpenedProject, clearProjectDisplay } from "./DOMmanipulator";
export class Project{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tasks = [/*{name: "beszarni", priority: "urgent", dueDate: "2024-10-05"},*/];
        this.dueDate = '';
    }

    saveProject(){
        localStorage.setItem(this.name + 'project', JSON.stringify(this));
    }

    deleteProject(){
        localStorage.removeItem(this.name + 'project')
        clearProjectDisplay();
    }

    addTask(task){
        this.tasks.push(task)
        this.saveProject(this);
        clearProjectDisplay();
        displayOpenedProject(this);
    }

    removeTask(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}