import React from 'react'
import Info from './Info'
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

export default function Card() {
    return (
        <div className='card'>
            <img src="../image/profile.jpg" alt="profile" className="img-profile"/>
            <div className="main-background" />
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}