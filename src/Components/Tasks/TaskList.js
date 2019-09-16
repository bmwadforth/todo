import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import TaskListItem from "./TaskListItem";

export default function TaskList(props) {
    return (
        <div className="task-list">
            <h2>Your Tasks</h2>
            {props.tasks.length ?
                props.tasks.map(task => {
                    return <TaskListItem
                        key={uuid()}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        completed={task.completed}
                        created={task.created}/>
                })
                :
                <div className="task-row-none">No Tasks</div>}
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            completed: PropTypes.bool,
            created: PropTypes.object.isRequired
        }))
};
