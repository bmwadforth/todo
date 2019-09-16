import React from "react";
import PropTypes from "prop-types";

export default function TaskItem(props) {
    return (
        <div className="task-item">

        </div>
    );
}

TaskItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    created: PropTypes.object.isRequired,
    cutOff: PropTypes.object.isRequired
};
