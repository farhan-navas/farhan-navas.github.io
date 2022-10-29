import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavLinks extends Component {
    render() {
        return (
            <div className='links' >
                <h6><NavLink to={'/home'} className={({isActive}) => isActive ? 'active': undefined}><span>00</span> HOME</NavLink></h6>
                <h6><NavLink to={'/destination'} className={({isActive}) => isActive ? 'active': undefined}><span>01</span> DESTINATION</NavLink></h6>
                <h6><NavLink to={'/crew'} className={({isActive}) => isActive ? 'active': undefined}><span>02</span> CREW</NavLink></h6>
                <h6><NavLink to={'/technology'} className={({isActive}) => isActive ? 'active': undefined}><span>03</span> TECHNOLOGY</NavLink></h6>
            </div>
        )
    }
}