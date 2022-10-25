import React, { Component } from 'react'
import Data from './starter-code/data.json'

export default class Destination extends Component {
    constructor(props) {
        super(props)
        this.state = { destination: (0) }
        this.getDestination = this.getDestination.bind(this)
    }

    getDestination() {
        const destData = Data.destinations[this.state.destination]
        const destName = destData.name
        const destDesc = destData.description
        const destImage = './starter-code' + destData.images.substring(1)
        console.log(destImage)
        return (
            <>
                <h1 className='name'>{ destName }</h1>
                <p className='description'>{ destDesc }</p>
                <figure className='image'>
                    <img src={destImage} alt={'Image of the' + destName} />
                </figure>
            </>
        )
    }

    render() {
        return (
            this.getDestination()
        )
    }
}