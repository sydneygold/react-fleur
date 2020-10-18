import React, { Component } from 'react'
import AllFlowers from './AllFlowers'
import Bouquet from './Bouquet'

export default class Main extends Component {

    state = {
        flowers: [],
        bouquet: []
    }

    componentDidMount(){
        fetch('https://fleur-speak-backend.herokuapp.com/flowers')
            .then(response => response.json())
            .then(data => this.setState({flowers: data}))
    }



    render(){
        return (
            <main className="MainPage">
                <Bouquet />
                <AllFlowers flowers={this.state.flowers}/>
            </main>
        )
    }
}
