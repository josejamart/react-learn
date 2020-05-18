import React from "react";
import { Link } from "react-router-dom";
import User from "./user"

function Menubar(props) {
    return (
        <nav>
            <div className="nav-wrapper">
                <User userName={props.userName} />
                <ul className="left">
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin Page</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menubar;