import React from 'react'
import FlowerCard from '../components/FlowerCard'

export default function AllFlowers({flowers}) {

    const renderFlowers = () => {
        return flowers.map(flower => {
            return <FlowerCard key={flower.id} flower={flower}/>
        })
    }

    return (
        <div className="flower-list">
            <h2>Select Your Flowers</h2>
            {renderFlowers()}
        </div>
    )
}
