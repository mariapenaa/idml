
import React , {useState} from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from 'resources/Logo_IDML_2021-02.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header>
            <img src={logo} alt="header logo" />
            <ul className="desktop-list">
                <li><Link to="/">Home</Link></li>
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
                    <li><Link to="/">Home</Link></li>
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
