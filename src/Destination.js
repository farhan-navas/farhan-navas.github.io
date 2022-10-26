import React, { Component } from 'react'
import Data from './starter-code/data.json'
import './Destination.css'

export default class Destination extends Component {
    constructor(props) {
        super(props)
        this.state = { destination: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (e.target.className === 'Moon') {
            this.setState({ destination: 0 })
        } else if (e.target.className === 'Mars') {
            this.setState({ destination: 1 })
        } else if (e.target.className === "Europa") {
            this.setState({ destination: 2 })
        } else if (e.target.className === "Titan") {
            this.setState({ destination: 3 })
        }
    }

    render() {
        const destData = Data.destinations[this.state.destination]
        const destName = destData.name
        const destDesc = destData.description
        const destImage = destData.images.substring(1)
        const destDistance = destData.distance
        const destTime = destData.travel
        return (
            <div className='Destination'>
                <div className='Destination-sidebar'>
                    <h4 className='Destination-heading'><span>01</span> PICK YOUR DESTINATION</h4>
                    <figure className='Destination-image'>
                        <img src={require(`./starter-code${destImage}`)} alt={destName} />
                    </figure>
                </div>

                <div className='Destination-content'>
                    <section className='Destination-buttons'>
                        <h6 onClick={this.handleClick} className='Moon'>Moon</h6>
                        <h6 onClick={this.handleClick} className='Mars'>Mars</h6>
                        <h6 onClick={this.handleClick} className='Europa'>Europa</h6>
                        <h6 onClick={this.handleClick} className='Titan'>Titan</h6>
                    </section>
                    <h1 className='Destination-name'>{ destName }</h1>
                    <p className='Destination-desc'>{ destDesc }</p>
                    <div className='Destination-bottom'>
                        <div className='Destination-distance'>
                            <h3>AVG. DISTANCE</h3>
                            <h2>{ destDistance }</h2>
                        </div>
                        <div className='Destination-time'>
                            <h3>EST. TRAVEL TIME</h3>
                            <h2>{ destTime }</h2>
                        </div>
                    </div>
                </div>              
            </div>
        )
    }
}