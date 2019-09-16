import React from "react";
import PropTypes from "prop-types";
import Badge from "../Utility/Badge";

export default function TaskItem(props) {
    return (
        <div className="task-item">
            <h1>Title: {props.title}</h1>
            <p>Description: {props.description}</p>
            <Badge title={`${props.completed ? "Completed" : "Not Completed"}`} status={props.completed ? "success": "warning"}/>
        </div>
    );
}

TaskItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    created: PropTypes.object.isRequired,
    cutOff: PropTypes.string.isRequired
};
