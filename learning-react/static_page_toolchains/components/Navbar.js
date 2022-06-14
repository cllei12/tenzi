import React from "react";

const reactLofoURL = "../images/react-icon-small.png"

function Navbar(){
    return (
        <nav>
            <img className="nav-img" src={reactLofoURL} alt="reactLofo" />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}


export default Navbar