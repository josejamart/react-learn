import React from "react";

function user(props) {
    console.log("repinto user name")
    return (<span className="User">
        {props.userName}
    </span>);
}

export default user;