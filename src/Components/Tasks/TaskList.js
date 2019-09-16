import React from "react";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import uuid from "uuid/v4";

export default function TaskList(props) {
    return (
        <>
            <div className="task-list">
                {props.tasks.map(task => {
                    return <TaskItem
                        key={uuid()}
                        title={task.title}
                        description={task.description}
                        completed={task.completed}
                        created={task.created}
                        cutOff={task.cutOff}/>
                })}
            </div>
        </>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            completed: PropTypes.bool,
            created: PropTypes.object.isRequired,
            cutOff: PropTypes.string.isRequired
        }))
};
