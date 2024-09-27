//add string to task list
let addTask = (task) => {
    console.log("\nAdding task ...");
    Tasks.push(task);
    console.log("\'" + task + "\' added.");
    return Tasks.length;
}
//delete string from task list
let deleteTask = (task) => {
    console.log("\nDeleting task ...");

    let index = Tasks.indexOf(task);
    if(index != -1){
        Tasks.splice(index , 1);
        console.log("\'" + task + "\' deleted.");
    }
    else{
        console.log("Task not found.");
    }    
    return Tasks.length;
}

//loop through array and display each task
let listAllTasks = () => {
    console.log("\nTask List: ");
    if(Tasks.length < 1){
        console.log("No tasks to display.");
        return;
    }
    let counter = 1;
    Tasks.forEach(task => {
        console.log("Task " + counter + ": " + task);
        counter++;
    });
}

//initialise empty task array
let Tasks = [];

//test and print results to console
addTask("One");
addTask("Two");
listAllTasks();
deleteTask("s");
listAllTasks();
deleteTask("One");
deleteTask("Two");
listAllTasks();


