import React from "react";
import PropTypes from "prop-types";

export default function TaskRow(props){
    function formatDescription(desc){
        if(desc.length > 15) {
            return desc.slice(0, 15) + "...";
        }
        return desc;
    }

    return (
        <div className="task-row">
            <p>{props.title}</p>
        </div>
    )
}

TaskRow.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    created: PropTypes.object.isRequired,
    cutOff: PropTypes.string.isRequired
};
