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
        cutOff: new Date(),
        created: new Date(),
        completed: false
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
            {taskCreated && <Alert title="New Task Added" status="success"/>}
            {error && <Alert title={error} status="danger"/>}
            <WebForm actionTitle="New Task" onSubmit={newTask}>
                <Field id="task-title" title="Task Title" onChange={e => {
                    setTask({...task, title: e.target.value});
                }} value={task.title} required={true}/>

                <Field id="task-desc" title="Task Description" onChange={e => {
                    setTask({...task, description: e.target.value});
                }} value={task.description} required={false}/>

                <Field id="task-cutOff" title="Task Due Date" onChange={e => {
                    setTask({...task, cutOff: e.target.value});
                }} value={task.cutOff} type="date" required={true}/>
            </WebForm>
        </div>
    );
}

TaskCreator.propTypes = {};
