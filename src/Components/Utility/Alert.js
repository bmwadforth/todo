import React from "react";
import PropTypes from "prop-types";
import Icon, {ICONS} from "./Icons";

export default function Alert(props){
    function loadIcon(){
        switch(props.status){
            case "success":
                return ICONS.SUCCESS;
            case "danger":
                return ICONS.ERROR;
            default:
                return ICONS.ERROR;
        }
    }

    return (
        <div className="alert">
            <div className={`alert-body alert-${props.status}`}>
                <div className="alert-title">
                    <Icon icon={loadIcon()}/>
                    <p>{props.title}</p>
                </div>
                <div className="alert-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

Alert.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["success", "danger"]).isRequired
};
