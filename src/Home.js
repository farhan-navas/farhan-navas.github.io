import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <main className='MainPage'>
                    <h4 className='MainPage-subheading'>So, You want to travel to space</h4>
                    <h1 className='MainPage-heading'>SPACE</h1>
                </main>

                <div className='MainPage-content'>
                    Let's face it: if you want to go to space, you might as well genuinely go to outer space and not kind of on the edge of
                    it. Well sit back, and relax because we'll give you a truly out of this world experience.
                </div>

                <div className='MainPage-button'>
                    <button>EXPLORE</button>
                </div>
            </div>            
        )
    }
}