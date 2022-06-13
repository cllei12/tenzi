import React from "react";

const reactLofoURL = "../images/react-icon-small.png"

function Navbar(){
    return (
        <nav>
            <img src={reactLofoURL} alt="reactLofo" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}


export default Navbar