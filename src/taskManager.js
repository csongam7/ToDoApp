export class Task{
    constructor(name, priority, dueDate, isDone = false){
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }

    deleteTask(){}

    editTask(){}
}