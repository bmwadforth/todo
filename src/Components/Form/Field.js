import React from "react";
import PropTypes from "prop-types";

export default function Field(props) {
    return (
        <div className="form-item">
            <label htmlFor={props.id}>{props.title}</label>
            <input id={props.id} type={props.type ? props.type : "text"} onChange={e => {
                props.onChange(e);
            }} value={props.value} required={props.required}/>
        </div>
    );
}

Field.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string
};