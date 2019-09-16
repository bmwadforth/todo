import React from "react";
import PropTypes from "prop-types";

export default function Alert(props){
    return (
        <div className="alert">
            <div className={`alert-body alert-${props.status}`}>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

Alert.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["success", "danger"]).isRequired
};
