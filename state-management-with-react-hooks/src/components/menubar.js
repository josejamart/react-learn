import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import User from "./user"

function Menubar(props) {
    console.log("no repinto")
    useEffect(() => {
        console.log("refresco menubar", props.userName)
    }, [props.userName])

    return <div className="Menubar">
        <span className="Menubar_link">
            <Link to="/">Home Page</Link>
        </span>
        <span className="Menubar_link">
            <Link to="/admin">Admin Page</Link>
        </span>
        <User userName={props.userName} />
    </div>;
}

export default Menubar;