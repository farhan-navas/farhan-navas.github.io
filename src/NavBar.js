import { NavLink } from "react-router-dom";
import React, { Component } from 'react'
import Logo from './starter-code/assets/shared/logo.svg'

export default class NavBar extends Component {
    render() {
        return (
        <nav className='NavBar'>
            <img src={Logo} alt={Logo} />
            <hr></hr>
            <div className='links'>
                <h6><NavLink to={'/home'} className={({isActive}) => isActive ? 'active': undefined}><span>00</span> HOME</NavLink></h6>
                <h6><NavLink to={'/destination'} className={({isActive}) => isActive ? 'active': undefined}><span>01</span> DESTINATION</NavLink></h6>
                <h6><NavLink to={'/crew'} className={({isActive}) => isActive ? 'active': undefined}><span>02</span> CREW</NavLink></h6>
                <h6><NavLink to={'/technology'} className={({isActive}) => isActive ? 'active': undefined}><span>03</span> TECHNOLOGY</NavLink></h6>
            </div>
        </nav>
        )
    }
}