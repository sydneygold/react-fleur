import React from 'react'

export default function FlowerCard({flower}) {
    return (
        <section className="card">
            <img src={`./Flowers/${flower.image}`} alt=""/>
            <h3>{flower.name}</h3>
        </section>
    )
}
