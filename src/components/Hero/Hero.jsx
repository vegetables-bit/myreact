import React from 'react';
import './Hero.css'
import hand_icon from '../Assets/logo/hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2><b>WELCOME TO MASAMBA ONLINE SHOP</b></h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
            </div>
        </div>
    )
}

export default Hero