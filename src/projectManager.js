export class Project{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tasks = [];
        this.dueDate = '';
    }

    saveProject(){
        localStorage.setItem(this.name, this);
    }

    deleteProject(){
        Object.keys(localStorage).forEach(function (key) {
            if(key.match(this.key)){
                localStorage.removeItem(key);
                displayAllProjects;
            }
        })
    }
}