import { useState, useEffect } from "react";
import { Container, NavDropdown, NavLink, Navbar, Nav } from "react-bootstrap"
import logo from '../assets/img/header_img.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import orderIcon from '../assets/img/shoppingcart.png';
import { Link } from 'react-router-dom';

import menu from '../assets/img/menu.png'
import { DropDownProfile } from "./dropdownMenu.js"


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); // aici suntem trimisi prima data
    const [scrolled, setScrolled] = useState(false); //verificam daca userul face scroll
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }



    useEffect (() => {
        const onScroll = () => {
            if(window.scrollY > 90){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])//triggered daca userul face scroll pe pagina in jos mai mult de 50 px
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    
    return (
        <Navbar expand = "lg" className = {scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href = "home">
                    <img src={logo} alt = "Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className = "navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link href = "home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href = "contact" className = {activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                        <Nav.Link href = "subscription" className = {activeLink === 'subscription' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('subscription')}>Subscription</Nav.Link>
                        <Nav.Link href = "shop" className = {activeLink === 'shop' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('shop')}>Shop</Nav.Link>
                    </Nav>
                    <span className = "navbar-text">
                        <div className="social-icon">
                            <a href = "https://www.linkedin.com/company/fitness-coach" target = "_blank"><img src = {navIcon1} alt = ""/></a>
                            <a href = "https://www.facebook.com/FCSBOfficial/" target = "_blank"><img src = {navIcon2} alt = ""/></a>
                            <a href = "https://www.instagram.com/leomessi/" target = "_blank"><img src = {navIcon3} alt = ""/></a>
                        </div>
                        <Link to="/login" className="vvd">
                            <button >
                                <span>Lets Connect</span>             
                            </button>
                        </Link>
                    </span>
                    <Nav className = "me-auto">
                        <Nav.Link href = "order" className = {activeLink === 'order' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('order')} >
                            <div className="checkout-icon">
                                <a href = "order"><img src = {orderIcon} alt = ""/></a>
                                <a href = "dashboard"><img src = {menu} alt = ""/></a>                      
                            </div>
                        </Nav.Link>                       
                    </Nav>
                    {isDropDownOpen && <DropDownProfile />} 
                </Navbar.Collapse>
            
            </Container>
        </Navbar>

    )
}