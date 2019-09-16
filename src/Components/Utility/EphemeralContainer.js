import React, {useState} from "react";
import PropTypes from "prop-types";

export default function Ephemeral(props) {
    const [hasElapsed, setElapsed] = useState(false);

    setTimeout(() => {
        setElapsed(true);
    }, props.countdown);

    return (
        <>
            {hasElapsed ? null : props.children}
        </>
    )
}

Ephemeral.propTypes = {
    countdown: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};