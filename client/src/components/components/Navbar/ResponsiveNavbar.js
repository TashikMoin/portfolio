import React from 'react';
import Navbar from '@acto/react-navbar';
import NavbarStyle from '../../../styles/Navbar/Navbar.module.css'
import Link from 'next/link'

const navTheme = {
    mainColor: '#000000',
    menuBgColor: '#edf7f3'
}

const navBrand = <Link href="/">Tashik Moin.</Link>
 
const rightLinks = (
  <>
    <Link href='/home'>Home</Link>
    <Link href='/portfolio'>Portfolio</Link>
    <Link href='/about'>About</Link>
    <Link href='/contact'>Contact</Link>
  </>
)

const ResponsiveNavbar = () => {
    return (
        <div>
            <Navbar
            className={NavbarStyle.hamburger}
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
