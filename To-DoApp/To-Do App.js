window.onload = function() {
    // starting elements
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearAll");

    // adding tasks
    addButton.addEventListener("click", addHandler, false);

    taskInput.onkeypress = function (e) {
        if (e.keyCode === 13) {
            addHandler();
        }
    };

    // clear all
    clearButton.addEventListener("click", clearHandler, false);

}

function addHandler() {
    const input = taskInput.value;
    const tasks = document.getElementById("tasks");

    const taskObject = createTaskObject(input);

    tasks.appendChild(taskObject.newTask);
    taskObject.newTask.appendChild(taskObject.completedButton);
    taskObject.newTask.appendChild(taskObject.deleteButton);

    document.getElementById("taskInput").value = "";
}

function createTaskObject(input) {
    const taskObject = {
        newTask: createNewTask(input),
        completedButton: createNewCompletedButton(),
        deleteButton: createDeleteButton()
    };

    return taskObject;
}

function createNewTask(input) {
    const newTask = document.createElement("p");
    newTask.setAttribute("class", "task");
    newTask.innerText = input;
    return newTask;
}

function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.addEventListener("click", function() {
        deleteButton.parentElement.remove();
    }, false);
    return deleteButton;
}

function createNewCompletedButton() {
    const completedButton = document.createElement("button");
    completedButton.setAttribute("class", "completedButton");
    completedButton.addEventListener("click", function() {
        completedButton.parentElement.setAttribute("class", "completed");
    }, false);
    return completedButton;
}

function clearHandler() {
    window.location.reload();
}