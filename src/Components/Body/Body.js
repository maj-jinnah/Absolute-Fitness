import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Card from '../Card/Card';
import './Body.css'

const Body = () => {

    const [cards, setCards] = useState([]);
    const [time, setTime] = useState(0);

    const getTimeFromCard = (timeRequired) => {
        const newTime = time+ timeRequired
        setTime(newTime);
    }

    useEffect(() => {
        fetch('fake.json')
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
                            getTimeFromCard= {getTimeFromCard}
                        ></Card>)
                    }

                </div>
                <div className='activity'>
                    <Activity time= {time}></Activity>
                </div>
            </div>
        </div>
    );
};

export default Body;