import React from "react";
import PropTypes from "prop-types";

export default function TaskList(props) {
    return (
        <div className="task-list">

        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            completed: PropTypes.bool,
            created: PropTypes.object.isRequired,
            cutOff: PropTypes.object.isRequired
    }))
};
