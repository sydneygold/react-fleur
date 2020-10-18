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

    filterOutFlower = (flowerToBeRemoved) => {
        return this.state.bouquet.filter(flower => flower !== flowerToBeRemoved)
    }

    selectFlower = (flower) => {
        if (!this.state.bouquet.includes(flower)) {
            this.setState({bouquet: [...this.state.bouquet, flower]}) 
        }
        else {
            this.setState({bouquet: this.filterOutFlower(flower)})
        }
    }

    render(){
        return (
            <main className="MainPage">
                <Bouquet 
                    bouquet={this.state.bouquet}
                    selectFlower={this.selectFlower}
                />
                <AllFlowers
                    flowers={this.state.flowers}
                    selectFlower={this.selectFlower}
                />
            </main>
        )
    }
}
