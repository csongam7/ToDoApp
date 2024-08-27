export class Project{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tasks = [{name: "beszarni", priority: "urgent", dueDate: "2024-10-05"},];
        this.dueDate = '';
    }

    saveProject(){
        localStorage.setItem(this.name + 'project', JSON.stringify(this));
    }

    deleteProject(){
        localStorage.removeItem(this.name + 'project')
    }

    addTask(task){
        this.tasks.push(task)
    }

    removeTask(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}