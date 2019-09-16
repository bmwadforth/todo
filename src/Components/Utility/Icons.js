import React from "react";
import {ReactComponent as Success} from "../../Assets/Vectors/ok.svg";
import {ReactComponent as Error} from "../../Assets/Vectors/error.svg";

export const ICONS = {
    SUCCESS: <Success/>,
    ERROR: <Error/>
};

export default function Icon(props){
    return (
        <div className="icon">
            <span>{props.icon}</span>
        </div>
    )
}
