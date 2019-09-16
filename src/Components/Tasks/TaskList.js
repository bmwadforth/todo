import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import TaskRow from "./TaskRow";

export default function TaskList(props) {
    return (
        <div className="task-list">
            <h2>View Tasks</h2>
            {props.tasks.length ?
                props.tasks.map(task => {
                    return <TaskRow
                        key={uuid()}
                        title={task.title}
                        description={task.description}
                        completed={task.completed}
                        created={task.created}
                        cutOff={task.cutOff}/>
                })
                :
                <div className="task-row-none">No Tasks</div>}
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
            cutOff: PropTypes.string
        }))
};
