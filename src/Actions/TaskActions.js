export function NewTask(task) {

}

export function GetTask(id){

}

/**
 * @return {array}
 */
export function GetTasks() {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
        return JSON.parse(tasks);
    } else {
        localStorage.setItem("tasks", JSON.stringify([]));
        return [];
    }
}

export function DeleteTask(id){

}
