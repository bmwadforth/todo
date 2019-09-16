import React, {useState} from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";
import Field from "../Form/Field";
import WebForm from "../Form/WebForm";
import {useDispatch, useSelector} from "react-redux";
import {ACTIONS} from "../../Actions/Actions";
import {TaskExists} from "../../Actions/TaskActions";
import Alert from "../Utility/Alert";

export default function TaskCreator(props) {
    const [taskCreated, setTaskCreated] = useState(false);
    const [error, setError] = useState(null);
    const [task, setTask] = useState({
        id: null,
        title: "",
        description: "",
        cutOff: null,
        completed: false,
        created: new Date()
    });
    const dispatch = useDispatch();
    const {data: tasks} = useSelector(store => store.Tasks);

    function newTask(e) {
        e.preventDefault();
        if (TaskExists(task, tasks)) {
            setError("Task Already Exists");
            setTaskCreated(false);
        } else {
            dispatch({type: ACTIONS.TASK.CREATE, payload: {...task, id: uuid()}});
            setError(null);
            setTaskCreated(true);
        }
    }

    return (
        <div className="task-creator">
            {taskCreated && <Alert title="New Task Added" status="primary"/>}
            {error && <Alert title={error} status="danger"/>}
            <h1>New Task</h1>
            <WebForm actionTitle="Add Task" onSubmit={newTask}>
                <Field id="task-title" title="Task Title" onChange={e => {
                    setTask({...task, title: e.target.value});
                }} value={task.title} required={true}/>

                <Field id="task-desc" title="Task Description" onChange={e => {
                    setTask({...task, description: e.target.value});
                }} value={task.description} required={false}/>

                <Field id="task-cutOff" title="Task Due Date" onChange={e => {
                    setTask({...task, cutOff: e.target.value});
                }} value={task.cutOff} type="date" required={false}/>
            </WebForm>
        </div>
    );
}

TaskCreator.propTypes = {};
