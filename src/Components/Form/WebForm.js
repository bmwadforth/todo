import React from "react";
import PropTypes from "prop-types";

export default function WebForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="web-form">
                {props.children}
                <button type="submit">{props.actionTitle}</button>
            </div>
        </form>
    )
}

WebForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    actionTitle: PropTypes.string.isRequired
};
