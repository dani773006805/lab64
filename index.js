'use strict';

function createTaskElement(task) {
    let taskElement = document.createElement('div');
    taskElement.classList.add('taskElement');
    taskElement.innerHTML =
        `<span class="taskBody"><h5>`+task+`</h5></span>`
    return taskElement;

}

function addTask(taskElement) {
    document.getElementsByClassName('tasks')[0].append(taskElement);
}

function addHandler(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let name = data.get("task");
    addTask(createTaskElement(name));
    document.getElementsByClassName('taskForm')[0].reset();
    listener();

}
document.getElementsByClassName("taskForm")[0]
    .addEventListener('submit', addHandler);
function listener(){
    let length=document.getElementsByClassName('taskBody').length;
    for(let i=0;i<length;i++){
        document.getElementsByClassName('taskBody')[i].addEventListener('dblclick',function (){
            document.getElementsByClassName('taskBody')[i].firstChild.style.textDecoration='line-through';
        })
    }
}
