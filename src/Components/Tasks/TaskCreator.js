import React, {useState} from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";
import Field from "../Form/Field";

export default function TaskCreator(props) {
    const [task, setTask] = useState({id: uuid(), title: "", description: "", cutOff: new Date(), created: new Date()});

    function newTask(e) {
        e.preventDefault();
        console.log(JSON.stringify(task));
    }

    return (
        <div className="task-creator">
            <form onSubmit={newTask}>
                <Field id="task-title" title="Title" onChange={e => {
                    setTask({...task, title: e.target.value});
                }} value={task.title} required={true}/>

                <Field id="task-desc" title="Description" onChange={e => {
                    setTask({...task, description: e.target.value});
                }} value={task.description} required={false}/>

                <Field id="task-cutOff" title="Task Due Date" onChange={e => {
                    setTask({...task, cutOff: e.target.value});
                }} value={task.cutOff} type="date" required={true}/>
                <button type="submit">New Task</button>
            </form>

        </div>
    );
}

TaskCreator.propTypes = {};
