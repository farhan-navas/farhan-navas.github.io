import React, { Component } from 'react'
import Data from './starter-code/data.json'

export default class Technology extends Component {
    constructor(props) {
        super(props)
        this.state = { tech: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (e.target.className === 'Launch Vehicle') {
            this.setState({ tech: 0 })
        } else if (e.target.className === 'Spaceport') {
            this.setState({ tech: 1 })
        } else if (e.target.className === 'Space Capsule') {
            this.setState({ tech: 2 })
        } 
    }

    render() {
        const techData = Data.technology[this.state.tech]
        const techName = techData.name
        const techDescription = techData.description
        const images = Object.values(techData.images)
        const techPortrait = images[0].substring(1)
        const techLandscape = images[1].substring(1)         
        return (
            <div className='Technology'>
                <h1 className='Technology-heading'>03 SPACE LAUNCH 101</h1>
                <section>
                    <button onClick={this.handleClick} className='Launch Vehicle'>1</button>
                    <button onClick={this.handleClick} className='Spaceport'>2</button>
                    <button onClick={this.handleClick} className='Space Capsule'>3</button>
                </section>
                <h3 className='Technology-subheading'>THE TERMINOLOGY_</h3>
                <h2 className='Technology-name'>{ techName }</h2>
                <p className='Technology-description'>{ techDescription }</p>
                <figure className='Technology-image'>
                    <img src={require(`./starter-code${techLandscape}`)} alt={techName} />
                </figure>
            </div>
        )
    }
}