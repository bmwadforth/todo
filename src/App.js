import React from 'react';
import TaskCreator from "./Components/Tasks/TaskCreator";
import TaskList from "./Components/Tasks/TaskList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
    const {data: tasks} = useSelector(store => store.Tasks);

    return (
        <div className="App">
            <section>
                <h1>Task System</h1>
                <Router>
                    <TaskCreator/>
                    <TaskList tasks={Object.values(tasks)}/>
                </Router>
            </section>
        </div>
    );
}

export default App;
