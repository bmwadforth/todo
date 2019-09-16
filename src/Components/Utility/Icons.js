import React from "react";
import {ReactComponent as Success} from "../../Assets/Vectors/ok.svg";
import {ReactComponent as Error} from "../../Assets/Vectors/error.svg";
import {ReactComponent as Caret} from "../../Assets/Vectors/caret.svg";
import {ReactComponent as Bin} from "../../Assets/Vectors/bin.svg";

export const ICONS = {
    SUCCESS: <Success/>,
    ERROR: <Error/>,
    CARET: <Caret/>,
    BIN: <Bin/>
};

export default function Icon(props){
    return (
        <div className="icon">
            <span>{props.icon}</span>
        </div>
    )
}
