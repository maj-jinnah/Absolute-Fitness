import React from 'react';
import './Card.css'

const Card = (props) => {
    const {player, getTimeFromCard} = props;
    const { name, details, img, age, time } = player;
    // console.log(player, getTimeFromCard);
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='text'>
                <h3>{name}</h3>
                <p>{details.slice(0, 90)}...</p>
                <p>Age: <strong>{age}</strong></p>
                <p>Time required: <strong>{time}</strong> minutes</p>
            </div>
            <button onClick={()=>{ getTimeFromCard(time)}}>Add To List</button>
        </div>
    );
};

export default Card;