import React, { useEffect, useState, useRef } from "react";
import './TrangChu.css';
import './Responsive.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes  } from '@fortawesome/free-solid-svg-icons';
const NavigateHeader = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [iconClass, setIconClass] = useState(faBars);

    const toggleNav = () => {
        setNavOpen(prevNavOpen => !prevNavOpen);
        setIconClass(prevIconClass => prevIconClass === faBars ? faTimes : faBars);
    };

    return (
    <div className="header_logo">
                    <div className="header_inner">
                        <div className="logo">
                            <a href="/"><h1>Food<b>io</b></h1></a>
                        </div>
                        <ul className={`main-nav ${navOpen ? 'open' : ''}`}>
                            <li ><a href="/haisan">Hải sản</a></li>
                            <li><a href="/nongsan">Nông sản</a></li>
                            <li><a href="/lamsan">Lâm sản</a></li>
                            <li><a href="/sansan">Đặc sản</a></li>
                            <li><a href="/nuoc">Nước</a></li>
                        </ul>

                        <FontAwesomeIcon icon={iconClass} className="mobile-nav-icon" onClick={toggleNav} />
                        
                    </div>
                </div> 
    )
}

export default NavigateHeader;