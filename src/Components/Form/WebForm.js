import React from "react";
import PropTypes from "prop-types";
import Button from "../Utility/Button";

export default function WebForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="web-form">
                {props.children}
                <Button title={props.actionTitle} status="primary" type="submit" />
            </div>
        </form>
    )
}

WebForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    actionTitle: PropTypes.string.isRequired
};
