import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div >
            <h1 className='question'>What is context api?</h1>
            <p className='question'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h1 className='question'>What is semantic tag?</h1>
            <p className='question'>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.</p>
        </div>
    );
};

export default Blogs;