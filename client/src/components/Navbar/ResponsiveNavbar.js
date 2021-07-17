import React from 'react';
import Navbar from '@acto/react-navbar';
import navbarStyle from '../../../styles/Navbar/Navbar.module.css'
import Link from 'next/link'

const navTheme = {
    mainColor: '#6d6d6d',
    menuBgColor: '#edf7f3'
}

const navBrand = <Link href="/">Tashik Moin.</Link>
 
const rightLinks = (
  <>
    <Link href='/'>Home</Link>
    <Link href='/portfolio'>Portfolio</Link>
    <Link href='/trainings'>Trainings</Link>
    <Link href='/about'>About</Link>
  </>
)

const ResponsiveNavbar = () => {
    return (
        <div>
            <Navbar
            className={navbarStyle.hamburger}
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
