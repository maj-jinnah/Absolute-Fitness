import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h2>1. How does react work?</h2>
                <p>Ans: React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
            </div>
            <div>
                <h2>2. What is the difference between props and state in react?</h2>
                <p>Ans: Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).</p>
            </div>
            <div>
                <h2>3. Uses of useeffect in react?</h2>
                <p>Ans: The useEffect Hook allows performing side effects in the components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates. </p>
            </div>
        </div>
    );
};

export default Blog;