import React from 'react'

export default function FlowerCard({flower, selectFlower}) {

    const handleClick = () => selectFlower(flower)

    return (
        <section className="card">
            <img src={`./Flowers/${flower.image}`}
                alt="" onClick={handleClick}
            />
            <h3>{flower.name}</h3>
        </section>
    )
}
