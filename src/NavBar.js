import React, { Component } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import HamburgerIcon from './starter-code/assets/shared/icon-hamburger.svg'
import Logo from './starter-code/assets/shared/logo.svg'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { media: window.matchMedia("(max-width: 375px").matches}
    }

    componentDidMount() {
        const handler = (e) => this.setState({ media: e.matches })
        window.matchMedia("(max-width: 375px)").addEventListener('change', handler)
    }
    
    handleOpen(e) {
        e.target.classList.add('hidden')
        const links = document.getElementById('links')
        const navBar = document.getElementById('NavBar')
        navBar.style.height = '100vh'
        links.style.height = '100%'
        links.classList.remove('hidden')
    }

    render() {
        if (!this.state.media) {
            return (
                <nav className='NavBar' id='NavBar'>
                    <img src={Logo} alt={Logo} className='Logo' />
                    <hr></hr>
                    <div className='links' >
                        <h6><NavLink to={'/home'} className={({isActive}) => isActive ? 'active': undefined}><span>00</span> HOME</NavLink></h6>
                        <h6><NavLink to={'/destination'} className={({isActive}) => isActive ? 'active': undefined}><span>01</span> DESTINATION</NavLink></h6>
                        <h6><NavLink to={'/crew'} className={({isActive}) => isActive ? 'active': undefined}><span>02</span> CREW</NavLink></h6>
                        <h6><NavLink to={'/technology'} className={({isActive}) => isActive ? 'active': undefined}><span>03</span> TECHNOLOGY</NavLink></h6>
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav className='NavBar' id='NavBar'>
                    <img src={Logo} alt={Logo} className='Logo' />
                    <img src={HamburgerIcon} alt={HamburgerIcon} className='Hamburger' onClick={this.handleOpen}/>
                    <div className='links hidden' id='links'>
                        <h6><NavLink to={'/home'} className={({isActive}) => isActive ? 'active': undefined}><span>00</span> HOME</NavLink></h6>
                        <h6><NavLink to={'/destination'} className={({isActive}) => isActive ? 'active': undefined}><span>01</span> DESTINATION</NavLink></h6>
                        <h6><NavLink to={'/crew'} className={({isActive}) => isActive ? 'active': undefined}><span>02</span> CREW</NavLink></h6>
                        <h6><NavLink to={'/technology'} className={({isActive}) => isActive ? 'active': undefined}><span>03</span> TECHNOLOGY</NavLink></h6>
                    </div>
                </nav>
            )
        }
        
    }
}