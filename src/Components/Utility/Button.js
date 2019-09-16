import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button className={`button button-${props.status}`} onClick={props.onClick}>{props.title}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
    onClick: PropTypes.func.isRequired
};