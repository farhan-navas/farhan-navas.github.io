import React, { Component } from 'react'
import './NavBar.css'
import NavLinks from "./NavLinks";
import HamburgerIcon from './starter-code/assets/shared/icon-hamburger.svg'
import CloseIcon from './starter-code/assets/shared/icon-close.svg'
import Logo from './starter-code/assets/shared/logo.svg'

export default class NavBar extends Component {
    render() {
        return (
            <nav className='NavBar'>
                <img src={Logo} alt={Logo} className='Logo' />
                <hr></hr>
                <NavLinks />
            </nav>
        )
    }
}