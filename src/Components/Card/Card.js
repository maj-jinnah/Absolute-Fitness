import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, details, img, age, time } = props.player;
    // console.log(props.player);
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='text'>
                <h3>{name}</h3>
                <p>{details.slice(0, 90)}...</p>
                <p>Age: <strong>{age}</strong></p>
                <p>Time required: <strong>{time}</strong> minutes</p>
            </div>
            <button>Add To List</button>
        </div>
    );
};

export default Card;