import React from 'react'

export default function Footer() {
    return (
        <footer className="social-link"> 
            <div className="social-link-bg" />
            <a href="">
                <img src="../image/icons8-twitter.svg" alt="twitter" className='twitter-logo' />
            </a>
            <a href="">
                <img src="../image/icons8-facebook.svg" alt="facebook" className='facebook-logo'/>
            </a>
            <a href="">
                <img src="../image/icons8-instagram.svg" className='ins-logo' alt="ins"></img>
            </a>
            <a href="">
                <img src="../image/icons8-github.svg" alt="github" className='github-logo'/>
            </a>
        </footer>
    )
}