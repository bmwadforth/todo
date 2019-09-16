import React from 'react';
import TaskCreator from "./Components/Tasks/TaskCreator";
import TaskList from "./Components/Tasks/TaskList";
import {GetTasks} from "./Actions/TaskActions";

function App() {
    return (
        <div className="App">
            <TaskCreator/>
            <TaskList tasks={GetTasks()}/>
        </div>
    );
}

export default App;
