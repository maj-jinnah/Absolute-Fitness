import React, { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Activity.css'



const Activity = (props) => {
    const { time } = props;
    
    const showToastMessage = () => {
        toast('Hello Geeks')
    };

    return (
        <div className='info'>
            <div className='personal-info'>
                <h2>Mohammad Ali JInnah</h2>
                <p>Junior Web Developer</p>
                <p>Age: 23 years</p>
            </div>
            <div>
                <h3>Add a Break </h3>
                <div className='break-time'>
                    <button> <span>2</span>min</button>
                    <button> <span>4</span>min</button>
                    <button> <span>5</span>min</button>
                    <button> <span>8</span>min</button>
                    <button> <span>10</span>min</button>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div className='total-break'>
                    <p>Total Exercise Time: {time} min</p>
                    <p>Total Break time: 0 min</p>
                </div>
            </div>
            <button className='complete-btn' onClick={showToastMessage}>Activity Completed</button>
        </div>
    );
};

export default Activity;