import React, {useState} from "react";
import PropTypes from "prop-types";
import Icon, {ICONS} from "../Utility/Icons";

export default function TaskRow(props){
    const [active, setActive] = useState(false);

    return (
        <div className={`task-row ${active && "task-row-collapse"}`} onClick={() => {
            setActive(!active);
        }}>
            <div className="task-row-title">
                <p>{props.title}</p>
                <Icon icon={ICONS.CARET} />
            </div>
            {active &&
            <div className="task-row-body">
                <p>Description: {props.description}</p>
            </div>}
        </div>
    )
}

TaskRow.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    created: PropTypes.object.isRequired,
    cutOff: PropTypes.string
};
