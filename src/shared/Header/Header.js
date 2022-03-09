
import React , {useState, useEffect} from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from 'resources/Logo_IDML_2021-02.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [progress, setProgress] = useState(0);
    const [scrolling, setScrolling] = useState('header');
    const scrollTrigger = 500;

    useEffect(() => {
        window.addEventListener("scroll", scrollProgress);
    }, [progress])


    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        //header
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            setScrolling('headerBlue')
        } else {
            setScrolling('headerTransparent')
        }
    }

        
    return (
        <header className={scrolling}>
            <img src={logo} alt="header logo" />
            <ul className="desktop-list">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/story">Our Story</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/insights">Insights</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
            {openMenu ?
            <CloseIcon className="hamburger-icon" onClick={()=>setOpenMenu(false)}/> :
            <MenuIcon className="hamburger-icon" onClick={()=>setOpenMenu(true)}/>
            }
            <div className={openMenu ? 'mobile-menu show-mobile-menu' : 'mobile-menu'}>
                <ul className="mobile-list">
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/story">Our Story</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/industries">Industries</Link></li>
                    <li><Link to="/insights">Insights</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
