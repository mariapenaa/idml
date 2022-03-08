
import React from 'react';
import './Footer.scss';
import logo from 'resources/Logo.svg'
import tel from 'resources/Group 3033.svg'
import email from 'resources/Group 3035.svg' 
import twitter from 'resources/Twitter.svg';
import ig from 'resources/instagram Black-01.svg';
import fb from 'resources/002-facebook-logo.svg'
import link from 'resources/003-linkedin.svg'

import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className="blue-square">
                <img className="logo" src={logo} alt="logo"></img>
                <div className="mx-5">
                    <div className="icons">
                        <img src={tel} alt="telefono" />
                        <img src={email} alt="telefono" />
                    </div>
                    <p>“We solve the greatest challenges by inspiring great minds like you and by creating innovative solutions with you!”</p>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/story">Our Story</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/industries">Industries</Link></li>
                    <li><Link to="/insights">Insights</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
            <div className="social">
                <img src={link} alt="linkedin" />
                <img src={fb} alt="linkedin" />
                <img src={ig} alt="linkedin" />
                <img src={twitter} alt="linkedin" />
            </div>

        </footer>
    );
}

export default Footer;
