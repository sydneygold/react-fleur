import React, {useState} from 'react'

export default function FlowerCard({flower, selectFlower}) {

    const [isHovered, toggleHover] = useState(false)
    
    const handleClick = () => {
        selectFlower(flower)
    }

    const handleHover = () => {
        console.log("you're hovering me!")
        toggleHover(!isHovered)
    }

    // const handleHoverOut = () => {
    //     console.log("you stopped hovering me!")
    // }

    return (
        <section className="card" onMouseOver={handleHover} onMouseLeave={handleHover}>
            <img 
                src={`./Flowers/${flower.image}`} 
                alt={flower.name}
                onClick={handleClick}
            />
            <h3>{flower.name}</h3>
            {isHovered === true ? 
                <p>{flower.description}</p>
                : null} 
        </section>
    )
}
