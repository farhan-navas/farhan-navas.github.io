import React, { Component } from 'react'
import Data from './starter-code/data.json'

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
        return (
            <div className='Destination'>
                <h1 className='Destination-heading'>01 PICK YOUR DESTINATION</h1>
                <figure className='Destination-image'>
                    <img src={require(`./starter-code${destImage}`)} alt={`Image of the ${destName}`} />
                </figure>
                <section>
                    <button onClick={this.handleClick} className='Moon'>Moon</button>
                    <button onClick={this.handleClick} className='Mars'>Mars</button>
                    <button onClick={this.handleClick} className='Europa'>Europa</button>
                    <button onClick={this.handleClick} className='Titan'>Titan</button>
                </section>
                <h1 className='Destination-name'>{ destName }</h1>
                <p className='Destination-desc'>{ destDesc }</p>
                <div>
                    <div className='Destination-distance'>
                        <h3>AVG. DISTANCE</h3>
                        <h2>{ destDistance }</h2>
                    </div>
                    <div className='Destination-distance'>
                        <h3>AVG. DISTANCE</h3>
                        <h2>{ destDistance }</h2>
                    </div>
                    </div>              
            </div>
        )
    }
}