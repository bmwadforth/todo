import React from "react";
import PropTypes from "prop-types";

export default function TaskItem(props) {
    return (
        <div className="task-item">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
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
