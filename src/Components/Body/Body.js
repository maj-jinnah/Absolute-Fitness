import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Body.css'

const Body = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <div className='body-container'>
                <div className='cards'>
                    {
                        cards.map(card => <Card
                            key={card.id}
                            player={card}
                        ></Card>)
                    }

                </div>
                <div className='activity'>
                    
                </div>
            </div>
        </div>
    );
};

export default Body;