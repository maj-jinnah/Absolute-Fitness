import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Navber.css'

const Navber = () => {
    return (
        <div className='nav'>
            <div className='name-nav'>
                <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
                <h1>Absolute Fitness</h1>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/workout">Work Out</a>
                <a href="/about">About Us</a>
            </div>
        </div>
    );
};

export default Navber;