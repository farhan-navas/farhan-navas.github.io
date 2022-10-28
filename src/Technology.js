import React, { Component } from 'react'
import NavBar from './NavBar'
import Data from './starter-code/data.json'
import './Technology.css'

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
            <div className='tech'>
                <NavBar />
                <div className='Technology'>
                    <div className='Technology-main'>
                        <div className='Technology-intro'>
                            <h4 className='Technology-heading'><span>03</span> SPACE LAUNCH 101</h4>
                        </div>
                        
                        <div className='Technology-content'>
                            <section className='Technology-buttons'>
                                <h3 onClick={this.handleClick} className={ this.state.tech === 0 ? 'Launch Vehicle active' : 'Launch Vehicle'}>1</h3>
                                <h3 onClick={this.handleClick} className={ this.state.tech === 1 ? 'Spaceport active' : 'Spaceport'}>2</h3>
                                <h3 onClick={this.handleClick} className={ this.state.tech === 2 ? 'Space Capsule active' : 'Space Capsule'}>3</h3>
                            </section>
                            <div className='Technology-content-desc'>
                                <h6 className='Technology-subheading'>THE TERMINOLOGY...</h6>
                                <h2 className='Technology-name'>{ techName }</h2>
                                <p className='Technology-description'>{ techDescription }</p>
                            </div>
                        </div>
                    </div>
                    
                    <figure className='Technology-image'>
                        <img src={require(`./starter-code${techPortrait}`)} alt={techName} />
                    </figure>
                </div>
            </div>
        )
    }
}