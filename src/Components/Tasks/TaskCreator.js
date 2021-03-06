import React, {useState} from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";
import Field from "../Form/Field";
import WebForm from "../Form/WebForm";
import {useDispatch, useSelector} from "react-redux";
import {ACTIONS} from "../../Actions/Actions";
import {TaskExists} from "../../Actions/TaskHelpers";
import Alert from "../Utility/Alert";
import Ephemeral from "../Utility/Ephemeral";

export default function TaskCreator(props) {
    const [taskCreated, setTaskCreated] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [task, setTask] = useState({
        id: undefined,
        title: "",
        description: "",
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
            {taskCreated && <Ephemeral countdown={3000}><Alert title="New Task Added" status="success"/></Ephemeral>}
            {error && <Alert title={error} status="danger"/>}
            <h2>Create Task</h2>
            <WebForm actionTitle="Add Task" onSubmit={newTask}>
                <Field id="task-title" title="Task Title" onChange={e => {
                    setTask({...task, title: e.target.value});
                }} value={task.title} required={true}/>

                <Field id="task-desc" title="Task Description" onChange={e => {
                    setTask({...task, description: e.target.value});
                }} value={task.description} required={false}/>
            </WebForm>
        </div>
    );
}

TaskCreator.propTypes = {};
