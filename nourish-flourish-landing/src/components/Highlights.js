import './css/Highlights.css';
import { IoIosArrowDown } from "react-icons/io";
import Juice from './assets/Green_goddess_juice.jpg';
import Bowl from './assets/eat-the-rainbow-bowl.jpg';
import Cookies from './assets/cookies.jpg';
import React, { useRef } from 'react';

const Highlights = () => {
    const scrollRef = useRef(null);
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="main-container">
            <div className="juice_container">
                <img className="greengoddessimg" src={Juice} alt="Green Goddess Juice" />
                <button className="btn" onClick={() => scrollToSection('menu')}><IoIosArrowDown /></button>
            </div>
            <div className="bowl_container">
                <img className="bowlimg" src={Bowl} alt="Bowl" />
                <button className="btn" onClick={() => scrollToSection('menu')}><IoIosArrowDown /></button>
            </div>
            <div className="cookies_container">
                <img className="vegancookies" src={Cookies} alt="Vegan Cookies" />
                <button className="btn" onClick={() => scrollToSection('menu')}><IoIosArrowDown /></button>
            </div></div>
    );
}

export default Highlights;