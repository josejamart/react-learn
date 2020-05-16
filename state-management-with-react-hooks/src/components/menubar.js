import React from "react";
import { Link } from "react-router-dom";
import User from "./user"

function Menubar(props) {
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