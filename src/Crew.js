import React, { Component } from 'react'
import Data from './starter-code/data.json'

export default class Crew extends Component {
    constructor(props) {
        super(props)
        this.state = { crew: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (e.target.className === 'Commander') {
            this.setState({ crew: 0 })
        } else if (e.target.className === 'Mission Specialist') {
            this.setState({ crew: 1 })
        } else if (e.target.className === 'Flight Engineer') {
            this.setState({ crew: 2 })
        } else if (e.target.className === 'Pilot') {
            this.setState({ crew: 3 })
        }
    }

    render() {
        const crewData = Data.crew[this.state.crew]
        const crewName = crewData.name
        const crewRole = crewData.role
        const crewImage = crewData.images.substring(1)
        const crewBio = crewData.bio
        return (
            <div className='Crew'>
                <h1 className='Crew-heading'>02 MEET YOUR CREW</h1>
                <h3 className='Crew-role'>{ crewRole }</h3>
                <h2 className='Crew-name'>{ crewName }</h2>
                <div className='Crew-bio>'>{ crewBio }</div>
                <section>
                    <button onClick={this.handleClick} className='Commander'>C</button>
                    <button onClick={this.handleClick} className='Mission Specialist'>MS</button>
                    <button onClick={this.handleClick} className='Flight Engineer'>FE</button>
                    <button onClick={this.handleClick} className='Pilot'>P</button>
                </section>
                <figure className='Crew-image'>
                    <img src={require(`./starter-code${crewImage}`)} alt={crewName} />
                </figure>
            </div>
        )
    }
}