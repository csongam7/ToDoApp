export class Project{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tasks = [];
        this.dueDate = '';
    }

    saveProject(){
        localStorage.setItem(this.name + 'project', this);
    }

    deleteProject(){
        localStorage.removeItem(this.name + 'project')
    }
}