import React from "react"

const logo = "../image/logo.png"

export default function Hero(){
    return (
        <div className="hero">
            <img src={logo} className="hero-logo" /> 
            <p className="hero-text">my travel journal.</p>
        </div>
    )
}