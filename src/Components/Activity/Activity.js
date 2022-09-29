import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Activity.css'



const Activity = (props) => {
    const { time } = props;

    const showToastMessage = () => {
        toast('Hello Brother!');
    };

    const [exerciseTime, setExerciseTime] = useState(0);

    const addExerciseTime= (time) =>{
        setExerciseTime(time);
        localStorage.setItem('breakTime', exerciseTime)

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
                    <button onClick={()=>{addExerciseTime(2)}}>2 min</button>
                    <button onClick={()=>{addExerciseTime(4)}}>4 min</button>
                    <button onClick={()=>{addExerciseTime(5)}}>5 min</button>
                    <button onClick={()=>{addExerciseTime(8)}}>8 min</button>
                    <button onClick={()=>{addExerciseTime(10)}}>10min</button>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div className='total-break'>
                    <p>Total Exercise Time: {time} min</p>
                    <p>Total Break time: {exerciseTime} min</p>
                </div>
            </div>
            <button className='complete-btn' onClick={showToastMessage}>Activity Completed</button>
        </div>
    );
};

export default Activity;