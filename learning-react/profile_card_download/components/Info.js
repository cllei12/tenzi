import React from 'react'

export default function Info() {
    return (
        <div className='info'>
            <h3 className="info-name">Lei Cao</h3>
            <p className="info-position">Full-Stack Developer</p>
            <a href="https://github.com/cllei12" className="info-website">github.com/cllei12</a>
            <button className="button-email">
                <img src="../image/mail.svg" className="button-email-logo"></img>
                <p className="button-email-text">Email</p>
            </button>
            <button className="button-linkedin">
                <img src="../image/icons8-linkedin.svg" className="button-linkedin-logo"></img>
                <p className="button-linkedin-text">LinkedIn</p>
            </button>
        </div>
    )
}