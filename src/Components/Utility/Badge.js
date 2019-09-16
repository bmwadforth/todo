import React from "react";
import PropTypes from "prop-types";

export default function Badge(props){
    return (
        <span className={`badge badge-${props.status}`}>{props.title}</span>
    )
}

Badge.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["success", "warning", "danger"])
};
