import React, {useState} from "react";
import PropTypes from "prop-types";
import Icon, {ICONS} from "../Utility/Icons";
import Button from "../Utility/Button";
import {useDispatch} from "react-redux";
import {ACTIONS} from "../../Actions/Actions";

export default function TaskRow(props) {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className="task-row">
            <div className={`task-row-heading ${active && "task-row-collapse"} ${props.completed && "task-completed"}`} onClick={() => {
                setActive(!active);
            }}>
                <div className="task-row-title">
                    <p>{props.title}</p>
                    <Icon icon={ICONS.CARET}/>
                </div>
            </div>
            {active &&
            <div className="task-row-body">
                <div className="task-details">
                    <p><strong>Description:</strong> {props.description}</p>
                    <p><strong>Completed:</strong> {props.completed ? "Yes" : "No"}</p>
                    {props.cutOff && <p><strong>Due Date:</strong> {new Date(props.cutOff).toDateString()}</p>}
                    <p><strong>Created:</strong> {new Date(props.created).toDateString()}</p>
                </div>
                <div className="task-actions">
                    <Button title="Complete Task" status="primary" onClick={() => dispatch({type: ACTIONS.TASK.COMPLETE, payload: props.id})} outline/>
                    <Button title="Delete Task" status="danger" onClick={() => dispatch({type: ACTIONS.TASK.DELETE, payload: props.id})} outline/>
                </div>
            </div>}
        </div>
    )
}

TaskRow.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    created: PropTypes.object.isRequired,
    cutOff: PropTypes.string
};
