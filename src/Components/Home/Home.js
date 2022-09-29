import React from 'react';
import Blog from '../Blog/Blog';
import Body from '../Body/Body';
import Navber from '../Navber/Navber';

const Home = () => {
    return (
        <div className='home'>
            <Navber></Navber>
            <Body></Body>
            <Blog></Blog>
        </div>
    );
};

export default Home;