import React from 'react'
import FlowerCard from '../components/FlowerCard'

export default function Bouquet({bouquet, selectFlower}) {
    console.log(bouquet)

    const renderBouquet = () => {
        return bouquet.map(flower => {
            return (
                <FlowerCard 
                    key={flower.id} 
                    flower={flower}
                    selectFlower={selectFlower}
                />
            )
        })
    }

    return (
        <div className="bouquet">
            <div className="header">
                <h2>Bouquet</h2>
            </div>
            {renderBouquet()}
        </div>
    )
}
