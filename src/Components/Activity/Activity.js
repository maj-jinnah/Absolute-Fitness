import React from 'react';
import './Activity.css'

const Activity = () => {
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
                    <button> <span>10</span>s</button>
                    <button> <span>10</span>s</button>
                    <button> <span>10</span>s</button>
                    <button> <span>10</span>s</button>
                    <button> <span>10</span>s</button>
                </div>
            </div>
            <dir>
                <h3>Exercise Details</h3>
                <div>
                    <p>Exercise Time 0 min</p>
                    <p>Break time 0 min</p>
                </div>
            </dir>
        </div>
    );
};

export default Activity;