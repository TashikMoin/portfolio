import React from 'react';
import Navbar from '@acto/react-navbar';
import navbarStyle from '../../../styles/navbar/Navbar.module.css'

const navTheme = {
    mainColor: '#000000',
    menuBgColor: '#edf7f3'
}

const navBrand = <a href="/">Tashik Moin.</a>
 
const rightLinks = (
  <>
    <a href='/home'>Home</a>
    <a href='/portfolio'>Portfolio</a>
    <a href='/about'>About</a>
    <a href='/contact'>Contact</a>
  </>
)

const ResponsiveNavbar = () => {
    return (
        <div>
            <Navbar
            className={navbarStyle.hamburger}
            // className="navbar" 
            // menuClassName={navbarStyle.hamburger} 
            brand={navBrand}
            theme={navTheme}
            rightLinks={rightLinks}
            shouldHideOnScroll={true}
            shouldAnimate={true}
            />
        </div>
    )
}

export default ResponsiveNavbar;
