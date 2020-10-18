import React from 'react'
import FlowerCard from '../components/FlowerCard'

export default function AllFlowers({flowers, selectFlower}) {

    const renderFlowers = () => {
        return flowers.map(flower => {
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
        <>
        <div className="header">
            <h2>Select Your Flowers</h2>
        </div>
            <div className="flower-list">
            {renderFlowers()}
        </div>
        </>
    )
}
