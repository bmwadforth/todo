function getTasks() {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
        return JSON.parse(tasks);
    } else {
        localStorage.setItem("tasks", JSON.stringify({}));
        return {};
    }
}

function setTasks(tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * @return {boolean}
 */
export function TaskExists(newTask, tasks) {
    for (let key in tasks){
        if(tasks.hasOwnProperty(key)){
            if(tasks[key].title === newTask.title || tasks[key].description === newTask.description) {
                return true;
            }
        }
    }

    return false;
}

export function GetTask(id){

}

/**
 * @return {object}
 */
export function GetTasks() {
    return getTasks();
}

export function DeleteTask(id){

}
