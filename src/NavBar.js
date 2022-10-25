import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Destination from './Destination'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to={'/'}>00 HOME</Link>
                <Link to={'/destination'}>01 DESTINATION</Link>
                <Link to={'/crew'}>02 CREW</Link>
                <Link to={'/technology'}>03 TECHNOLOGY</Link>
            </nav>
        )
    }
}