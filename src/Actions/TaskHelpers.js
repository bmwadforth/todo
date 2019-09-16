/**
 * @return {boolean}
 */
export function TaskExists(newTask, tasks) {
    for (let key in tasks){
        if(tasks.hasOwnProperty(key)){
            if(tasks[key].title.toLowerCase() === newTask.title.toLowerCase()) {
                return true;
            }
        }
    }

    return false;
}