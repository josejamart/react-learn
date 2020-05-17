import React, { useEffect } from "react";

function Home(props) {
    useEffect(() => {
        console.log("dentro: " + props.text)
    }, [props.text])
    return (
        <div>
            <div>Home Page {props.text}</div>
        </div >);
}

export default Home;