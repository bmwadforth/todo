import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button className={`button button-${props.status}`} onClick={props.onClick}
                type={props.type ? props.type : "button"}>{props.title}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
    type: PropTypes.string,
    onClick: PropTypes.func
};